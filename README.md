# 👟 StepStyle Footwear

> **Walk With Confidence** — A production-quality, fully responsive footwear e-commerce website built with HTML5, CSS3, and Vanilla JavaScript.

![StepStyle Banner](https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=70)

---

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Folder Structure](#-folder-structure)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment-instructions)
- [Lighthouse Scores](#-lighthouse-targets)
- [Challenges Solved](#-challenges-solved)
- [Future Improvements](#-future-improvements)
- [License](#-license)

---

## 🎯 Project Overview

**StepStyle Footwear** is a modern e-commerce landing page for a real local shoe business based in Dehradun, Uttarakhand. The site showcases a complete shopping experience — from hero banners to product cards, cart management, testimonials, and contact forms — all without any frameworks or build tools.

This project was built to demonstrate:
- Senior-level frontend skills (HTML/CSS/JS architecture)
- E-commerce UI/UX design patterns
- Performance and accessibility best practices
- Mobile-first responsive design
- Dark/Light theming with CSS Variables

---

## 🔗 Live Demo

Deploy your own using the instructions below. *(Add your live URL here after deployment)*

---

## ✨ Features

### 🎨 Design & UI
- Premium e-commerce aesthetic inspired by Nike / Adidas
- **Bebas Neue** display font + **DM Sans** body font + **DM Serif Display** accent
- CSS Variables for complete dark/light theming
- Glassmorphism cards (hero badge, contact form)
- Smooth hover effects on all interactive elements
- Animated hero with floating product image

### 📱 Fully Responsive
- Mobile-first CSS with breakpoints at 640px, 1024px, 1280px
- Touch-friendly mobile navigation drawer
- Flexible grid layouts using CSS Flexbox

### 🛍️ E-Commerce Functionality
- **Add to Cart** with quantity management
- **Cart Drawer** (slide-in panel) with item list, totals, remove
- **Wishlist** toggle with persistent state (localStorage)
- **Live Search** filtering all products in real-time
- **Category Filter** tabs for product grid

### 🎠 Interactive Components
- Hero section with animated shoe image
- Testimonials auto-advancing carousel with dots navigation
- Scroll-reveal animations (IntersectionObserver API)
- Animated counter stats (50K+ customers, 500+ styles…)
- Marquee ticker banner
- Toast notifications (add to cart, subscribe, etc.)
- Newsletter form with email validation
- Contact form with feedback messages

### ⚡ Performance
- Lazy-loaded images (`loading="lazy"`)
- CSS animations instead of JS where possible
- Minimal dependencies (zero external JS libraries)
- Fonts loaded with `preconnect` hints

### ♿ Accessibility
- Semantic HTML5 (`header`, `main`, `nav`, `section`, `article`, `footer`)
- ARIA labels on all interactive buttons
- `aria-live` regions for dynamic content
- Keyboard navigation (Escape closes drawers/modals)
- Focus management and visible focus states
- Skip-to-main-content ready structure

### 🔍 SEO
- Meta description and keywords
- Open Graph tags
- Semantic heading hierarchy (h1 → h2 → h3)
- `alt` text on all images
- Structured page sections with `id` anchors

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic markup, SEO structure |
| CSS3 | Flexbox layouts, CSS Variables, Animations |
| Vanilla JavaScript (ES6+) | Interactivity, state management |
| Google Fonts | Bebas Neue, DM Sans, DM Serif Display |
| Unsplash | Placeholder product & avatar images |
| LocalStorage API | Cart & wishlist persistence |
| IntersectionObserver API | Scroll reveal, counter triggers |

---

## 📁 Folder Structure

```
stepstyle-footwear/
│
├── index.html           # Main HTML document
│
├── css/
│   └── style.css        # All styles — tokens, components, responsive
│
├── js/
│   └── script.js        # Product data + all interactive logic
│
├── assets/
│   ├── images/          # (Add local product images here)
│   └── icons/           # (Add custom icons here)
│
└── README.md            # This file
```

---

## 🚀 Getting Started

### Local Development

No build tools required. Just open the folder:

```bash
# Clone or download the project
git clone https://github.com/yourusername/stepstyle-footwear.git
cd stepstyle-footwear

# Open with VS Code + Live Server (recommended)
code .
# Then right-click index.html → Open with Live Server

# Or use Python's built-in server
python3 -m http.server 8080
# Visit http://localhost:8080
```

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI** (optional)
   ```bash
   npm install -g vercel
   ```

2. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit — StepStyle Footwear"
   git branch -M main
   git remote add origin https://github.com/yourusername/stepstyle-footwear.git
   git push -u origin main
   ```

3. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com) → New Project
   - Import your GitHub repo
   - Framework: **Other** (no framework)
   - Root directory: `/`
   - Build command: *(leave empty)*
   - Output directory: *(leave empty or `/`)*
   - Click **Deploy** ✅

4. **Custom Domain** (Optional)
   - In Vercel dashboard → Settings → Domains → Add `stepstyle.in`

---

### Deploy to Netlify

1. **Drag & Drop Method**
   - Go to [netlify.com/drop](https://app.netlify.com/drop)
   - Drag and drop your entire `stepstyle-footwear` folder
   - Your site is live instantly! 🎉

2. **Git-Connected Method**
   - Go to [netlify.com](https://netlify.com) → New site from Git
   - Connect GitHub → select `stepstyle-footwear` repo
   - Build command: *(leave empty)*
   - Publish directory: `/`
   - Click **Deploy site** ✅

3. **Netlify CLI Method**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod --dir .
   ```

---

### Deploy to GitHub Pages

1. Push to GitHub (see above)
2. Go to Repo → Settings → Pages
3. Source: **Deploy from branch** → `main` → `/root`
4. Save — live at `https://yourusername.github.io/stepstyle-footwear`

---

## 🏆 Lighthouse Targets

| Metric | Target | Tips to achieve |
|---|---|---|
| Performance | 90+ | Lazy-load images, no blocking JS |
| Accessibility | 90+ | Semantic HTML, ARIA labels, contrast |
| Best Practices | 90+ | HTTPS, no console errors |
| SEO | 90+ | Meta tags, heading structure |

Run Lighthouse: Chrome DevTools → Lighthouse tab → Generate report

---

## 🧩 Challenges Solved

### 1. Zero-Dependency Cart System
Built a fully functional add-to-cart, quantity management, and total calculation system using only vanilla JS and localStorage — no Redux, no framework.

### 2. CSS-Only Dark/Light Theme
Implemented complete theme switching using CSS custom properties (`--clr-bg`, `--clr-text`, etc.) toggled by a single `data-theme` attribute — no class bloat, instant rendering.

### 3. IntersectionObserver-based Scroll Reveal
Used the native `IntersectionObserver` API instead of scroll event listeners for high-performance, jank-free reveal animations that don't block the main thread.

### 4. Live Search without a Backend
Product search filters a local array and renders results with DOM manipulation — instant, no network requests, no debounce needed for small datasets.

### 5. Responsive Product Grid with Filter
Combined CSS Flexbox `flex-wrap` with JS-based `hidden` class toggling to create a filtered product grid that works across all screen sizes without CSS Grid complexity.

---

## 🔮 Future Improvements

- [ ] Backend integration (Node.js / Supabase) for real orders
- [ ] User authentication (login/signup)
- [ ] Product detail pages with size selector
- [ ] Real payment gateway (Razorpay / Stripe)
- [ ] Admin dashboard for inventory management
- [ ] Product reviews and rating submission
- [ ] Infinite scroll / pagination for products
- [ ] PWA with offline capability (Service Worker)
- [ ] WhatsApp chat integration for local support
- [ ] Google Maps embed for store location

---

## 👤 About the Business

**StepStyle Footwear**
- 📍 12, Rajpur Road, Dehradun, Uttarakhand 248001
- 📞 +91 135 272 0000
- ✉️ hello@stepstyle.in
- 🕒 Mon–Sat: 10 AM – 8 PM | Sun: 11 AM – 6 PM
- Founded: 2013

---

## 📄 License

MIT License — free to use, modify, and deploy for personal and commercial projects.

---

## 🙌 Acknowledgements

- Product images: [Unsplash](https://unsplash.com)
- Fonts: [Google Fonts](https://fonts.google.com)
- Icons: Hand-crafted inline SVGs

---

*Built with ❤️ in Dehradun, Uttarakhand, India*
