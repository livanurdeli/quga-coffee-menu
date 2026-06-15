// app.js — QuGa COFFEE · Static Menu + Detailed Admin Panel

// ── State ──────────────────────────────────────────────────────────────────
let currentLanguage = 'tr';
let currentTheme    = 'light';
let searchQuery     = '';
const activeTags    = new Set();
let isAdmin         = false;
let adminPanelCat   = 'all';
let adminPanelSearch = '';
let currentEditId   = null;
let pendingImageData = null; // base64 or URL chosen in edit modal

const ADMIN_USER = 'admin';
const ADMIN_PASS = 'quga2024';

// Persisted edits: { [itemId]: { name, description, price, image } }
let adminEdits = JSON.parse(localStorage.getItem('quga_admin_edits') || '{}');
let adminAddedItems = JSON.parse(localStorage.getItem('quga_added_items') || '[]');
let adminDeletedItems = JSON.parse(localStorage.getItem('quga_deleted_items') || '[]');

// ── Translations ───────────────────────────────────────────────────────────
const t = {
  tr: {
    search:'Ürün veya kategori ara...', popular:'⭐ Popüler', vegan:'🌱 Vegan',
    gf:'🌾 Glutensiz', hot:'🔥 Sıcak', cold:'❄️ Soğuk',
    calories:'Kalori', allergens:'Alerjen',
    emptySearch:'Aramanıza uygun ürün bulunamadı.',
    emptySearchBody:'Farklı bir kelime deneyin veya filtreleri kaldırın.',
    popular_badge:'POPÜLER', cold_badge:'SOĞUK', tagVeg:'🌱 Veg', tagGf:'🌾 GF',
  },
  en: {
    search:'Search food or drinks...', popular:'⭐ Popular', vegan:'🌱 Vegan',
    gf:'🌾 Gluten-Free', hot:'🔥 Hot', cold:'❄️ Cold',
    calories:'Calories', allergens:'Allergens',
    emptySearch:'No products match your search.',
    emptySearchBody:'Try a different keyword or clear the filters.',
    popular_badge:'POPULAR', cold_badge:'COLD', tagVeg:'🌱 Veg', tagGf:'🌾 GF',
  }
};

// ── Apply admin edits to live menuData ────────────────────────────────────
function applyAdminEdits() {
  const baseItems = [
    ...window.menuData._originalItems,
    ...adminAddedItems
  ];
  window.menuData.menuItems = baseItems
    .filter(item => !adminDeletedItems.includes(item.id))
    .map(item => {
      const edit = adminEdits[item.id];
      if (!edit) return item;
      return {
        ...item,
        name:        { ...item.name,        ...(edit.name || {}) },
        description: { ...item.description, ...(edit.description || {}) },
        price:       edit.price  !== undefined ? edit.price  : item.price,
        image:       edit.image  !== undefined ? edit.image  : item.image,
      };
    });
}

// ── Init ───────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  if (!window.menuData._originalItems) {
    window.menuData._originalItems = JSON.parse(JSON.stringify(window.menuData.menuItems));
  }
  applyAdminEdits();
  setupLanguageToggle();
  setupThemeToggle();
  setupSearchAndFilters();
  setupProductModal();
  setupAdminPanel();
  renderCategories();
  renderMenu();
});

// ── Language Toggle ────────────────────────────────────────────────────────
function setupLanguageToggle() {
  document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLanguage = currentLanguage === 'tr' ? 'en' : 'tr';
    document.getElementById('lang-label').textContent = currentLanguage.toUpperCase();
    document.getElementById('menu-search').placeholder = t[currentLanguage].search;
    ['popular','vegan','gf','hot','cold'].forEach(tag =>
      document.getElementById(`filter-${tag}`).textContent = t[currentLanguage][tag]);
    renderCategories();
    renderMenu();
  });
}

// ── Theme Toggle ───────────────────────────────────────────────────────────
function setupThemeToggle() {
  document.getElementById('theme-toggle').addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    const icon = document.getElementById('theme-icon-dark');
    icon.outerHTML = currentTheme === 'dark'
      ? `<svg id="theme-icon-dark" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
      : `<svg id="theme-icon-dark" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  });
}

