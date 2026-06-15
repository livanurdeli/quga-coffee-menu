// app.js — QuGa COFFEE Static Menu + Admin Panel

// ── State ──────────────────────────────────────────────────────────────────
let currentLanguage = 'tr';
let currentTheme = 'light';
let searchQuery = '';
const activeTags = new Set();
let isAdmin = false;
let adminEdits = JSON.parse(localStorage.getItem('quga_admin_edits') || '{}');

// Admin credentials (change these as desired)
const ADMIN_USER = 'admin';
const ADMIN_PASS = 'quga2024';

// ── Translations ───────────────────────────────────────────────────────────
const t = {
  tr: {
    search: 'Ürün veya kategori ara...',
    popular: '⭐ Popüler', vegan: '🌱 Vegan', gf: '🌾 Glutensiz',
    hot: '🔥 Sıcak', cold: '❄️ Soğuk',
    calories: 'Kalori', allergens: 'Alerjen',
    emptySearch: 'Aramanıza uygun ürün bulunamadı.',
    emptySearchBody: 'Farklı bir kelime deneyin veya filtreleri kaldırın.',
    popular_badge: 'POPÜLER', cold_badge: 'SOĞUK',
    tagVeg: '🌱 Veg', tagGf: '🌾 GF',
  },
  en: {
    search: 'Search food or drinks...',
    popular: '⭐ Popular', vegan: '🌱 Vegan', gf: '🌾 Gluten-Free',
    hot: '🔥 Hot', cold: '❄️ Cold',
    calories: 'Calories', allergens: 'Allergens',
    emptySearch: 'No products match your search.',
    emptySearchBody: 'Try a different keyword or clear the filters.',
    popular_badge: 'POPULAR', cold_badge: 'COLD',
    tagVeg: '🌱 Veg', tagGf: '🌾 GF',
  }
};

// ── Merge admin edits into menuData ────────────────────────────────────────
function applyAdminEdits() {
  window.menuData.menuItems = window.menuData.menuItems.map(item => {
    if (adminEdits[item.id]) {
      return { ...item, ...adminEdits[item.id] };
    }
    return item;
  });
}

// ── Init ───────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
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
  const btn = document.getElementById('lang-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'tr' ? 'en' : 'tr';
    document.getElementById('lang-label').textContent = currentLanguage.toUpperCase();
    document.getElementById('menu-search').placeholder = t[currentLanguage].search;
    ['popular','vegan','gf','hot','cold'].forEach(tag => {
      document.getElementById(`filter-${tag}`).textContent = t[currentLanguage][tag];
    });
    renderCategories();
    renderMenu();
  });
}

// ── Theme Toggle ───────────────────────────────────────────────────────────
function setupThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    const icon = document.getElementById('theme-icon-dark');
    if (currentTheme === 'dark') {
      icon.outerHTML = `<svg id="theme-icon-dark" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
    } else {
      icon.outerHTML = `<svg id="theme-icon-dark" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    }
  });
}

