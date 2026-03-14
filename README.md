# 🖤 SCENT TRIAL — VS Code Ready Project

## ▶️ Run
Double-click START.bat (Windows) OR:
```
npm install
npm start
```
- Website → http://localhost:3000
- Admin   → http://localhost:3000/admin

---

## 📁 WHAT TO EDIT WHERE

| What you want to change        | File to open                        |
|-------------------------------|-------------------------------------|
| Phone numbers, colors, brand  | src/data/config.js ⭐               |
| Product prices & descriptions  | src/data/products.js ⭐             |
| Customer reviews               | src/data/reviews.js                 |
| Images                         | src/assets/images.js                |
| Hero headline & subtext        | src/sections/Hero.jsx               |
| Navigation links               | src/sections/Navbar.jsx             |
| Why Us cards                   | src/sections/WhyUs.jsx              |
| Founders photos & bio          | src/sections/Founders.jsx           |
| Announcement bar text          | src/data/config.js → announcements  |
| Coupon codes                   | src/data/config.js → coupons        |
| Footer links                   | src/data/config.js → footerLinks    |
| Cart logic                     | src/hooks/useCart.js                |
| Admin panel                    | src/pages/AdminDashboard.jsx        |

---

## 🎨 Change Colors
Open src/data/config.js → find `colors:` → edit gold, black, cream etc.

## 💰 Change Prices
Open src/data/products.js → find product → change `price` and `mrp`

## 📱 Change WhatsApp Number
Open src/data/config.js → find `whatsapp:` → change `primary`

## ➕ Add a New Product
Open src/data/products.js → copy any product object → paste at end → edit fields

## 🖼️ Change an Image
Open src/assets/images.js → replace base64 with image URL:
```js
hero: "https://your-image-url.com/img.jpg",
```

---

## 🎟️ Coupon Codes (in cart)
- TRIAL50  → ₹50 off
- FIRST100 → ₹100 off
- VIPUL20  → ₹20 off
(Add more in src/data/config.js → coupons)

---

## 🌐 Deploy Free (Netlify)
```
npm run build
```
Drag `build/` folder to netlify.com → Live in 30 seconds!
