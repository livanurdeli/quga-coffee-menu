// app.js — QuGa COFFEE Static Menu

// ── State ──────────────────────────────────────────────────────────────────
let currentLanguage = 'tr';
let currentTheme = 'light';
let searchQuery = '';
const activeTags = new Set();

// ── Translations ───────────────────────────────────────────────────────────
const t = {
  tr: {
    search: 'Ürün veya kategori ara...',
    popular: '⭐ Popüler',
    vegan: '🌱 Vegan',
    gf: '🌾 Glutensiz',
    hot: '🔥 Sıcak',
    cold: '❄️ Soğuk',
    calories: 'Kalori',
    allergens: 'Alerjen',
    emptySearch: 'Aramanıza uygun ürün bulunamadı.',
    emptySearchBody: 'Farklı bir kelime deneyin veya filtreleri kaldırın.',
    popular_badge: 'POPÜLER',
    cold_badge: 'SOĞUK',
    tagVeg: '🌱 Veg',
    tagGf: '🌾 GF',
  },
  en: {
    search: 'Search food or drinks...',
    popular: '⭐ Popular',
    vegan: '🌱 Vegan',
    gf: '🌾 Gluten-Free',
    hot: '🔥 Hot',
    cold: '❄️ Cold',
    calories: 'Calories',
    allergens: 'Allergens',
    emptySearch: 'No products match your search.',
    emptySearchBody: 'Try a different keyword or clear the filters.',
    popular_badge: 'POPULAR',
    cold_badge: 'COLD',
    tagVeg: '🌱 Veg',
    tagGf: '🌾 GF',
  }
};

// ── Init ───────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setupLanguageToggle();
  setupThemeToggle();
  setupSearchAndFilters();
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
    document.getElementById('filter-popular').textContent = t[currentLanguage].popular;
    document.getElementById('filter-vegan').textContent = t[currentLanguage].vegan;
    document.getElementById('filter-gf').textContent = t[currentLanguage].gf;
    document.getElementById('filter-hot').textContent = t[currentLanguage].hot;
    document.getElementById('filter-cold').textContent = t[currentLanguage].cold;
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

          return `
            <div class="menu-card" data-product-id="${item.id}">
              <div class="menu-card-img-wrapper">
                <img class="menu-card-img" src="${item.image}" alt="${item.name[lang]}" loading="lazy">
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

  // Card click → open detail modal
  document.querySelectorAll('.menu-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-product-id');
      openModal(id);
    });
  });

  // Scroll observer to highlight active category
  setupScrollObserver();
}

// ── Product Detail Modal ───────────────────────────────────────────────────
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

document.addEventListener('DOMContentLoaded', () => {
  const closeBtn = document.getElementById('btn-close-modal');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      document.getElementById('product-detail-modal').classList.remove('open');
    });
  }

  const overlay = document.getElementById('product-detail-modal');
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.classList.remove('open');
    });
  }
});

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
  }, {
    root: appView,
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0
  });

  sections.forEach(s => observer.observe(s));
}
