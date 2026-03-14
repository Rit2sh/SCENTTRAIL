// ============================================================
// src/data/products.js  ⭐ ADD / EDIT PRODUCTS HERE ⭐
// imgKey must match a key in src/assets/images.js
// ============================================================
const PRODUCTS = [
  {
    id: 1, name: "Trial Pack", badge: "BESTSELLER", gender: "Unisex",
    size: "10ml", price: 199, mrp: 399, rating: 4.8, reviews: 1240,
    imgKey: "trial", bg: "#0d0b09",
    desc: "Your perfect fragrance introduction. Experience our full signature scent in a pocket-sized bottle perfect for everyday carry.",
    notes: { top: ["Bergamot","Fresh Citrus"], heart: ["Rose","Jasmine","Spices"], base: ["Vanilla","Musk","Sandalwood"] },
    tags: ["Try Before You Buy","Pocket Size","Unisex"],
  },
  {
    id: 2, name: "Date Night", badge: "PREMIUM", gender: "Unisex",
    size: "30ml", price: 299, mrp: 599, rating: 4.9, reviews: 876,
    imgKey: "datenight", bg: "#080c10",
    desc: "Deep, bold and sensuous. Our flagship Eau De Parfum crafted for evenings that demand a lasting impression.",
    notes: { top: ["Bergamot","Grapefruit"], heart: ["Rose","Spices","Cardamom"], base: ["Vanilla","Musk","Oud"] },
    tags: ["Long Lasting","Date Night","Signature Scent"],
  },
  {
    id: 3, name: "Signature Set", badge: "BEST VALUE", gender: "Unisex",
    size: "10ml + 30ml", price: 449, mrp: 998, rating: 4.9, reviews: 543,
    imgKey: "packaging", bg: "#0a0a08",
    desc: "The complete Scent Trial experience in one premium gift box. Both sizes, one elegant matte black package.",
    notes: { top: ["Bergamot","Citrus"], heart: ["Rose","Spices"], base: ["Vanilla","Musk"] },
    tags: ["Gift Set","Best Value","Free Gift Box"],
  },
  {
    id: 4, name: "Night Oud", badge: "NEW", gender: "Men",
    size: "30ml", price: 349, mrp: 699, rating: 4.7, reviews: 234,
    imgKey: "hero", bg: "#0a0808",
    desc: "Rich, woody and mysterious. An oud-inspired masterpiece with deep base notes for the man who commands every room.",
    notes: { top: ["Saffron","Cardamom"], heart: ["Oud","Rose","Amber"], base: ["Sandalwood","Musk","Patchouli"] },
    tags: ["Oud","Long Lasting","Premium"],
  },
  {
    id: 5, name: "Rose Femme", badge: "FOR HER", gender: "Women",
    size: "30ml", price: 299, mrp: 599, rating: 4.8, reviews: 412,
    imgKey: "datenight", bg: "#0d0810",
    desc: "Feminine, floral and unforgettable. A bouquet of finest roses with sweet fruity top notes and a warm base.",
    notes: { top: ["Plum","Peach","Citrus"], heart: ["Rose","Jasmine","Peony"], base: ["Vanilla","Musk","Cedarwood"] },
    tags: ["Floral","Feminine","Long Lasting"],
  },
  {
    id: 6, name: "Luxury Trial Pack", badge: "TRY ALL", gender: "Unisex",
    size: "6 × 5ml", price: 599, mrp: 1199, rating: 4.9, reviews: 789,
    imgKey: "trial", bg: "#090a0d",
    desc: "Try all 6 of our signature scents. Find your perfect match before committing to a full bottle.",
    notes: { top: ["Varies by scent"], heart: ["All 6 fragrances"], base: ["Collection sampler"] },
    tags: ["Try Before You Buy","Gift Set","6 Scents"],
  },
];
export default PRODUCTS;