// ── Search & Filters ───────────────────────────────────────────────────────
function setupSearchAndFilters() {
  document.getElementById('menu-search').addEventListener('input', e => {
    searchQuery = e.target.value.trim();
    renderMenu();
  });
  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const tag = pill.dataset.tag;
      activeTags.has(tag) ? activeTags.delete(tag) : activeTags.add(tag);
      pill.classList.toggle('active');
      renderMenu();
    });
  });
}

// ── Render Categories ──────────────────────────────────────────────────────
function renderCategories() {
  const container = document.getElementById('categories-list');
  if (!container) return;
  container.innerHTML = window.menuData.menuCategories.map((cat, i) => `
    <div class="category-card ${i === 0 ? 'active' : ''}" data-cat-id="${cat.id}" id="cat-card-${cat.id}">
      <div class="category-icon">${cat.icon}</div>
      <span>${cat.name[currentLanguage]}</span>
    </div>`).join('');
  container.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      container.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const target = document.getElementById(`section-${card.dataset.catId}`);
      if (target) {
        const top = target.getBoundingClientRect().top + document.getElementById('app-view').scrollTop - 180;
        document.getElementById('app-view').scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ── Render Menu ────────────────────────────────────────────────────────────
function renderMenu() {
  const container = document.getElementById('menu-container');
  if (!container) return;
  const { menuCategories, menuItems } = window.menuData;
  const lang = currentLanguage;
  const tr_l = t[lang];

  const filtered = menuItems.filter(item => {
    const q = searchQuery.toLowerCase();
    const sm = !q || item.name[lang].toLowerCase().includes(q) || item.description[lang].toLowerCase().includes(q);
    let tm = true;
    if (activeTags.size > 0) activeTags.forEach(tag => { if (!item.tags.includes(tag)) tm = false; });
    return sm && tm;
  });

  if (!filtered.length) {
    container.innerHTML = `<div class="search-empty">
      <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <p style="font-weight:700;margin-top:10px">${tr_l.emptySearch}</p>
      <p style="font-size:.8rem">${tr_l.emptySearchBody}</p></div>`;
    return;
  }

  let html = '';
  menuCategories.forEach(cat => {
    const items = filtered.filter(i => i.categoryId === cat.id);
    if (!items.length) return;
    html += `<div class="menu-category-section" id="section-${cat.id}">
      <h2 class="section-title">${cat.name[lang]}</h2>
      <div class="menu-grid">${items.map(item => {
        const badge = item.tags.includes('popular')
          ? `<span class="badge-overlay">${tr_l.popular_badge}</span>`
          : item.tags.includes('cold') ? `<span class="badge-overlay badge-cold">${tr_l.cold_badge}</span>` : '';
        const tags = [
          item.tags.includes('vegan') ? `<span class="tag-mini tag-vegan">${tr_l.tagVeg}</span>` : '',
          item.tags.includes('gf')    ? `<span class="tag-mini">${tr_l.tagGf}</span>` : '',
        ].join('');
        const editBtn = isAdmin
          ? `<button class="btn-card-admin-edit" data-edit-id="${item.id}" aria-label="Düzenle">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
             </button>` : '';
        const isEdited = !!adminEdits[item.id];
        return `<div class="menu-card ${isAdmin ? 'admin-highlight' : ''}" data-product-id="${item.id}">
          ${editBtn}
          ${isEdited && isAdmin ? '<div class="card-edited-dot" title="Düzenlendi"></div>' : ''}
          <div class="menu-card-img-wrapper">
            <img class="menu-card-img" src="${item.image}" alt="${item.name[lang]}" loading="lazy"
              onerror="this.src='https://placehold.co/400x300/F1ECE6/9C8E86?text=QuGa'">
            ${badge}
          </div>
          <div class="menu-card-info">
            <div class="menu-card-top">
              <h3>${item.name[lang]}</h3>
              <p class="menu-card-desc">${item.description[lang]}</p>
              <div class="item-tags">${tags}</div>
            </div>
            <div class="menu-card-bottom">
              <div class="menu-price">${item.price} TL<span class="menu-cal">${item.calories} kcal</span></div>
            </div>
          </div>
        </div>`;
      }).join('')}</div>
    </div>`;
  });
  container.innerHTML = html;

  container.querySelectorAll('.menu-card').forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('.btn-card-admin-edit')) return;
      openProductModal(card.dataset.productId);
    });
  });
  container.querySelectorAll('.btn-card-admin-edit').forEach(btn => {
    btn.addEventListener('click', e => { e.stopPropagation(); openAdminEditModal(btn.dataset.editId); });
  });
  setupScrollObserver();
}

