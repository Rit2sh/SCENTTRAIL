// ============================================================
// src/data/config.js  ⭐ EDIT EVERYTHING HERE ⭐
// Brand name, phone numbers, colors, coupons, founders...
// ============================================================
const CONFIG = {
  brandName:   "SCENT TRIAL",
  tagline:     "Affordable Luxury Fragrances",
  description: "Premium smelling perfumes without the premium price.",
  email:       "hello@scenttrial.in",
  location:    "Pune, Maharashtra, India",
  year:        "2026",

  whatsapp: {
    primary:   "917507739785",
    secondary: "919953231435",
    message:   "Hi, I want to order Scent Trial perfume",
  },

  colors: {
    gold:   "#C9A96E",
    goldL:  "#E8D5A3",
    black:  "#0A0A0A",
    cream:  "#FAF7F2",
    muted:  "#8A7F74",
    card:   "#111008",
    dark:   "#0D0C0A",
    border: "rgba(201,169,110,0.18)",
    green:  "#81C784",
  },

  announcements: [
    "✦ Free Delivery Above ₹299",
    "✦ COD Available",
    "✦ Use Code TRIAL50 For ₹50 Off",
    "✦ Try Before You Buy — 10ml from ₹199",
    "✦ Made in Pune, India",
    "✦ 8+ Hours Longevity",
  ],

  coupons: { TRIAL50: 50, FIRST100: 100, VIPUL20: 20 },

  heroStats: [
    { value: "₹199", label: "Trial Pack" },
    { value: "₹299", label: "Full Bottle" },
    { value: "8h+",  label: "Longevity" },
    { value: "6",    label: "Scents" },
  ],

  trustBadges: [
    { icon: "🚚", title: "Free Delivery",  sub: "On orders above ₹299" },
    { icon: "💳", title: "COD Available",  sub: "Cash on delivery" },
    { icon: "🔄", title: "Easy Returns",   sub: "7 day return policy" },
    { icon: "🔒", title: "Secure Payment", sub: "100% safe checkout" },
    { icon: "🌿", title: "Clean Formula",  sub: "Paraben free" },
  ],

  whyUs: [
    { icon: "🧪", title: "Try Before You Buy",  stat: "10ml from ₹199", desc: "Trial packs let you experience the full scent before committing. Zero risk." },
    { icon: "💎", title: "Affordable Luxury",   stat: "Save up to 55%",  desc: "Designer-quality fragrances without the brand tax." },
    { icon: "⏱️", title: "8+ Hours Longevity", stat: "8-12 hrs wear",   desc: "Formulated for strong projection and all-day wear." },
    { icon: "📦", title: "Premium Packaging",   stat: "Gift ready",      desc: "Matte black boxes with gold foil embossing. Gifting-ready." },
    { icon: "🌿", title: "Clean Formula",       stat: "Skin safe",       desc: "Paraben-free, dermatologically tested. Safe for all skin types." },
    { icon: "🚚", title: "Free Delivery",       stat: "COD available",   desc: "Free shipping above ₹299. COD available across India." },
  ],

  founders: [
    {
      imgKey: "vipul", role: "Founder & CEO", name: "Vipul Gaikwad",
      title: "Entrepreneur · Product Builder · Brand Creator",
      location: "Pune, Maharashtra",
      bio: "Creator of SCENT TRIAL — building affordable luxury fragrances from scratch. Passionate about brand building, packaging design, and creating products customers genuinely love.",
      links: [],
    },
    {
      imgKey: "ritesh", role: "Co-Builder & Tech Lead", name: "Ritesh Chauhan",
      title: "AI Developer · Entrepreneur · Tech Builder",
      location: "Bihta, Patna",
      bio: "Technology builder creating the digital backbone of SCENT TRIAL. Focused on scalable platforms, AI-powered tools, and helping the brand reach millions of customers.",
      links: [
        { label: "LinkedIn", href: "https://www.linkedin.com/in/ritesh-chauhan-80801b293/" },
        { label: "GitHub",   href: "https://github.com/Rit2sh" },
      ],
    },
  ],

  social: {
    instagram: "https://instagram.com/scenttrial",
    linkedin:  "https://www.linkedin.com/in/ritesh-chauhan-80801b293/",
    github:    "https://github.com/Rit2sh",
  },

  footerLinks: [
    { heading: "Shop",    links: ["Trial Pack — ₹199","Date Night — ₹299","Night Oud — ₹349","Rose Femme — ₹299","Signature Set — ₹449","Luxury Trial Pack — ₹599"] },
    { heading: "Company", links: ["About Us","Our Story","Founders","Blog","Careers","Contact"] },
    { heading: "Help",    links: ["Track Order","Returns","Shipping Info","Fragrance Guide","Privacy Policy","Terms of Service"] },
  ],
};
export default CONFIG;
