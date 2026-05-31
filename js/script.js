/**
 * ════════════════════════════════════════════════
 * StepStyle Footwear — script.js
 * Author: StepStyle Dev Team
 * Description: All interactive functionality
 * ════════════════════════════════════════════════
 */

'use strict';

/* ──────────────────────────────────────────
   PRODUCT DATA
────────────────────────────────────────── */
const PRODUCTS = [
  {
    id: 1, name: 'AeroStride Pro X',
    category: 'running', categoryLabel: 'Running',
    price: 5999, oldPrice: 7999,
    rating: 4.8, reviews: 312,
    badge: 'popular',
    img: 'assets/images/running_shoes.jpg',
    isNew: false
  },
  {
    id: 2, name: 'UrbanPulse Sneaker',
    category: 'casual', categoryLabel: 'Casual',
    price: 3499, oldPrice: null,
    rating: 4.6, reviews: 215,
    badge: 'new',
    img: 'assets/images/casual_sneakers.jpg',
    isNew: true
  },
  {
    id: 3, name: 'CourtKing Sports Ace',
    category: 'sports', categoryLabel: 'Sports',
    price: 4299, oldPrice: 5499,
    rating: 4.7, reviews: 178,
    badge: 'sale',
    img: 'assets/images/sports_shoes.jpg',
    isNew: false
  },
  {
    id: 4, name: 'ClassicStep Oxford',
    category: 'formal', categoryLabel: 'Formal',
    price: 6499, oldPrice: null,
    rating: 4.9, reviews: 98,
    badge: null,
    img: 'assets/images/formal_shoes.jpg',
    isNew: false
  },
  {
    id: 5, name: 'TrekSole Sandal',
    category: 'sandals', categoryLabel: 'Sandals',
    price: 1899, oldPrice: 2499,
    rating: 4.4, reviews: 143,
    badge: 'sale',
    img: 'assets/images/sandals.jpg',
    isNew: false
  },
  {
    id: 6, name: 'CloudWalk Runners',
    category: 'running', categoryLabel: 'Running',
    price: 7499, oldPrice: null,
    rating: 4.9, reviews: 421,
    badge: 'popular',
    img: 'assets/images/running_new.jpg',
    isNew: true
  },
  {
    id: 7, name: 'StreetFlex Low-Top',
    category: 'casual', categoryLabel: 'Casual',
    price: 2999, oldPrice: 3999,
    rating: 4.5, reviews: 187,
    badge: 'sale',
    img: 'assets/images/street_flex.jpg',
    isNew: false
  },
  {
    id: 8, name: 'ProField Football',
    category: 'sports', categoryLabel: 'Sports',
    price: 5299, oldPrice: null,
    rating: 4.7, reviews: 256,
    badge: 'new',
    img: 'assets/images/football.jpg',
    isNew: true
  },
];

const NEW_ARRIVALS = [
  {
    id: 9, name: 'SkyFoam Boost 2025',
    category: 'running', categoryLabel: 'Running',
    price: 8999, oldPrice: null,
    rating: 5.0, reviews: 42,
    badge: 'new',
    img: 'assets/images/arrival1.jpg',
    isNew: true
  },
  {
    id: 10, name: 'NeoClassic Derby',
    category: 'formal', categoryLabel: 'Formal',
    price: 7299, oldPrice: null,
    rating: 4.8, reviews: 18,
    badge: 'new',
    img: 'assets/images/arrival2.jpg',
    isNew: true
  },
  {
    id: 11, name: 'BreezeWalk Slip-On',
    category: 'casual', categoryLabel: 'Casual',
    price: 2499, oldPrice: null,
    rating: 4.6, reviews: 27,
    badge: 'new',
    img: 'assets/images/arrival3.jpg',
    isNew: true
  },
  {
    id: 12, name: 'DuneSurfer Slipper',
    category: 'sandals', categoryLabel: 'Sandals',
    price: 1299, oldPrice: null,
    rating: 4.3, reviews: 31,
    badge: 'new',
    img: 'assets/images/arrival4.jpg',
    isNew: true
  },
];

