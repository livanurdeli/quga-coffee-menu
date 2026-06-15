// admin.js — QuGa COFFEE · Dedicated Admin Panel Control Script

// ── Authentication Check ───────────────────────────────────────────────────
function checkAuth() {
  const isLoggedIn = localStorage.getItem('quga_admin_logged_in') === 'true';
  const loginScreen = document.getElementById('admin-login-screen');
  const panelContent = document.getElementById('admin-panel-content');
  
  if (isLoggedIn) {
    loginScreen.style.display = 'none';
    panelContent.style.display = 'block';
    initAdminPanel();
  } else {
    loginScreen.style.display = 'flex';
    panelContent.style.display = 'none';
  }
}

// ── State ──────────────────────────────────────────────────────────────────
let adminPanelCat = 'all';
let adminPanelSearch = '';
let currentEditId = null;
let pendingImageData = null;
let pendingAddImageData = null;

let adminEdits = JSON.parse(localStorage.getItem('quga_admin_edits') || '{}');
let adminAddedItems = JSON.parse(localStorage.getItem('quga_added_items') || '[]');
let adminDeletedItems = JSON.parse(localStorage.getItem('quga_deleted_items') || '[]');

// ── Apply admin edits to live menuData ────────────────────────────────────
function applyAdminEdits() {
  if (!window.menuData._originalItems) {
    window.menuData._originalItems = JSON.parse(JSON.stringify(window.menuData.menuItems));
  }
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

// ── Initial Setup on Page Load ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Setup Login Form Trigger
  const doLogin = () => {
    const u = document.getElementById('admin-username').value.trim();
    const p = document.getElementById('admin-password').value;
    if (u === 'admin' && p === 'quga2024') {
      localStorage.setItem('quga_admin_logged_in', 'true');
      document.getElementById('admin-login-error').style.display = 'none';
      checkAuth();
    } else {
      document.getElementById('admin-login-error').style.display = 'block';
    }
  };

  document.getElementById('btn-admin-login-submit').addEventListener('click', doLogin);
  document.getElementById('admin-password').addEventListener('keydown', e => {
    if (e.key === 'Enter') doLogin();
  });

  checkAuth();
});

// ── Initialize Panel ───────────────────────────────────────────────────────
function initAdminPanel() {
  applyAdminEdits();
  renderAdminCatTabs();
  renderAdminList();

  // Search inside panel
  const searchInput = document.getElementById('admin-search');
  // Avoid duplicate listeners
  searchInput.oninput = e => {
    adminPanelSearch = e.target.value.trim().toLowerCase();
    renderAdminList();
  };

  // Add product triggers
  document.getElementById('btn-open-add-product').onclick = openAdminAddModal;
  
  document.getElementById('btn-close-admin-add').onclick = () => {
    document.getElementById('admin-add-modal').classList.remove('open');
  };
  
  document.getElementById('admin-add-modal').onclick = e => {
    if (e.target === e.currentTarget) {
      e.currentTarget.classList.remove('open');
    }
  };

  document.getElementById('add-img-file').onchange = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      pendingAddImageData = ev.target.result;
      document.getElementById('add-img-preview').src = pendingAddImageData;
      document.getElementById('add-image-url').value = '';
    };
    reader.readAsDataURL(file);
  };

  document.getElementById('add-image-url').oninput = e => {
    const url = e.target.value.trim();
    if (url) {
      pendingAddImageData = url;
      document.getElementById('add-img-preview').src = url;
      document.getElementById('add-img-file').value = '';
    }
  };

  document.getElementById('add-name-tab-tr').onclick = () => switchAddNameTab('tr');
  document.getElementById('add-name-tab-en').onclick = () => switchAddNameTab('en');
  document.getElementById('add-desc-tab-tr').onclick = () => switchAddDescTab('tr');
  document.getElementById('add-desc-tab-en').onclick = () => switchAddDescTab('en');

  document.getElementById('btn-admin-add-save').onclick = saveAdminAdd;

  // Edit product triggers
  document.getElementById('btn-close-admin-edit').onclick = () => {
    document.getElementById('admin-edit-modal').classList.remove('open');
  };
  document.getElementById('admin-edit-modal').onclick = e => {
    if (e.target === e.currentTarget) {
      e.currentTarget.classList.remove('open');
    }
  };

  document.getElementById('edit-img-file').onchange = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      pendingImageData = ev.target.result;
      document.getElementById('edit-img-preview').src = pendingImageData;
      document.getElementById('edit-image-url').value = '';
    };
    reader.readAsDataURL(file);
  };

  document.getElementById('edit-image-url').oninput = e => {
    const url = e.target.value.trim();
    if (url) {
      pendingImageData = url;
      document.getElementById('edit-img-preview').src = url;
      document.getElementById('edit-img-file').value = '';
    }
  };

  document.getElementById('name-tab-tr').onclick = () => switchNameTab('tr');
  document.getElementById('name-tab-en').onclick = () => switchNameTab('en');
  document.getElementById('desc-tab-tr').onclick = () => switchDescTab('tr');
  document.getElementById('desc-tab-en').onclick = () => switchDescTab('en');

  document.getElementById('btn-admin-edit-save').onclick = saveAdminEdit;

  // Logout trigger
  document.getElementById('btn-admin-logout').onclick = () => {
    localStorage.removeItem('quga_admin_logged_in');
    checkAuth();
    showToast('Admin çıkışı yapıldı.');
  };

  // Reset trigger
  document.getElementById('btn-admin-reset').onclick = () => {
    if (!confirm('Tüm değişiklikler (eklenen, silinen ürünler ve düzenlemeler) sıfırlanacak. Emin misin?')) return;
    adminEdits = {};
    adminAddedItems = [];
    adminDeletedItems = [];
    localStorage.removeItem('quga_admin_edits');
    localStorage.removeItem('quga_added_items');
    localStorage.removeItem('quga_deleted_items');
    window.menuData.menuItems = JSON.parse(JSON.stringify(window.menuData._originalItems));
    renderAdminList();
    showToast('Menü varsayılana sıfırlandı.');
  };
}

