// app.js — QuGa COFFEE · Static Menu Client Application

// ── State ──────────────────────────────────────────────────────────────────
let currentLanguage = 'tr';
let currentTheme    = 'light';
let searchQuery     = '';
const activeTags    = new Set();

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
  setupAdminRedirect();
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
        
        return `<div class="menu-card" data-product-id="${item.id}">
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
    card.addEventListener('click', () => {
      openProductModal(card.dataset.productId);
    });
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

// ── Admin Redirect ──────────────────────────────────────────────────────────
function setupAdminRedirect() {
  document.getElementById('btn-admin-trigger').addEventListener('click', () => {
    window.open('admin.html', '_blank');
  });
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