// ── Product Detail Modal ───────────────────────────────────────────────────
function setupProductModal() {
  document.getElementById('btn-close-modal').addEventListener('click', () =>
    document.getElementById('product-detail-modal').classList.remove('open'));
  document.getElementById('product-detail-modal').addEventListener('click', e => {
    if (e.target === e.currentTarget) e.currentTarget.classList.remove('open');
  });
}

function openProductModal(id) {
  const item = window.menuData.menuItems.find(i => i.id === id);
  if (!item) return;
  const lang = currentLanguage;
  const cat  = window.menuData.menuCategories.find(c => c.id === item.categoryId);
  document.getElementById('modal-category').textContent = cat ? cat.name[lang] : '';
  document.getElementById('modal-image').src = item.image;
  document.getElementById('modal-name').textContent = item.name[lang];
  document.getElementById('modal-price').textContent = `${item.price} TL`;
  document.getElementById('modal-desc').textContent = item.description[lang];
  document.getElementById('lbl-calories').textContent = t[lang].calories;
  document.getElementById('modal-calories').textContent = `${item.calories} kcal`;
  document.getElementById('lbl-allergens').textContent = t[lang].allergens;
  document.getElementById('modal-allergens').textContent = item.allergens[lang] || '—';
  document.getElementById('product-detail-modal').classList.add('open');
}

