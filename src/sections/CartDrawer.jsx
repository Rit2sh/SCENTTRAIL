// src/sections/CartDrawer.jsx — Coupon codes in src/data/config.js → coupons
import { useState } from "react";
import WAIcon from "../components/WAIcon";
import CONFIG from "../data/config";
import IMAGES from "../assets/images";
const { colors:C, whatsapp:WA } = CONFIG;
export default function CartDrawer({ cart, onClose, onRemove, onUpdateQty, cartTotal, cartMRP, finalTotal, discount, applyCoupon, couponMsg }) {
  const [coupon, setCoupon] = useState("");
  const cartCount = cart.reduce((s,i)=>s+i.qty,0);
  const openWA = () => window.open(`https://wa.me/${WA.primary}?text=${encodeURIComponent(WA.message)}`,"_blank");
  return (
    <>
      <div onClick={onClose} style={{ position:"fixed", inset:0, zIndex:300, backdropFilter:"blur(10px)", background:"rgba(0,0,0,.75)" }}/>
      <div style={{ position:"fixed", top:0, right:0, bottom:0, width:"min(440px,100%)", background:"#0d0c0a", borderLeft:"1px solid "+C.border, zIndex:301, animation:"slideInRight .35s ease", display:"flex", flexDirection:"column" }}>
        <div style={{ padding:"22px 28px", borderBottom:"1px solid "+C.border, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <h3 style={{ fontFamily:"Playfair Display,serif", fontSize:22, fontWeight:400 }}>Your Bag ({cartCount})</h3>
          <button onClick={onClose} style={{ background:"none", border:"none", color:C.muted, fontSize:26, cursor:"pointer" }}>×</button>
        </div>
        <div style={{ padding:"12px 28px", borderBottom:"1px solid "+C.border, display:"flex", gap:8 }}>
          <input placeholder="Coupon code (try TRIAL50)" value={coupon} onChange={e=>setCoupon(e.target.value)} style={{ flex:1, padding:"8px 12px", fontSize:12 }}/>
          <button onClick={()=>applyCoupon(coupon)} style={{ padding:"8px 16px", fontSize:10, letterSpacing:1, background:C.gold, color:C.black, border:"none", cursor:"pointer", fontFamily:"Jost,sans-serif", fontWeight:500 }} onMouseEnter={e=>e.currentTarget.style.background=C.goldL} onMouseLeave={e=>e.currentTarget.style.background=C.gold}>Apply</button>
        </div>
        {couponMsg&&<div style={{ padding:"8px 28px", fontFamily:"Jost,sans-serif", fontSize:11, color:couponMsg.startsWith("✓")?C.green:"#E57373", background:couponMsg.startsWith("✓")?"rgba(129,199,132,.08)":"rgba(229,115,115,.08)" }}>{couponMsg}</div>}
        <div style={{ flex:1, overflowY:"auto", padding:"16px 28px" }}>
          {cart.length===0?(
            <div style={{ textAlign:"center", padding:"56px 0" }}>
              <div style={{ fontSize:44, marginBottom:16 }}>🛒</div>
              <p style={{ fontFamily:"Jost,sans-serif", fontSize:13, color:C.muted, marginBottom:20 }}>Your bag is empty</p>
              <button onClick={onClose} style={{ padding:"11px 28px", fontSize:10, letterSpacing:2, background:C.gold, color:C.black, border:"none", cursor:"pointer", fontFamily:"Jost,sans-serif", textTransform:"uppercase" }}>Shop Now</button>
            </div>
          ):cart.map(item=>(
            <div key={item.id} style={{ display:"flex", gap:14, padding:"14px 0", borderBottom:"1px solid "+C.border }}>
              <img src={IMAGES[item.imgKey]} alt={item.name} style={{ width:68, height:82, objectFit:"cover", flexShrink:0 }}/>
              <div style={{ flex:1 }}>
                <div style={{ fontFamily:"Playfair Display,serif", fontSize:16, marginBottom:3 }}>{item.name}</div>
                <div style={{ fontFamily:"Jost,sans-serif", fontSize:10, color:C.muted, marginBottom:10 }}>{item.size}</div>
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                  <div style={{ display:"flex", alignItems:"center", border:"1px solid "+C.border }}>
                    <button onClick={()=>onUpdateQty(item.id,-1)} style={{ width:26, height:26, background:"none", border:"none", color:C.cream, cursor:"pointer", fontSize:13 }}>−</button>
                    <span style={{ width:22, textAlign:"center", fontFamily:"Jost,sans-serif", fontSize:12 }}>{item.qty}</span>
                    <button onClick={()=>onUpdateQty(item.id,1)} style={{ width:26, height:26, background:"none", border:"none", color:C.cream, cursor:"pointer", fontSize:13 }}>+</button>
                  </div>
                  <span style={{ fontFamily:"Playfair Display,serif", fontSize:18, color:C.gold }}>₹{item.price*item.qty}</span>
                </div>
              </div>
              <button onClick={()=>onRemove(item.id)} style={{ background:"none", border:"none", color:C.muted, fontSize:18, cursor:"pointer", alignSelf:"flex-start", padding:2 }}>×</button>
            </div>
          ))}
        </div>
        {cart.length>0&&(
          <div style={{ padding:"20px 28px", borderTop:"1px solid "+C.border }}>
            <div style={{ marginBottom:10 }}>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6 }}><span style={{ fontFamily:"Jost,sans-serif", fontSize:12, color:C.muted }}>MRP Total</span><span style={{ fontFamily:"Jost,sans-serif", fontSize:12, color:C.muted, textDecoration:"line-through" }}>₹{cartMRP}</span></div>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6 }}><span style={{ fontFamily:"Jost,sans-serif", fontSize:12, color:C.muted }}>Discount</span><span style={{ fontFamily:"Jost,sans-serif", fontSize:12, color:C.green }}>−₹{cartMRP-cartTotal+discount}</span></div>
              <div style={{ display:"flex", justifyContent:"space-between", paddingTop:10, borderTop:"1px solid "+C.border }}><span style={{ fontFamily:"Jost,sans-serif", fontSize:13, letterSpacing:1, textTransform:"uppercase" }}>Total</span><span style={{ fontFamily:"Playfair Display,serif", fontSize:26, color:C.gold }}>₹{finalTotal}</span></div>
              {cartTotal>=299&&<div style={{ fontFamily:"Jost,sans-serif", fontSize:10, color:C.green, marginTop:6 }}>✓ You qualify for free delivery!</div>}
            </div>
            <button onClick={openWA} style={{ padding:13, fontSize:11, letterSpacing:2, background:C.gold, color:C.black, border:"none", cursor:"pointer", fontFamily:"Jost,sans-serif", fontWeight:500, textTransform:"uppercase", width:"100%", marginBottom:8, display:"flex", alignItems:"center", justifyContent:"center", gap:8, transition:"all .25s" }} onMouseEnter={e=>e.currentTarget.style.background=C.goldL} onMouseLeave={e=>e.currentTarget.style.background=C.gold}><WAIcon size={14} color={C.black}/> Checkout via WhatsApp</button>
            <button onClick={onClose} style={{ padding:11, fontSize:10, letterSpacing:2, background:"#1a1814", color:"#FAF7F2", border:"1px solid rgba(201,169,110,.2)", cursor:"pointer", fontFamily:"Jost,sans-serif", textTransform:"uppercase", width:"100%", transition:"all .25s" }} onMouseEnter={e=>{e.currentTarget.style.borderColor=C.gold;e.currentTarget.style.color=C.gold;}} onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(201,169,110,.2)";e.currentTarget.style.color="#FAF7F2";}}>Continue Shopping</button>
          </div>
        )}
      </div>
    </>
  );
}
