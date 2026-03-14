import { useState } from "react";
import useCart     from "../hooks/useCart";
import useToast    from "../hooks/useToast";
import useWishlist from "../hooks/useWishlist";

import Navbar          from "../sections/Navbar";
import AnnouncementBar from "../sections/AnnouncementBar";
import Hero            from "../sections/Hero";
import TrustBar        from "../sections/TrustBar";
import Collection      from "../sections/Collection";
import WhyUs           from "../sections/WhyUs";
import Founders        from "../sections/Founders";
import Reviews         from "../sections/Reviews";
import CTABanner       from "../sections/CTABanner";
import Contact         from "../sections/Contact";
import Footer          from "../sections/Footer";
import CartDrawer      from "../sections/CartDrawer";
import QuickView       from "../sections/QuickView";
import FloatingWA      from "../sections/FloatingWA";
import Toast           from "../components/Toast";
import "../styles/globals.css";
import PRODUCTS from "../data/products";

export default function ScentTrial() {
  const [cartOpen,  setCartOpen]  = useState(false);
  const [quickView, setQuickView] = useState(null);

  const { toast, showToast } = useToast();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const { cart, addToCart, removeFromCart, updateQty, cartCount, cartTotal, cartMRP, finalTotal, discount, couponMsg, applyCoupon } = useCart();

  const handleAddToCart = (product, qty = 1) => {
    addToCart(product, qty);
    showToast(`${product.name} added to bag! 🛒`);
    setQuickView(null);
  };
  const handleToggleWishlist = (id) => {
    const was = isWishlisted(id);
    toggleWishlist(id);
    showToast(was ? "Removed from wishlist" : "Added to wishlist ♥");
  };
  const scrollToCollection = () => document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" });
  const trialPack = PRODUCTS.find(p => p.id === 1);

  return (
    <div style={{ background:"#0A0A0A", color:"#FAF7F2", minHeight:"100vh", overflowX:"hidden" }}>
      <Toast toast={toast} />
      <Navbar cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <div style={{ marginTop: 64 }}>
        <AnnouncementBar />
      </div>
      <Hero onShopNow={scrollToCollection} onAddTrialToCart={() => handleAddToCart(trialPack)} />
      <div style={{ height:1, background:"linear-gradient(to right,transparent,#C9A96E,transparent)", opacity:.2 }}/>
      <TrustBar />
      <Collection onAddToCart={handleAddToCart} onQuickView={setQuickView} onToggleWishlist={handleToggleWishlist} isWishlisted={isWishlisted} />
      <div style={{ height:1, background:"linear-gradient(to right,transparent,#C9A96E,transparent)", opacity:.15 }}/>
      <WhyUs />
      <Founders />
      <Reviews />
      <CTABanner onShopNow={scrollToCollection} />
      <Contact />
      <Footer />
      <FloatingWA />
      {cartOpen && (
        <CartDrawer cart={cart} onClose={() => setCartOpen(false)} onRemove={removeFromCart} onUpdateQty={updateQty} cartTotal={cartTotal} cartMRP={cartMRP} finalTotal={finalTotal} discount={discount} applyCoupon={applyCoupon} couponMsg={couponMsg} />
      )}
      {quickView && (
        <QuickView product={quickView} onClose={() => setQuickView(null)} onAddToCart={handleAddToCart} onToggleWishlist={handleToggleWishlist} isWishlisted={isWishlisted(quickView.id)} />
      )}
    </div>
  );
}