// ── Search & Filters ───────────────────────────────────────────────────────
function setupSearchAndFilters() {
  const searchInput = document.getElementById('menu-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      renderMenu();
    });
  }
  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const tag = pill.getAttribute('data-tag');
      if (activeTags.has(tag)) {
        activeTags.delete(tag);
        pill.classList.remove('active');
      } else {
        activeTags.add(tag);
        pill.classList.add('active');
      }
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
    </div>
  `).join('');
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const target = document.getElementById(`section-${card.getAttribute('data-cat-id')}`);
      if (target) {
        const offset = 180;
        const top = target.getBoundingClientRect().top + document.getElementById('app-view').scrollTop - offset;
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
  const tr_lang = t[lang];

  const filtered = menuItems.filter(item => {
    const nameMatch = item.name[lang].toLowerCase().includes(searchQuery.toLowerCase());
    const descMatch = item.description[lang].toLowerCase().includes(searchQuery.toLowerCase());
    const searchMatch = searchQuery === '' || nameMatch || descMatch;
    let tagsMatch = true;
    if (activeTags.size > 0) {
      activeTags.forEach(tag => { if (!item.tags.includes(tag)) tagsMatch = false; });
    }
    return searchMatch && tagsMatch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="search-empty">
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <p style="font-weight:700;margin-top:10px;">${tr_lang.emptySearch}</p>
        <p style="font-size:0.8rem;">${tr_lang.emptySearchBody}</p>
      </div>`;
    return;
  }

  let html = '';
  menuCategories.forEach(cat => {
    const items = filtered.filter(i => i.categoryId === cat.id);
    if (items.length === 0) return;
    html += `<div class="menu-category-section" id="section-${cat.id}">
      <h2 class="section-title">${cat.name[lang]}</h2>
      <div class="menu-grid">
        ${items.map(item => {
          const isPopular = item.tags.includes('popular');
          const isCold = item.tags.includes('cold');
          const isVegan = item.tags.includes('vegan');
          const isGf = item.tags.includes('gf');
          const badge = isPopular
            ? `<span class="badge-overlay">${tr_lang.popular_badge}</span>`
            : isCold ? `<span class="badge-overlay badge-cold">${tr_lang.cold_badge}</span>` : '';
          const tags = [
            isVegan ? `<span class="tag-mini tag-vegan">${tr_lang.tagVeg}</span>` : '',
            isGf ? `<span class="tag-mini">${tr_lang.tagGf}</span>` : ''
          ].join('');

          const adminEditBtn = isAdmin
            ? `<button class="btn-card-admin-edit" data-edit-id="${item.id}" title="Düzenle" aria-label="Ürünü Düzenle">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
               </button>`
            : '';

          return `
            <div class="menu-card ${isAdmin ? 'admin-highlight' : ''}" data-product-id="${item.id}">
              ${adminEditBtn}
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
        }).join('')}
      </div>
    </div>`;
  });

  container.innerHTML = html;

  // Card click → detail modal (not when clicking edit btn)
  document.querySelectorAll('.menu-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.btn-card-admin-edit')) return;
      openModal(card.getAttribute('data-product-id'));
    });
  });

  // Admin edit button on card
  document.querySelectorAll('.btn-card-admin-edit').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openAdminEditModal(btn.getAttribute('data-edit-id'));
    });
  });

  setupScrollObserver();
}

// ── Product Detail Modal ───────────────────────────────────────────────────
function setupProductModal() {
  document.getElementById('btn-close-modal').addEventListener('click', () => {
    document.getElementById('product-detail-modal').classList.remove('open');
  });
  document.getElementById('product-detail-modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) e.currentTarget.classList.remove('open');
  });
}

function openModal(productId) {
  const item = window.menuData.menuItems.find(i => i.id === productId);
  if (!item) return;
  const lang = currentLanguage;
  const tr_lang = t[lang];
  const cat = window.menuData.menuCategories.find(c => c.id === item.categoryId);
  document.getElementById('modal-category').textContent = cat ? `${cat.icon} ${cat.name[lang]}` : '';
  document.getElementById('modal-image').src = item.image;
  document.getElementById('modal-image').alt = item.name[lang];
  document.getElementById('modal-name').textContent = item.name[lang];
  document.getElementById('modal-price').textContent = `${item.price} TL`;
  document.getElementById('modal-desc').textContent = item.description[lang];
  document.getElementById('lbl-calories').textContent = tr_lang.calories;
  document.getElementById('modal-calories').textContent = `${item.calories} kcal`;
  document.getElementById('lbl-allergens').textContent = tr_lang.allergens;
  document.getElementById('modal-allergens').textContent = item.allergens[lang] || '—';
  document.getElementById('product-detail-modal').classList.add('open');
}

// ── Admin Panel ────────────────────────────────────────────────────────────
function setupAdminPanel() {
  const triggerBtn    = document.getElementById('btn-admin-trigger');
  const loginModal    = document.getElementById('admin-login-modal');
  const closeLogin    = document.getElementById('btn-close-admin-login');
  const submitLogin   = document.getElementById('btn-admin-login-submit');
  const adminPanel    = document.getElementById('admin-panel');
  const closePanel    = document.getElementById('btn-close-admin-panel');
  const logoutBtn     = document.getElementById('btn-admin-logout');
  const resetBtn      = document.getElementById('btn-admin-reset');
  const editModal     = document.getElementById('admin-edit-modal');
  const closeEdit     = document.getElementById('btn-close-admin-edit');
  const saveEdit      = document.getElementById('btn-admin-edit-save');

  // Settings icon → show login or panel
  triggerBtn.addEventListener('click', () => {
    if (isAdmin) {
      openAdminPanel();
    } else {
      document.getElementById('admin-username').value = '';
      document.getElementById('admin-password').value = '';
      document.getElementById('admin-login-error').style.display = 'none';
      loginModal.classList.add('open');
    }
  });

  // Close login modal
  closeLogin.addEventListener('click', () => loginModal.classList.remove('open'));
  loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) loginModal.classList.remove('open');
  });

  // Submit login
  submitLogin.addEventListener('click', doLogin);
  document.getElementById('admin-password').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') doLogin();
  });

  function doLogin() {
    const u = document.getElementById('admin-username').value.trim();
    const p = document.getElementById('admin-password').value;
    if (u === ADMIN_USER && p === ADMIN_PASS) {
      isAdmin = true;
      loginModal.classList.remove('open');
      // Highlight settings icon
      document.getElementById('btn-admin-trigger').classList.add('admin-active');
      openAdminPanel();
      renderMenu(); // show edit buttons on cards
    } else {
      document.getElementById('admin-login-error').style.display = 'block';
    }
  }

  // Close admin panel
  closePanel.addEventListener('click', () => adminPanel.classList.remove('open'));

  // Logout
  logoutBtn.addEventListener('click', () => {
    isAdmin = false;
    adminPanel.classList.remove('open');
    document.getElementById('btn-admin-trigger').classList.remove('admin-active');
    renderMenu();
    showToast('Admin çıkışı yapıldı.');
  });

  // Reset all edits
  resetBtn.addEventListener('click', () => {
    if (!confirm('Tüm fiyat ve resim değişiklikleri sıfırlanacak. Emin misin?')) return;
    adminEdits = {};
    localStorage.removeItem('quga_admin_edits');
    // Reload original data
    window.menuData.menuItems = window.menuData.menuItems.map(item => {
      const orig = window.menuData._originalItems?.find(o => o.id === item.id);
      return orig ? orig : item;
    });
    adminPanel.classList.remove('open');
    renderMenu();
    renderAdminItemList();
    showToast('Menü varsayılan değerlere sıfırlandı.');
  });

  // Close edit modal
  closeEdit.addEventListener('click', () => editModal.classList.remove('open'));
  editModal.addEventListener('click', (e) => {
    if (e.target === editModal) editModal.classList.remove('open');
  });

  // Save edit
  saveEdit.addEventListener('click', saveAdminEdit);

  // Image URL preview on type
  document.getElementById('edit-image').addEventListener('input', () => {
    const val = document.getElementById('edit-image').value.trim();
    if (val) document.getElementById('edit-img-preview').src = val;
  });
}

function openAdminPanel() {
  // Save originals once for reset
  if (!window.menuData._originalItems) {
    window.menuData._originalItems = JSON.parse(JSON.stringify(window.menuData.menuItems));
  }
  renderAdminItemList();
  document.getElementById('admin-panel').classList.add('open');
}

function renderAdminItemList() {
  const list = document.getElementById('admin-items-list');
  if (!list) return;
  const lang = 'tr';
  list.innerHTML = window.menuData.menuItems.map(item => {
    const edited = adminEdits[item.id];
    return `
      <div class="admin-item-row" data-id="${item.id}">
        <img class="admin-item-thumb" src="${item.image}"
          onerror="this.src='https://placehold.co/60x60/F1ECE6/9C8E86?text=?'"
          alt="${item.name[lang]}">
        <div class="admin-item-info">
          <div class="admin-item-name">${item.name[lang]}</div>
          <div class="admin-item-price">${item.price} TL ${edited ? '<span class="edited-badge">düzenlendi</span>' : ''}</div>
        </div>
        <button class="btn-admin-edit-item" data-edit-id="${item.id}" aria-label="Düzenle">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"
            stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
          </svg>
        </button>
      </div>`;
  }).join('');

  list.querySelectorAll('.btn-admin-edit-item').forEach(btn => {
    btn.addEventListener('click', () => openAdminEditModal(btn.getAttribute('data-edit-id')));
  });
}

let currentEditId = null;

function openAdminEditModal(itemId) {
  const item = window.menuData.menuItems.find(i => i.id === itemId);
  if (!item) return;
  currentEditId = itemId;

  document.getElementById('admin-edit-title').textContent = item.name['tr'];
  document.getElementById('edit-price').value = item.price;
  document.getElementById('edit-image').value = item.image;
  document.getElementById('edit-img-preview').src = item.image;

  // Close admin panel, open edit modal
  document.getElementById('admin-panel').classList.remove('open');
  document.getElementById('admin-edit-modal').classList.add('open');
}

function saveAdminEdit() {
  if (!currentEditId) return;
  const newPrice = parseFloat(document.getElementById('edit-price').value);
  const newImage = document.getElementById('edit-image').value.trim();

  if (isNaN(newPrice) || newPrice < 0) {
    showToast('Geçerli bir fiyat girin!');
    return;
  }
  if (!newImage) {
    showToast('Resim URL veya dosya adı boş olamaz!');
    return;
  }

  // Save to edits store
  adminEdits[currentEditId] = { price: newPrice, image: newImage };
  localStorage.setItem('quga_admin_edits', JSON.stringify(adminEdits));

  // Apply to live data
  const idx = window.menuData.menuItems.findIndex(i => i.id === currentEditId);
  if (idx !== -1) {
    window.menuData.menuItems[idx].price = newPrice;
    window.menuData.menuItems[idx].image = newImage;
  }

  // Close edit modal, reopen panel
  document.getElementById('admin-edit-modal').classList.remove('open');
  openAdminPanel();
  renderMenu();
  showToast('✓ Değişiklikler kaydedildi!');
}

// ── Toast Notification ────────────────────────────────────────────────────
function showToast(msg) {
  const toast = document.getElementById('admin-toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

// ── Scroll Observer (category highlight) ──────────────────────────────────
function setupScrollObserver() {
  const appView = document.getElementById('app-view');
  if (!appView) return;
  const sections = document.querySelectorAll('.menu-category-section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const catId = entry.target.id.replace('section-', '');
        document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
        const activeCard = document.getElementById(`cat-card-${catId}`);
        if (activeCard) {
          activeCard.classList.add('active');
          activeCard.scrollIntoView({ inline: 'center', behavior: 'smooth', block: 'nearest' });
        }
      }
    });
  }, { root: appView, rootMargin: '-30% 0px -60% 0px', threshold: 0 });
  sections.forEach(s => observer.observe(s));
}