// ── Admin Panel Setup ──────────────────────────────────────────────────────
function setupAdminPanel() {
  // Trigger
  document.getElementById('btn-admin-trigger').addEventListener('click', () => {
    if (isAdmin) {
      openAdminPanel();
    } else {
      document.getElementById('admin-username').value = '';
      document.getElementById('admin-password').value = '';
      document.getElementById('admin-login-error').style.display = 'none';
      document.getElementById('admin-login-modal').classList.add('open');
    }
  });

  // Close login
  document.getElementById('btn-close-admin-login').addEventListener('click', () =>
    document.getElementById('admin-login-modal').classList.remove('open'));
  document.getElementById('admin-login-modal').addEventListener('click', e => {
    if (e.target === e.currentTarget) e.currentTarget.classList.remove('open');
  });

  // Submit login
  const doLogin = () => {
    const u = document.getElementById('admin-username').value.trim();
    const p = document.getElementById('admin-password').value;
    if (u === ADMIN_USER && p === ADMIN_PASS) {
      isAdmin = true;
      document.getElementById('admin-login-modal').classList.remove('open');
      document.getElementById('btn-admin-trigger').classList.add('admin-active');
      document.getElementById('admin-status-label').textContent = '⚙️ Admin Modu';
      renderMenu();
      openAdminPanel();
    } else {
      document.getElementById('admin-login-error').style.display = 'block';
    }
  };
  document.getElementById('btn-admin-login-submit').addEventListener('click', doLogin);
  document.getElementById('admin-password').addEventListener('keydown', e => { if (e.key === 'Enter') doLogin(); });

  // Close admin panel
  document.getElementById('btn-close-admin-panel').addEventListener('click', () =>
    document.getElementById('admin-panel').classList.remove('open'));

  // Logout
  document.getElementById('btn-admin-logout').addEventListener('click', () => {
    isAdmin = false;
    document.getElementById('admin-panel').classList.remove('open');
    document.getElementById('btn-admin-trigger').classList.remove('admin-active');
    document.getElementById('admin-status-label').textContent = '✦ Menü';
    renderMenu();
    showToast('Admin çıkışı yapıldı.');
  });

  // Reset
  document.getElementById('btn-admin-reset').addEventListener('click', () => {
    if (!confirm('Tüm değişiklikler (eklenen, silinen ürünler ve düzenlemeler) sıfırlanacak. Emin misin?')) return;
    adminEdits = {};
    adminAddedItems = [];
    adminDeletedItems = [];
    localStorage.removeItem('quga_admin_edits');
    localStorage.removeItem('quga_added_items');
    localStorage.removeItem('quga_deleted_items');
    window.menuData.menuItems = JSON.parse(JSON.stringify(window.menuData._originalItems));
    renderMenu();
    renderAdminList();
    showToast('Menü varsayılana sıfırlandı.');
  });

  // Admin search
  document.getElementById('admin-search').addEventListener('input', e => {
    adminPanelSearch = e.target.value.trim().toLowerCase();
    renderAdminList();
  });

  // Close edit modal
  document.getElementById('btn-close-admin-edit').addEventListener('click', () => {
    document.getElementById('admin-edit-modal').classList.remove('open');
    openAdminPanel();
  });
  document.getElementById('admin-edit-modal').addEventListener('click', e => {
    if (e.target === e.currentTarget) {
      e.currentTarget.classList.remove('open');
      openAdminPanel();
    }
  });

  // File picker → read as base64
  document.getElementById('edit-img-file').addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      pendingImageData = ev.target.result; // base64 data URL
      document.getElementById('edit-img-preview').src = pendingImageData;
      document.getElementById('edit-image-url').value = '';
    };
    reader.readAsDataURL(file);
  });

  // URL input → update preview
  document.getElementById('edit-image-url').addEventListener('input', e => {
    const url = e.target.value.trim();
    if (url) {
      pendingImageData = url;
      document.getElementById('edit-img-preview').src = url;
      // Clear file input
      document.getElementById('edit-img-file').value = '';
    }
  });

  // Name language tabs
  document.getElementById('name-tab-tr').addEventListener('click', () => switchNameTab('tr'));
  document.getElementById('name-tab-en').addEventListener('click', () => switchNameTab('en'));

  // Desc language tabs
  document.getElementById('desc-tab-tr').addEventListener('click', () => switchDescTab('tr'));
  document.getElementById('desc-tab-en').addEventListener('click', () => switchDescTab('en'));

  // Save
  document.getElementById('btn-admin-edit-save').addEventListener('click', saveAdminEdit);

  // ── Add Product listeners ──
  document.getElementById('btn-open-add-product').addEventListener('click', openAdminAddModal);
  
  document.getElementById('btn-close-admin-add').addEventListener('click', () => {
    document.getElementById('admin-add-modal').classList.remove('open');
    openAdminPanel();
  });
  
  document.getElementById('admin-add-modal').addEventListener('click', e => {
    if (e.target === e.currentTarget) {
      e.currentTarget.classList.remove('open');
      openAdminPanel();
    }
  });

  document.getElementById('add-img-file').addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      pendingAddImageData = ev.target.result;
      document.getElementById('add-img-preview').src = pendingAddImageData;
      document.getElementById('add-image-url').value = '';
    };
    reader.readAsDataURL(file);
  });

  document.getElementById('add-image-url').addEventListener('input', e => {
    const url = e.target.value.trim();
    if (url) {
      pendingAddImageData = url;
      document.getElementById('add-img-preview').src = url;
      document.getElementById('add-img-file').value = '';
    }
  });

  document.getElementById('add-name-tab-tr').addEventListener('click', () => switchAddNameTab('tr'));
  document.getElementById('add-name-tab-en').addEventListener('click', () => switchAddNameTab('en'));
  document.getElementById('add-desc-tab-tr').addEventListener('click', () => switchAddDescTab('tr'));
  document.getElementById('add-desc-tab-en').addEventListener('click', () => switchAddDescTab('en'));

  document.getElementById('btn-admin-add-save').addEventListener('click', saveAdminAdd);
}

let pendingAddImageData = null;