const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    role: 'Marathon Runner, Dehradun',
    text: 'The AeroStride Pro X literally transformed my morning runs. The cushioning is unreal and my knees thank me every day. StepStyle has the best selection in the entire region!',
    avatar: 'assets/images/avatar1.jpg',
    rating: 5
  },
  {
    name: 'Rahul Negi',
    role: 'Fitness Enthusiast, Haridwar',
    text: 'Ordered online and received the shoes the very next day. The quality matched every bit of the price. I\'ve already recommended StepStyle to all my gym friends.',
    avatar: 'assets/images/avatar2.jpg',
    rating: 5
  },
  {
    name: 'Anjali Rawat',
    role: 'Teacher, Mussoorie',
    text: 'Finally found formal shoes that are both comfortable for all-day standing AND stylish. The staff was incredibly helpful in finding my size. Love this store!',
    avatar: 'assets/images/avatar3.jpg',
    rating: 5
  },
  {
    name: 'Vikram Chauhan',
    role: 'Trekker, Rishikesh',
    text: 'Best price guarantee is real — they matched a competitor price and threw in free socks. The sandals I bought are still going strong after 6 months of rough trails.',
    avatar: 'assets/images/avatar4.jpg',
    rating: 4
  },
  {
    name: 'Meena Joshi',
    role: 'Homemaker, Dehradun',
    text: 'The 30-day return policy gave me confidence to try a new brand. The slippers are so comfortable my family keeps stealing them! Will definitely shop again.',
    avatar: 'assets/images/avatar5.jpg',
    rating: 5
  },
];

/* ──────────────────────────────────────────
   STATE
────────────────────────────────────────── */
const state = {
  cart: JSON.parse(localStorage.getItem('ss_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('ss_wishlist') || '[]'),
  theme: localStorage.getItem('ss_theme') || 'light',
  testimonialIdx: 0,
  activeFilter: 'all',
};

/* ──────────────────────────────────────────
   HELPERS
────────────────────────────────────────── */
const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

function formatPrice(n) {
  return '₹' + n.toLocaleString('en-IN');
}

function starsHTML(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let s = '★'.repeat(full);
  if (half) s += '½';
  s += '☆'.repeat(5 - full - (half ? 1 : 0));
  return s;
}

function saveState() {
  localStorage.setItem('ss_cart', JSON.stringify(state.cart));
  localStorage.setItem('ss_wishlist', JSON.stringify(state.wishlist));
}

function showToast(msg, type = '') {
  const toast = $('toast');
  toast.textContent = msg;
  toast.className = 'toast show' + (type ? ' ' + type : '');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => { toast.className = 'toast'; }, 3000);
}


/* ──────────────────────────────────────────
   PRODUCT CARD TEMPLATE
────────────────────────────────────────── */
function productCardHTML(p) {
  const isWished = state.wishlist.includes(p.id);
  const badgeMap = { new: 'New', sale: 'Sale', popular: 'Hot' };
  const badgeClass = { new: 'new', sale: 'sale', popular: 'popular' };

  return `
    <article class="product-card reveal" data-id="${p.id}" data-category="${p.category}" aria-label="${p.name}">
      <div class="product-card__img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy" width="400" height="400" class="product-card__img" />
        ${p.badge ? `<span class="product-card__badge product-card__badge--${badgeClass[p.badge]}">${badgeMap[p.badge]}</span>` : ''}
        <button class="product-card__wish ${isWished ? 'wished' : ''}"
          data-id="${p.id}" aria-label="${isWished ? 'Remove from wishlist' : 'Add to wishlist'}" aria-pressed="${isWished}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
      <div class="product-card__body">
        <p class="product-card__category">${p.categoryLabel}</p>
        <h3 class="product-card__name">${p.name}</h3>
        <div class="product-card__rating">
          <span class="product-card__stars" aria-label="${p.rating} out of 5 stars">${starsHTML(p.rating)}</span>
          <span class="product-card__rating-count">(${p.reviews})</span>
        </div>
      </div>
      <div class="product-card__footer">
        <div class="product-card__price-wrap">
          ${p.oldPrice ? `<span class="product-card__price--old">${formatPrice(p.oldPrice)}</span>` : ''}
          <span class="product-card__price">${formatPrice(p.price)}</span>
        </div>
        <button class="product-card__add" data-id="${p.id}" aria-label="Add ${p.name} to cart">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Cart
        </button>
      </div>
    </article>`;
}


/* ──────────────────────────────────────────
   RENDER PRODUCTS
────────────────────────────────────────── */
function renderProducts(filter = 'all') {
  const grid = $('productGrid');
  const filtered = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);
  grid.innerHTML = filtered.map(productCardHTML).join('');
  bindProductEvents(grid);
  triggerReveal();
}

