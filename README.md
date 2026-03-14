# 🖤 SCENT TRIAL — Affordable Luxury Fragrances

<div align="center">

![SCENT TRIAL](https://img.shields.io/badge/SCENT%20TRIAL-Affordable%20Luxury-C9A96E?style=for-the-badge&labelColor=0A0A0A)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white&labelColor=0A0A0A)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-C9A96E?style=for-the-badge&labelColor=0A0A0A)

**Premium smelling perfumes without the premium price.**
Try before you buy — 10ml trial packs from ₹199.

[🌐 Live Website](https://scenttrail.vercel.app) • [📱 WhatsApp Order](https://wa.me/919953231435) • [📸 Instagram](https://instagram.com/scenttrial)

</div>

---

## ✨ Features

- 🛍️ **Full Ecommerce Website** — Product cards, filters, quick view modal
- 🛒 **Smart Cart** — Qty controls, coupon codes, price breakdown
- 📱 **WhatsApp Ordering** — Direct checkout via WhatsApp
- ♥️ **Wishlist** — Save favourite products
- 🔍 **Quick View Modal** — Fragrance notes, delivery checker, size selector
- 👨‍💼 **Admin Dashboard** — Orders, products, customers, analytics
- 🎨 **Luxury Dark Theme** — Bellavita/Tom Ford inspired design
- ⚡ **Scroll Animations** — Smooth reveal on scroll
- 📦 **COD Available** — Cash on delivery across India
- 🌿 **Mobile Responsive** — Works on all screen sizes

---

## 🧴 Products

| Product | Size | Price | MRP |
|---------|------|-------|-----|
| Trial Pack | 10ml | ₹199 | ₹399 |
| Date Night | 30ml | ₹299 | ₹599 |
| Night Oud | 30ml | ₹349 | ₹699 |
| Rose Femme | 30ml | ₹299 | ₹599 |
| Signature Set | 10ml + 30ml | ₹449 | ₹998 |
| Luxury Trial Pack | 6 × 5ml | ₹599 | ₹1199 |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org) v16 or higher
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/Rit2sh/SCENTTRAIL.git

# Navigate into the project
cd SCENTTRAIL

# Install dependencies
npm install

# Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Admin Panel
Open [http://localhost:3000/admin](http://localhost:3000/admin)

---

## 🏗️ Project Structure

```
scent/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── images.js          # All product & founder images
│   ├── data/
│   │   ├── config.js          # ⭐ Brand settings, colors, WhatsApp numbers
│   │   ├── products.js        # ⭐ Product catalog & pricing
│   │   └── reviews.js         # Customer reviews
│   ├── sections/              # Each section of the website
│   │   ├── Navbar.jsx
│   │   ├── AnnouncementBar.jsx
│   │   ├── Hero.jsx
│   │   ├── TrustBar.jsx
│   │   ├── Collection.jsx
│   │   ├── WhyUs.jsx
│   │   ├── Founders.jsx
│   │   ├── Reviews.jsx
│   │   ├── CTABanner.jsx
│   │   ├── Contact.jsx
│   │   ├── CartDrawer.jsx
│   │   ├── QuickView.jsx
│   │   ├── Footer.jsx
│   │   └── FloatingWA.jsx
│   ├── components/            # Reusable UI pieces
│   │   ├── AnimDiv.jsx        # Scroll reveal animation
│   │   ├── Stars.jsx          # Star rating
│   │   ├── Toast.jsx          # Notifications
│   │   └── WAIcon.jsx         # WhatsApp icon
│   ├── hooks/                 # Custom React hooks
│   │   ├── useCart.js
│   │   ├── useToast.js
│   │   └── useWishlist.js
│   ├── pages/
│   │   ├── ScentTrial.jsx     # Main website
│   │   └── AdminDashboard.jsx # Admin panel
│   ├── styles/
│   │   └── globals.css
│   ├── App.js
│   └── index.js
├── .env                       # Environment variables (not committed)
├── .gitignore
├── vercel.json
└── package.json
```

---

## ⚙️ Configuration

All settings are in **`src/data/config.js`**:

```js
// Change WhatsApp number
whatsapp: {
  primary: "919953231435",  // ← your number here
}

// Change brand colors
colors: {
  gold: "#C9A96E",
  black: "#0A0A0A",
}

// Add coupon codes
coupons: {
  TRIAL50: 50,    // ₹50 off
  FIRST100: 100,  // ₹100 off
}
```

---

## 🎟️ Coupon Codes

| Code | Discount |
|------|----------|
| `TRIAL50` | ₹50 off |
| `FIRST100` | ₹100 off |
| `VIPUL20` | ₹20 off |

---

## 🌐 Deployment

### Deploy on Vercel (Free)

```bash
npm run build
```

Then drag the `build/` folder to [vercel.com](https://vercel.com)

**Or connect GitHub repo directly:**
1. Go to [vercel.com](https://vercel.com) → New Project
2. Import `Rit2sh/SCENTTRAIL`
3. Add Environment Variables:
   - `CI` = `false`
   - `DISABLE_ESLINT_PLUGIN` = `true`
4. Click Deploy ✅

---

## 🛠️ Built With

| Technology | Purpose |
|-----------|---------|
| [React 18](https://react.dev) | Frontend framework |
| CSS-in-JS | Inline styling system |
| [Google Fonts](https://fonts.google.com) | Playfair Display, Jost |
| [Razorpay](https://razorpay.com) | Payment gateway (optional) |
| [Vercel](https://vercel.com) | Hosting & deployment |

---

## 👨‍💼 Founders

<table>
  <tr>
    <td align="center">
      <b>Vipul Gaikwad</b><br/>
      Founder & CEO<br/>
      📍 Pune, Maharashtra<br/>
      <a href="https://wa.me/919953231435">💬 WhatsApp</a>
    </td>
    <td align="center">
      <b>Ritesh Chauhan</b><br/>
      Co-Builder & Tech Lead<br/>
      📍 Bihta, Patna<br/>
      <a href="https://www.linkedin.com/in/ritesh-chauhan-80801b293/">💼 LinkedIn</a> •
      <a href="https://github.com/Rit2sh">🐙 GitHub</a>
    </td>
  </tr>
</table>

---

## 📞 Contact & Order

| Channel | Details |
|---------|---------|
| 📱 WhatsApp (Ritesh) | [+91 99532 31435](https://wa.me/919953231435) |
| 📱 WhatsApp (Vipul) | [+91 75077 39785](https://wa.me/917507739785) |
| 📸 Instagram | [@scenttrial.official](https://www.instagram.com/scenttrial.official?igsh=MWg2Z3d1N3BvcHcyYg==) |

---

## 📄 License

This project is licensed under the MIT License.

---

<div align="center">

Made with 🖤 in India · **SCENT TRIAL** © 2026

*Affordable Luxury Fragrances — Pune, Maharashtra*

</div>
