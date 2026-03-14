import { useState } from "react";
import CONFIG from "../data/config";
export default function useCart() {
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [couponMsg, setCouponMsg] = useState(null);
  const addToCart = (product, qty = 1) => {
    setCart(prev => {
      const ex = prev.find(i => i.id === product.id);
      if (ex) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + qty } : i);
      return [...prev, { ...product, qty }];
    });
  };
  const removeFromCart = (id) => setCart(prev => prev.filter(i => i.id !== id));
  const updateQty = (id, delta) => setCart(prev => prev.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i));
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const cartMRP   = cart.reduce((s, i) => s + i.mrp * i.qty, 0);
  const finalTotal = Math.max(0, cartTotal - discount);
  const applyCoupon = (code) => {
    const amount = CONFIG.coupons[code.toUpperCase()];
    if (amount) { setDiscount(amount); setCouponMsg(`✓ ${code.toUpperCase()} applied — ₹${amount} off!`); }
    else setCouponMsg("✗ Invalid coupon code");
  };
  return { cart, addToCart, removeFromCart, updateQty, cartCount, cartTotal, cartMRP, finalTotal, discount, couponMsg, applyCoupon };
}