function renderArrivals() {
  const grid = $('arrivalsGrid');
  grid.innerHTML = NEW_ARRIVALS.map(productCardHTML).join('');
  bindProductEvents(grid);
  triggerReveal();
}

function bindProductEvents(container) {
  // Add to Cart
  container.querySelectorAll('.product-card__add').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = +btn.dataset.id;
      addToCart(id);
    });
  });
  // Wishlist
  container.querySelectorAll('.product-card__wish').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = +btn.dataset.id;
      toggleWishlist(id, btn);
    });
  });
}


/* ──────────────────────────────────────────
   CART LOGIC
────────────────────────────────────────── */
function addToCart(id) {
  const product = [...PRODUCTS, ...NEW_ARRIVALS].find(p => p.id === id);
  if (!product) return;

  const existing = state.cart.find(i => i.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ id, qty: 1 });
  }
  saveState();
  updateCartUI();
  showToast(`✅ ${product.name} added to cart!`, 'success');
}

function removeFromCart(id) {
  state.cart = state.cart.filter(i => i.id !== id);
  saveState();
  updateCartUI();
  renderCartDrawer();
}

function changeQty(id, delta) {
  const item = state.cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveState();
  updateCartUI();
  renderCartDrawer();
}

function updateCartUI() {
  const count = state.cart.reduce((a, i) => a + i.qty, 0);
  $('cartCount').textContent = count;
  $('cartCount').setAttribute('data-count', count);
}

function renderCartDrawer() {
  const body = $('cartBody');
  const footer = $('cartFooter');
  const countEl = $('cartItemsCount');

  if (state.cart.length === 0) {
    body.innerHTML = `<div class="cart-drawer__empty">
      <span aria-hidden="true">🛒</span>
      <p>Your cart is empty</p>
      <a href="#featured" class="btn btn--primary btn--sm" id="shopNowCartLink">Shop Now</a>
    </div>`;
    footer.style.display = 'none';
    const shopLink = document.getElementById('shopNowCartLink');
    if (shopLink) shopLink.addEventListener('click', closeCart);
    countEl.textContent = '(0)';
    return;
  }

  const allProducts = [...PRODUCTS, ...NEW_ARRIVALS];
  let total = 0;

  body.innerHTML = state.cart.map(item => {
    const p = allProducts.find(x => x.id === item.id);
    if (!p) return '';
    total += p.price * item.qty;
    return `
      <div class="cart-item" data-id="${p.id}">
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
        <div class="cart-item__info">
          <p class="cart-item__name">${p.name}</p>
          <p class="cart-item__price">${formatPrice(p.price)}</p>
          <div class="cart-item__qty">
            <button class="cart-item__qty-btn" data-action="dec" data-id="${p.id}" aria-label="Decrease quantity">−</button>
            <span class="cart-item__qty-num">${item.qty}</span>
            <button class="cart-item__qty-btn" data-action="inc" data-id="${p.id}" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <button class="cart-item__remove" data-id="${p.id}" aria-label="Remove ${p.name} from cart">✕</button>
      </div>`;
  }).join('');

  footer.style.display = 'block';
  $('cartTotal').textContent = formatPrice(total);
  countEl.textContent = `(${state.cart.reduce((a, i) => a + i.qty, 0)})`;

  // Bind qty and remove buttons
  body.querySelectorAll('.cart-item__qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = +btn.dataset.id;
      const action = btn.dataset.action;
      changeQty(id, action === 'inc' ? 1 : -1);
    });
  });
  body.querySelectorAll('.cart-item__remove').forEach(btn => {
    btn.addEventListener('click', () => removeFromCart(+btn.dataset.id));
  });
}

