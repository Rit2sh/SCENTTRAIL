// src/sections/QuickView.jsx — Product popup modal
import { useState } from "react";
import Stars from "../components/Stars";
import WAIcon from "../components/WAIcon";
import CONFIG from "../data/config";
import IMAGES from "../assets/images";
const { colors:C, whatsapp:WA } = CONFIG;
export default function QuickView({ product, onClose, onAddToCart, onToggleWishlist, isWishlisted }) {
  const [tab, setTab] = useState("desc");
  const [qty, setQty] = useState(1);
  const [pincode, setPincode] = useState("");
  const [pinMsg, setPinMsg] = useState(null);
  if (!product) return null;
  const discount = Math.round((1-product.price/product.mrp)*100);
  const openWA = () => window.open(`https://wa.me/${WA.primary}?text=${encodeURIComponent(WA.message)}`,"_blank");
  return (
    <div onClick={onClose} style={{ position:"fixed", inset:0, zIndex:200, display:"flex", alignItems:"center", justifyContent:"center", padding:20, backdropFilter:"blur(10px)", background:"rgba(0,0,0,.75)" }}>
      <div onClick={e=>e.stopPropagation()} style={{ background:"#0f0e0b", border:"1px solid "+C.border, maxWidth:820, width:"100%", maxHeight:"92vh", overflowY:"auto", display:"flex", flexWrap:"wrap", animation:"fadeUp .3s ease" }}>
        <div style={{ width:"45%", minWidth:260, flex:"1 1 260px", position:"relative" }}>
          <img src={IMAGES[product.imgKey]} alt={product.name} style={{ width:"100%", height:"100%", minHeight:420, objectFit:"cover" }}/>
          <div style={{ position:"absolute", top:14, left:14 }}><span style={{ background:C.gold, color:C.black, fontSize:9, letterSpacing:2, padding:"4px 10px", fontWeight:600, fontFamily:"Jost,sans-serif" }}>{product.badge}</span></div>
          <button onClick={()=>onToggleWishlist(product.id)} style={{ position:"absolute", top:14, right:14, background:"rgba(10,10,10,.7)", border:"1px solid "+C.border, width:36, height:36, display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", color:isWishlisted?C.gold:C.muted, fontSize:18 }}>{isWishlisted?"♥":"♡"}</button>
        </div>
        <div style={{ flex:"1 1 280px", padding:"36px 32px" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:16 }}>
            <div>
              <div style={{ fontFamily:"Jost,sans-serif", fontSize:9, letterSpacing:3, color:C.gold, textTransform:"uppercase", marginBottom:6 }}>{product.gender} · {product.size}</div>
              <h2 style={{ fontFamily:"Playfair Display,serif", fontSize:28, fontWeight:400 }}>{product.name}</h2>
            </div>
            <button onClick={onClose} style={{ background:"none", border:"none", color:C.muted, fontSize:24, cursor:"pointer" }}>×</button>
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:16 }}>
            <Stars n={product.rating}/><span style={{ fontFamily:"Jost,sans-serif", fontSize:11, color:C.muted }}>{product.rating} · {product.reviews.toLocaleString()} reviews</span>
          </div>
          <div style={{ display:"flex", alignItems:"baseline", gap:12, marginBottom:20 }}>
            <span style={{ fontFamily:"Playfair Display,serif", fontSize:36, color:C.gold }}>₹{product.price}</span>
            <span style={{ fontFamily:"Jost,sans-serif", fontSize:13, color:C.muted, textDecoration:"line-through" }}>₹{product.mrp}</span>
            <span style={{ fontFamily:"Jost,sans-serif", fontSize:11, color:C.green, background:"rgba(129,199,132,.1)", border:"1px solid rgba(129,199,132,.25)", padding:"2px 8px" }}>{discount}% OFF</span>
          </div>
          <div style={{ display:"flex", marginBottom:20, borderBottom:"1px solid "+C.border }}>
            {["desc","notes","delivery"].map(t=>(
              <button key={t} onClick={()=>setTab(t)} style={{ padding:"10px 18px", fontSize:10, letterSpacing:2, textTransform:"uppercase", background:"none", border:"none", cursor:"pointer", fontFamily:"Jost,sans-serif", color:tab===t?C.gold:C.muted, borderBottom:tab===t?`2px solid ${C.gold}`:"2px solid transparent", transition:"all .25s" }}>
                {t==="desc"?"Description":t==="notes"?"Notes":"Delivery"}
              </button>
            ))}
          </div>
          {tab==="desc"&&<p style={{ fontFamily:"Jost,sans-serif", fontSize:13, color:"rgba(250,247,242,.6)", lineHeight:1.8, marginBottom:20 }}>{product.desc}</p>}
          {tab==="notes"&&(
            <div style={{ marginBottom:20 }}>
              {[["Top Notes",product.notes.top],["Heart Notes",product.notes.heart],["Base Notes",product.notes.base]].map(([label,notes])=>(
                <div key={label} style={{ padding:"10px 0", borderBottom:"1px solid "+C.border }}>
                  <div style={{ fontFamily:"Jost,sans-serif", fontSize:9, letterSpacing:2, color:C.gold, textTransform:"uppercase", marginBottom:6 }}>{label}</div>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                    {notes.map(n=><span key={n} style={{ fontFamily:"Jost,sans-serif", fontSize:11, color:C.cream, background:"rgba(201,169,110,.08)", border:"1px solid "+C.border, padding:"3px 10px" }}>{n}</span>)}
                  </div>
                </div>
              ))}
            </div>
          )}
          {tab==="delivery"&&(
            <div style={{ marginBottom:20 }}>
              <div style={{ display:"flex", gap:10, marginBottom:12 }}>
                <input placeholder="Enter pincode" value={pincode} onChange={e=>setPincode(e.target.value)} style={{ flex:1, fontSize:12 }}/>
                <button onClick={()=>setPinMsg(pincode.length===6?"✓ Delivery in 2-3 days (Free)":"Enter valid 6-digit pincode")} style={{ padding:"10px 16px", fontSize:10, background:C.gold, color:C.black, border:"none", cursor:"pointer", fontFamily:"Jost,sans-serif" }}>Check</button>
              </div>
              {pinMsg&&<div style={{ fontFamily:"Jost,sans-serif", fontSize:12, color:pinMsg.startsWith("✓")?C.green:"#E57373", marginBottom:10 }}>{pinMsg}</div>}
              <div style={{ fontFamily:"Jost,sans-serif", fontSize:12, color:C.muted, lineHeight:1.8 }}>🚚 Free delivery above ₹299<br/>📦 COD available<br/>🔄 7-day returns<br/>⚡ Dispatched in 24hrs</div>
            </div>
          )}
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
            <span style={{ fontFamily:"Jost,sans-serif", fontSize:10, letterSpacing:2, color:C.muted, textTransform:"uppercase" }}>Qty</span>
            <div style={{ display:"flex", alignItems:"center", border:"1px solid "+C.border }}>
              <button onClick={()=>setQty(q=>Math.max(1,q-1))} style={{ width:34, height:34, background:"none", border:"none", color:C.cream, cursor:"pointer", fontSize:16 }}>−</button>
              <span style={{ width:32, textAlign:"center", fontFamily:"Jost,sans-serif", fontSize:14 }}>{qty}</span>
              <button onClick={()=>setQty(q=>q+1)} style={{ width:34, height:34, background:"none", border:"none", color:C.cream, cursor:"pointer", fontSize:16 }}>+</button>
            </div>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
            <button onClick={()=>onAddToCart(product,qty)} style={{ padding:13, fontSize:11, letterSpacing:2, background:C.gold, color:C.black, border:"none", cursor:"pointer", fontFamily:"Jost,sans-serif", fontWeight:500, textTransform:"uppercase", width:"100%", transition:"all .25s" }} onMouseEnter={e=>e.currentTarget.style.background=C.goldL} onMouseLeave={e=>e.currentTarget.style.background=C.gold}>Add to Bag</button>
            <button onClick={openWA} style={{ padding:13, fontSize:11, letterSpacing:2, background:"transparent", color:C.gold, border:`1px solid ${C.gold}`, cursor:"pointer", fontFamily:"Jost,sans-serif", textTransform:"uppercase", width:"100%", display:"flex", alignItems:"center", justifyContent:"center", gap:8, transition:"all .25s" }} onMouseEnter={e=>{e.currentTarget.style.background=C.gold;e.currentTarget.style.color=C.black;}} onMouseLeave={e=>{e.currentTarget.style.background="transparent";e.currentTarget.style.color=C.gold;}}><WAIcon size={14}/> Order on WhatsApp</button>
          </div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginTop:14 }}>
            {product.tags.map(t=><span key={t} style={{ fontFamily:"Jost,sans-serif", fontSize:9, letterSpacing:1, color:C.muted, border:"1px solid "+C.border, padding:"2px 8px" }}>{t}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}