function openAdminAddModal() {
  const select = document.getElementById('add-category');
  if (select) {
    select.innerHTML = window.menuData.menuCategories.map(c => `
      <option value="${c.id}">${c.name['tr']}</option>
    `).join('');
  }

  document.getElementById('add-price').value = '';
  document.getElementById('add-name-tr').value = '';
  document.getElementById('add-name-en').value = '';
  document.getElementById('add-desc-tr').value = '';
  document.getElementById('add-desc-en').value = '';
  document.getElementById('add-image-url').value = '';
  document.getElementById('add-img-preview').src = 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&auto=format&fit=crop&q=60';
  document.getElementById('add-img-file').value = '';
  pendingAddImageData = null;

  switchAddNameTab('tr');
  switchAddDescTab('tr');

  document.getElementById('admin-panel').classList.remove('open');
  document.getElementById('admin-add-modal').classList.add('open');
}

function switchAddNameTab(lang) {
  ['tr','en'].forEach(l => {
    document.getElementById(`add-name-tab-${l}`).classList.toggle('active', l === lang);
    document.getElementById(`add-name-${l}`).classList.toggle('hidden', l !== lang);
  });
}

function switchAddDescTab(lang) {
  ['tr','en'].forEach(l => {
    document.getElementById(`add-desc-tab-${l}`).classList.toggle('active', l === lang);
    document.getElementById(`add-desc-${l}`).classList.toggle('hidden', l !== lang);
  });
}

function saveAdminAdd() {
  const priceVal = parseFloat(document.getElementById('add-price').value);
  const nameTr = document.getElementById('add-name-tr').value.trim();
  const nameEn = document.getElementById('add-name-en').value.trim();
  const descTr = document.getElementById('add-desc-tr').value.trim();
  const descEn = document.getElementById('add-desc-en').value.trim();
  const categoryId = document.getElementById('add-category').value;
  const urlInput = document.getElementById('add-image-url').value.trim();

  if (isNaN(priceVal) || priceVal < 0) { showToast('Geçerli bir fiyat girin!'); return; }
  if (!nameTr || !nameEn) { showToast('İsimler boş olamaz!'); return; }

  let finalImage = 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&auto=format&fit=crop&q=60';
  if (pendingAddImageData) {
    finalImage = pendingAddImageData;
  } else if (urlInput) {
    finalImage = urlInput;
  }

  const newItem = {
    id: 'custom_' + Date.now(),
    categoryId: categoryId,
    name: { tr: nameTr, en: nameEn },
    description: { tr: descTr, en: descEn },
    price: priceVal,
    calories: 0,
    allergens: { tr: "", en: "" },
    tags: [],
    image: finalImage,
    options: { hasMilk: false, hasSweetness: false, hasSyrups: false }
  };

  adminAddedItems.push(newItem);
  try {
    localStorage.setItem('quga_added_items', JSON.stringify(adminAddedItems));
  } catch (e) {
    showToast('⚠️ Depolama doldu. Resmi URL ile deneyin.');
    return;
  }

  applyAdminEdits();
  document.getElementById('admin-add-modal').classList.remove('open');
  renderMenu();
  openAdminPanel();
  showToast('✓ Yeni ürün başarıyla eklendi!');
}

function switchNameTab(lang) {
  ['tr','en'].forEach(l => {
    document.getElementById(`name-tab-${l}`).classList.toggle('active', l === lang);
    document.getElementById(`edit-name-${l}`).classList.toggle('hidden', l !== lang);
  });
}
function switchDescTab(lang) {
  ['tr','en'].forEach(l => {
    document.getElementById(`desc-tab-${l}`).classList.toggle('active', l === lang);
    document.getElementById(`edit-desc-${l}`).classList.toggle('hidden', l !== lang);
  });
}

// ── Open Admin Panel ───────────────────────────────────────────────────────
function openAdminPanel() {
  renderAdminCatTabs();
  renderAdminList();
  document.getElementById('admin-panel').classList.add('open');
}

function renderAdminCatTabs() {
  const wrap = document.getElementById('admin-cat-tabs');
  const cats = window.menuData.menuCategories;
  wrap.innerHTML = `<button class="admin-cat-tab ${adminPanelCat === 'all' ? 'active' : ''}" data-cat="all">Tümü</button>`
    + cats.map(c => `<button class="admin-cat-tab ${adminPanelCat === c.id ? 'active' : ''}" data-cat="${c.id}">${c.icon} ${c.name['tr']}</button>`).join('');
  wrap.querySelectorAll('.admin-cat-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      adminPanelCat = btn.dataset.cat;
      wrap.querySelectorAll('.admin-cat-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderAdminList();
    });
  });
}