function openCart() {
  renderCartDrawer();
  $('cartDrawer').classList.add('open');
  $('cartDrawer').setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  $('cartDrawer').classList.remove('open');
  $('cartDrawer').setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}


/* ──────────────────────────────────────────
   WISHLIST LOGIC
────────────────────────────────────────── */
function toggleWishlist(id, btn) {
  const idx = state.wishlist.indexOf(id);
  if (idx === -1) {
    state.wishlist.push(id);
    btn.classList.add('wished');
    btn.setAttribute('aria-pressed', 'true');
    showToast('❤️ Added to wishlist!');
  } else {
    state.wishlist.splice(idx, 1);
    btn.classList.remove('wished');
    btn.setAttribute('aria-pressed', 'false');
    showToast('Removed from wishlist');
  }
  $('wishlistCount').textContent = state.wishlist.length;
  $('wishlistCount').setAttribute('data-count', state.wishlist.length);
  saveState();
}

function initWishlistCount() {
  const c = state.wishlist.length;
  $('wishlistCount').textContent = c;
  $('wishlistCount').setAttribute('data-count', c);
}


/* ──────────────────────────────────────────
   THEME TOGGLE
────────────────────────────────────────── */
function applyTheme(theme) {
  document.body.setAttribute('data-theme', theme);
  state.theme = theme;
  localStorage.setItem('ss_theme', theme);
}

function initTheme() {
  applyTheme(state.theme);
  $('themeToggle').addEventListener('click', () => {
    applyTheme(state.theme === 'light' ? 'dark' : 'light');
  });
}


/* ──────────────────────────────────────────
   NAVIGATION SCROLL BEHAVIOUR
────────────────────────────────────────── */
function initNavScroll() {
  const header = $('header');
  const sections = $$('section[id], div[id]');
  const navLinks = $$('.nav__link');

  window.addEventListener('scroll', () => {
    // Sticky shadow
    header.classList.toggle('scrolled', window.scrollY > 10);

    // Back to top
    $('backToTop').classList.toggle('visible', window.scrollY > 400);

    // Active link highlight
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
    });
    navLinks.forEach(link => {
      const href = link.getAttribute('href').slice(1);
      link.classList.toggle('active', href === current);
    });
  }, { passive: true });

  $('backToTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}


/* ──────────────────────────────────────────
   MOBILE MENU
────────────────────────────────────────── */
function initMobileMenu() {
  const hamburger = $('hamburger');
  const menu = $('mobileMenu');
  const overlay = $('menuOverlay');
  const closeBtn = $('menuClose');

  function open() {
    menu.classList.add('open');
    menu.setAttribute('aria-hidden', 'false');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    menu.classList.remove('open');
    menu.setAttribute('aria-hidden', 'true');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', close);
  $$('.mobile-menu__link').forEach(l => l.addEventListener('click', close));
}


/* ──────────────────────────────────────────
   SEARCH
────────────────────────────────────────── */
function initSearch() {
  const toggle = $('searchToggle');
  const bar    = $('searchBar');
  const input  = $('searchInput');
  const closeB = $('searchClose');
  const results= $('searchResults');
  const allProds = [...PRODUCTS, ...NEW_ARRIVALS];

  function open() {
    bar.classList.add('active');
    bar.setAttribute('aria-hidden', 'false');
    toggle.setAttribute('aria-expanded', 'true');
    setTimeout(() => input.focus(), 100);
  }
  function close() {
    bar.classList.remove('active');
    bar.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    input.value = '';
    results.innerHTML = '';
  }

  toggle.addEventListener('click', open);
  closeB.addEventListener('click', close);

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { results.innerHTML = ''; return; }
    const found = allProds.filter(p =>
      p.name.toLowerCase().includes(q) || p.categoryLabel.toLowerCase().includes(q)
    ).slice(0, 6);

    if (!found.length) {
      results.innerHTML = `<p style="padding:.75rem 0;color:var(--clr-text-muted);font-size:.85rem;">No products found for "<strong>${q}</strong>"</p>`;
      return;
    }
    results.innerHTML = found.map(p => `
      <div class="search-result-item" data-id="${p.id}" role="button" tabindex="0" aria-label="View ${p.name}">
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
        <div>
          <strong>${p.name}</strong><br/>
          <span>${p.categoryLabel} — ${formatPrice(p.price)}</span>
        </div>
      </div>`).join('');

    results.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        addToCart(+item.dataset.id);
        close();
      });
    });
  });

  // Close on Escape
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}