// ── Category Filters ───────────────────────────────────────────────────────
function renderAdminCatTabs() {
  const wrap = document.getElementById('admin-cat-tabs');
  const cats = window.menuData.menuCategories;
  wrap.innerHTML = `<button class="admin-cat-tab ${adminPanelCat === 'all' ? 'active' : ''}" data-cat="all">Tümü</button>`
    + cats.map(c => `<button class="admin-cat-tab ${adminPanelCat === c.id ? 'active' : ''}" data-cat="${c.id}">${c.name['tr']}</button>`).join('');
  wrap.querySelectorAll('.admin-cat-tab').forEach(btn => {
    btn.onclick = () => {
      adminPanelCat = btn.dataset.cat;
      wrap.querySelectorAll('.admin-cat-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderAdminList();
    };
  });
}

// ── Render Items Grid ──────────────────────────────────────────────────────
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
    btn.onclick = () => openAdminEditModal(btn.dataset.editId);
  });

  list.querySelectorAll('.btn-admin-delete-item').forEach(btn => {
    btn.onclick = () => deleteAdminItem(btn.dataset.deleteId);
  });
}

// ── Delete Action ──────────────────────────────────────────────────────────
function deleteAdminItem(itemId) {
  if (!confirm('Bu ürünü menüden silmek istediğinize emin misiniz?')) return;

  const addedIndex = adminAddedItems.findIndex(i => i.id === itemId);
  if (addedIndex !== -1) {
    adminAddedItems.splice(addedIndex, 1);
    localStorage.setItem('quga_added_items', JSON.stringify(adminAddedItems));
  } else {
    if (!adminDeletedItems.includes(itemId)) {
      adminDeletedItems.push(itemId);
      localStorage.setItem('quga_deleted_items', JSON.stringify(adminDeletedItems));
    }
  }

  if (adminEdits[itemId]) {
    delete adminEdits[itemId];
    localStorage.setItem('quga_admin_edits', JSON.stringify(adminEdits));
  }

  applyAdminEdits();
  renderAdminList();
  showToast('✓ Ürün menüden silindi.');
}

// ── Add Modal Controller ───────────────────────────────────────────────────
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
  renderAdminList();
  showToast('✓ Yeni ürün başarıyla eklendi!');
}

// ── Edit Modal Controller ──────────────────────────────────────────────────
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

  switchNameTab('tr');
  switchDescTab('tr');

  document.getElementById('admin-edit-modal').classList.add('open');
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

  let finalImage;
  if (pendingImageData) {
    finalImage = pendingImageData;
  } else if (urlInput) {
    finalImage = urlInput;
  } else {
    const orig = window.menuData.menuItems.find(i => i.id === currentEditId);
    finalImage = orig ? orig.image : '';
  }

  adminEdits[currentEditId] = {
    price:       newPrice,
    image:       finalImage,
    name:        { tr: newNameTr, en: newNameEn },
    description: { tr: newDescTr, en: newDescEn },
  };

  try {
    localStorage.setItem('quga_admin_edits', JSON.stringify(adminEdits));
  } catch (e) {
    showToast('⚠️ Depolama doldu. Resmi URL ile deneyin.');
    return;
  }

  applyAdminEdits();
  document.getElementById('admin-edit-modal').classList.remove('open');
  renderAdminList();
  showToast('✓ Değişiklikler kaydedildi!');
}

// ── Toast Notification ─────────────────────────────────────────────────────
function showToast(msg) {
  const toast = document.getElementById('admin-toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}