function renderAdminList() {
  const list = document.getElementById('admin-items-list');
  if (!list) return;

  let items = window.menuData.menuItems;
  if (adminPanelCat !== 'all') items = items.filter(i => i.categoryId === adminPanelCat);
  if (adminPanelSearch) items = items.filter(i =>
    i.name['tr'].toLowerCase().includes(adminPanelSearch) ||
    i.name['en'].toLowerCase().includes(adminPanelSearch));

  if (!items.length) {
    list.innerHTML = `<div style="text-align:center;padding:30px;color:var(--text-tertiary);font-size:.85rem">Ürün bulunamadı</div>`;
    return;
  }

  list.innerHTML = items.map(item => {
    const edited = adminEdits[item.id];
    const editedFields = [];
    if (edited?.price !== undefined)    editedFields.push('fiyat');
    if (edited?.image)                  editedFields.push('resim');
    if (edited?.name)                   editedFields.push('isim');
    if (edited?.description)            editedFields.push('açıklama');
    const editedLabel = editedFields.length
      ? `<div class="admin-edited-fields">${editedFields.map(f => `<span>${f}</span>`).join('')}</div>` : '';

    return `<div class="admin-item-row" data-id="${item.id}">
      <div class="admin-item-thumb-wrap">
        <img class="admin-item-thumb" src="${item.image}"
          onerror="this.src='https://placehold.co/60x60/F1ECE6/9C8E86?text=?'" alt="">
        ${edited ? '<div class="admin-thumb-edited-dot"></div>' : ''}
      </div>
      <div class="admin-item-info">
        <div class="admin-item-name">${item.name['tr']}</div>
        <div class="admin-item-name-en">${item.name['en']}</div>
        <div class="admin-item-price">${item.price} TL ${editedLabel}</div>
      </div>
      <div style="display:flex; gap: 4px;">
        <button class="btn-admin-edit-item" data-edit-id="${item.id}" aria-label="Düzenle">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
        </button>
        <button class="btn-admin-delete-item" data-delete-id="${item.id}" aria-label="Sil" style="background:none; border:none; color:var(--text-tertiary); hover:color:#ef4444; cursor:pointer; padding:6px; display:flex; align-items:center; justify-content:center;">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
        </button>
      </div>
    </div>`;
  }).join('');

  list.querySelectorAll('.btn-admin-edit-item').forEach(btn => {
    btn.addEventListener('click', () => openAdminEditModal(btn.dataset.editId));
  });

  list.querySelectorAll('.btn-admin-delete-item').forEach(btn => {
    btn.addEventListener('click', () => deleteAdminItem(btn.dataset.deleteId));
  });
}

function deleteAdminItem(itemId) {
  if (!confirm('Bu ürünü menüden silmek istediğinize emin misiniz?')) return;

  // Check if it is a custom added item
  const addedIndex = adminAddedItems.findIndex(i => i.id === itemId);
  if (addedIndex !== -1) {
    adminAddedItems.splice(addedIndex, 1);
    localStorage.setItem('quga_added_items', JSON.stringify(adminAddedItems));
  } else {
    // Original item, track as deleted
    if (!adminDeletedItems.includes(itemId)) {
      adminDeletedItems.push(itemId);
      localStorage.setItem('quga_deleted_items', JSON.stringify(adminDeletedItems));
    }
  }

  // Clean up any edits for this item
  if (adminEdits[itemId]) {
    delete adminEdits[itemId];
    localStorage.setItem('quga_admin_edits', JSON.stringify(adminEdits));
  }

  applyAdminEdits();
  renderMenu();
  renderAdminList();
  showToast('✓ Ürün menüden silindi.');
}