/* ──────────────────────────────────────────
   FILTER TABS
────────────────────────────────────────── */
function initFilters() {
  $$('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      $$('.filter-tab').forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      state.activeFilter = tab.dataset.filter;
      renderProducts(state.activeFilter);
    });
  });
}

// Category card filter link
function initCategoryCards() {
  $$('.category-card').forEach(card => {
    card.addEventListener('click', e => {
      e.preventDefault();
      const cat = card.dataset.category;
      // Activate filter tab
      const tab = document.querySelector(`.filter-tab[data-filter="${cat}"]`);
      if (tab) {
        $$('.filter-tab').forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        state.activeFilter = cat;
        renderProducts(cat);
      }
      // Scroll to products
      $('featured').scrollIntoView({ behavior: 'smooth' });
    });
  });
}


/* ──────────────────────────────────────────
   TESTIMONIALS SLIDER
────────────────────────────────────────── */
function renderTestimonials() {
  const track = $('testimonialsTrack');
  const dots  = $('testimonialDots');

  track.innerHTML = TESTIMONIALS.map(t => `
    <div class="testimonial-card">
      <div class="testimonial-card__quote">"</div>
      <p class="testimonial-card__text">${t.text}</p>
      <div class="testimonial-card__footer">
        <img src="${t.avatar}" alt="${t.name}" class="testimonial-card__avatar" loading="lazy" width="44" height="44" />
        <div>
          <p class="testimonial-card__name">${t.name}</p>
          <p class="testimonial-card__role">${t.role}</p>
        </div>
        <span class="testimonial-card__stars" aria-label="${t.rating} stars">${'★'.repeat(t.rating)}${'☆'.repeat(5 - t.rating)}</span>
      </div>
    </div>`).join('');

  dots.innerHTML = TESTIMONIALS.map((_, i) =>
    `<button class="testimonials__dot${i === 0 ? ' active' : ''}" data-idx="${i}" aria-label="Go to testimonial ${i + 1}" role="tab"></button>`
  ).join('');

  dots.querySelectorAll('.testimonials__dot').forEach(dot => {
    dot.addEventListener('click', () => goToTestimonial(+dot.dataset.idx));
  });

  $('prevTestimonial').addEventListener('click', () => {
    goToTestimonial((state.testimonialIdx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  });
  $('nextTestimonial').addEventListener('click', () => {
    goToTestimonial((state.testimonialIdx + 1) % TESTIMONIALS.length);
  });

  // Auto-advance
  setInterval(() => {
    goToTestimonial((state.testimonialIdx + 1) % TESTIMONIALS.length);
  }, 5000);
}

function goToTestimonial(idx) {
  state.testimonialIdx = idx;
  const track = $('testimonialsTrack');
  const cardW = track.querySelector('.testimonial-card')?.offsetWidth || 0;
  const gap = 24;
  track.style.transform = `translateX(-${idx * (cardW + gap)}px)`;
  $$('.testimonials__dot').forEach((d, i) => {
    d.classList.toggle('active', i === idx);
  });
}


/* ──────────────────────────────────────────
   STATS COUNTER ANIMATION
────────────────────────────────────────── */
function initCounters() {
  const counters = $$('.stat-item__number');
  let counted = false;

  function runCounters() {
    if (counted) return;
    counters.forEach(el => {
      const target = +el.dataset.target;
      const duration = 1800;
      const step = target / (duration / 16);
      let current = 0;
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = Math.floor(current).toLocaleString('en-IN');
        if (current >= target) clearInterval(timer);
      }, 16);
    });
    counted = true;
  }

  // Trigger when stats section is visible
  const statsSection = document.querySelector('.stats-banner');
  if (!statsSection) return;

  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) { runCounters(); obs.disconnect(); }
  }, { threshold: 0.3 });
  obs.observe(statsSection);
}