// ── Open Admin Edit Modal ──────────────────────────────────────────────────
function openAdminEditModal(itemId) {
  const item = window.menuData.menuItems.find(i => i.id === itemId);
  if (!item) return;
  currentEditId    = itemId;
  pendingImageData = null;

  const cat = window.menuData.menuCategories.find(c => c.id === item.categoryId);
  document.getElementById('admin-edit-cat-label').textContent   = cat ? cat.name['tr'] : '';
  document.getElementById('admin-edit-product-name').textContent = item.name['tr'];

  document.getElementById('edit-img-preview').src = item.image;
  document.getElementById('edit-img-file').value  = '';
  document.getElementById('edit-image-url').value = item.image.startsWith('data:') ? '' : item.image;

  document.getElementById('edit-price').value   = item.price;
  document.getElementById('edit-name-tr').value = item.name.tr;
  document.getElementById('edit-name-en').value = item.name.en;
  document.getElementById('edit-desc-tr').value = item.description.tr;
  document.getElementById('edit-desc-en').value = item.description.en;

  // Reset tabs
  switchNameTab('tr');
  switchDescTab('tr');

  document.getElementById('admin-panel').classList.remove('open');
  document.getElementById('admin-edit-modal').classList.add('open');
}

// ── Save Admin Edit ────────────────────────────────────────────────────────
function saveAdminEdit() {
  if (!currentEditId) return;

  const newPrice   = parseFloat(document.getElementById('edit-price').value);
  const newNameTr  = document.getElementById('edit-name-tr').value.trim();
  const newNameEn  = document.getElementById('edit-name-en').value.trim();
  const newDescTr  = document.getElementById('edit-desc-tr').value.trim();
  const newDescEn  = document.getElementById('edit-desc-en').value.trim();
  const urlInput   = document.getElementById('edit-image-url').value.trim();

  if (isNaN(newPrice) || newPrice < 0) { showToast('Geçerli bir fiyat girin!'); return; }
  if (!newNameTr || !newNameEn)        { showToast('İsimler boş olamaz!'); return; }

  // Determine final image
  let finalImage;
  if (pendingImageData) {
    finalImage = pendingImageData;       // base64 or typed URL
  } else if (urlInput) {
    finalImage = urlInput;
  } else {
    // Keep existing
    const orig = window.menuData.menuItems.find(i => i.id === currentEditId);
    finalImage = orig ? orig.image : '';
  }

  // Persist
  adminEdits[currentEditId] = {
    price:       newPrice,
    image:       finalImage,
    name:        { tr: newNameTr, en: newNameEn },
    description: { tr: newDescTr, en: newDescEn },
  };

  // Keep base64 images out of the 5MB localStorage limit: if image > 500KB, warn
  const editCopy = { ...adminEdits };
  try {
    localStorage.setItem('quga_admin_edits', JSON.stringify(editCopy));
  } catch (e) {
    showToast('⚠️ Depolama doldu. Resmi URL ile deneyin.');
    return;
  }

  // Apply to live data
  const idx = window.menuData.menuItems.findIndex(i => i.id === currentEditId);
  if (idx !== -1) {
    window.menuData.menuItems[idx].price             = newPrice;
    window.menuData.menuItems[idx].image             = finalImage;
    window.menuData.menuItems[idx].name.tr           = newNameTr;
    window.menuData.menuItems[idx].name.en           = newNameEn;
    window.menuData.menuItems[idx].description.tr    = newDescTr;
    window.menuData.menuItems[idx].description.en    = newDescEn;
  }

  document.getElementById('admin-edit-modal').classList.remove('open');
  renderMenu();
  openAdminPanel();
  showToast('✓ Değişiklikler kaydedildi!');
}

// ── Toast ──────────────────────────────────────────────────────────────────
function showToast(msg) {
  const toast = document.getElementById('admin-toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

// ── Scroll Observer ────────────────────────────────────────────────────────
function setupScrollObserver() {
  const appView = document.getElementById('app-view');
  if (!appView) return;
  const sections = document.querySelectorAll('.menu-category-section');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const catId = e.target.id.replace('section-', '');
        document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
        const card = document.getElementById(`cat-card-${catId}`);
        if (card) { card.classList.add('active'); card.scrollIntoView({ inline:'center', behavior:'smooth', block:'nearest' }); }
      }
    });
  }, { root: appView, rootMargin: '-30% 0px -60% 0px', threshold: 0 });
  sections.forEach(s => obs.observe(s));
}