/* ──────────────────────────────────────────
   SCROLL REVEAL (IntersectionObserver)
────────────────────────────────────────── */
function triggerReveal() {
  const revealEls = $$('.reveal:not(.is-visible)');
  const obs = new IntersectionObserver((entries, o) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${i * 0.06}s`;
        entry.target.classList.add('is-visible');
        o.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => obs.observe(el));
}


/* ──────────────────────────────────────────
   NEWSLETTER FORM
────────────────────────────────────────── */
function initNewsletter() {
  $('newsletterForm').addEventListener('submit', e => {
    e.preventDefault();
    const email = $('newsletterEmail').value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }
    showToast('🎉 Subscribed! Check your email for 10% off.', 'success');
    $('newsletterEmail').value = '';
  });
}


/* ──────────────────────────────────────────
   CONTACT FORM
────────────────────────────────────────── */
function initContact() {
  $('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    const name  = $('contactName').value.trim();
    const email = $('contactEmail').value.trim();
    const msg   = $('contactMsg').value.trim();
    const fb    = $('contactFeedback');

    if (!name || !email || !msg) {
      fb.textContent = 'Please fill in all required fields.';
      fb.className = 'form-feedback error';
      return;
    }
    fb.textContent = '✅ Message sent! We\'ll get back to you within 24 hours.';
    fb.className = 'form-feedback success';
    $('contactForm').reset();
    setTimeout(() => { fb.textContent = ''; fb.className = 'form-feedback'; }, 5000);
  });
}


/* ──────────────────────────────────────────
   SMOOTH SCROLL FOR ANCHOR LINKS
────────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}


/* ──────────────────────────────────────────
   FOOTER YEAR
────────────────────────────────────────── */
function setYear() {
  $('year').textContent = new Date().getFullYear();
}


/* ──────────────────────────────────────────
   LOADER
────────────────────────────────────────── */
function initLoader() {
  const loader = $('loader');
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 1200);
  });
  // Fallback in case load is slow
  setTimeout(() => loader.classList.add('hidden'), 3500);
}


/* ──────────────────────────────────────────
   CART DRAWER INIT
────────────────────────────────────────── */
function initCart() {
  $('cartBtn').addEventListener('click', openCart);
  $('cartClose').addEventListener('click', closeCart);
  $('cartOverlay').addEventListener('click', closeCart);
  updateCartUI();
}


/* ──────────────────────────────────────────
   KEYBOARD ACCESSIBILITY
────────────────────────────────────────── */
function initA11y() {
  // Trap focus in cart drawer when open
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if ($('cartDrawer').classList.contains('open')) closeCart();
      if ($('mobileMenu').classList.contains('open')) {
        $('mobileMenu').classList.remove('open');
        $('hamburger').classList.remove('open');
        document.body.style.overflow = '';
      }
    }
  });
}


/* ──────────────────────────────────────────
   INIT — DOM READY
────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initTheme();
  initNavScroll();
  initMobileMenu();
  initSearch();
  initCart();
  initA11y();
  initWishlistCount();
  setYear();
  initSmoothScroll();

  // Render data
  renderProducts('all');
  renderArrivals();
  renderTestimonials();

  // Filters
  initFilters();

  // Category cards must be bound after DOM ready
  setTimeout(initCategoryCards, 0);

  // Stats counters
  initCounters();

  // Newsletter & Contact
  initNewsletter();
  initContact();

  // Initial reveal pass
  triggerReveal();
});

/* ──────────────────────────────────────────
   SERVICE WORKER REGISTRATION (PWA-ready)
────────────────────────────────────────── */
if ('serviceWorker' in navigator && location.protocol === 'https:') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}
