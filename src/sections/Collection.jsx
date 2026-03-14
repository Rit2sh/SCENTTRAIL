// src/sections/Collection.jsx
import { useState } from "react";
import AnimDiv from "../components/AnimDiv";
import Stars from "../components/Stars";
import CONFIG from "../data/config";
import PRODUCTS from "../data/products";
import IMAGES from "../assets/images";
const { colors:C } = CONFIG;
const FILTERS = ["All","Men","Women","Unisex"];

export default function Collection({ onAddToCart, onQuickView, onToggleWishlist, isWishlisted }) {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? PRODUCTS : PRODUCTS.filter(p => p.gender === filter);
  return (
    <section id="collection" style={{ padding:"64px 16px", background:C.dark }}>
      <AnimDiv>
        <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:12, flexWrap:"wrap", gap:16 }}>
          <div>
            <div style={{ fontFamily:"Jost,sans-serif", fontSize:9, letterSpacing:5, color:C.gold, textTransform:"uppercase", marginBottom:10 }}>Our Collection</div>
            <h2 style={{ fontFamily:"Playfair Display,serif", fontSize:"clamp(24px,5vw,52px)", fontWeight:400 }}>Signature <em style={{ color:C.gold }}>Fragrances</em></h2>
          </div>
          {/* Filter buttons — scrollable row on mobile */}
          <div style={{ display:"flex", gap:6, overflowX:"auto", paddingBottom:4, WebkitOverflowScrolling:"touch" }}>
            {FILTERS.map(f=>(
              <button key={f} onClick={()=>setFilter(f)} style={{ padding:"6px 14px", fontSize:10, letterSpacing:1, textTransform:"uppercase", background:filter===f?C.gold:"transparent", color:filter===f?C.black:C.muted, border:`1px solid ${filter===f?C.gold:C.border}`, cursor:"pointer", fontFamily:"Jost,sans-serif", transition:"all .25s", whiteSpace:"nowrap", flexShrink:0 }}>{f}</button>
            ))}
          </div>
        </div>
        <p style={{ fontFamily:"Jost,sans-serif", fontSize:12, color:C.muted, marginBottom:28 }}>Showing {filtered.length} products</p>
      </AnimDiv>

      {/* 1 column on mobile, 2 on tablet, 3 on desktop */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))", gap:12 }}>
        {filtered.map((p,i)=>(
          <AnimDiv key={p.id} delay={i*.06}>
            <div style={{ background:C.card, border:"1px solid "+C.border, overflow:"hidden", cursor:"pointer", transition:"all .3s" }}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(201,169,110,.55)";}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor=C.border;}}>

              {/* Image */}
              <div style={{ position:"relative", height:280, overflow:"hidden", background:p.bg }} onClick={()=>onQuickView(p)}>
                <img src={IMAGES[p.imgKey]} alt={p.name} style={{ width:"100%", height:"100%", objectFit:"cover", transition:"transform .65s ease" }}
                  onMouseEnter={e=>e.target.style.transform="scale(1.05)"}
                  onMouseLeave={e=>e.target.style.transform="scale(1)"}/>
                <div style={{ position:"absolute", inset:0, background:`linear-gradient(to top,${C.card} 0%,transparent 55%)` }}/>
                <div style={{ position:"absolute", top:12, left:12, display:"flex", flexDirection:"column", gap:5, zIndex:2 }}>
                  <span style={{ background:C.gold, color:C.black, fontSize:9, letterSpacing:2, padding:"3px 8px", fontWeight:700, fontFamily:"Jost,sans-serif" }}>{p.badge}</span>
                  <span style={{ background:"rgba(10,10,10,.85)", color:C.green, fontSize:9, padding:"3px 8px", border:"1px solid rgba(129,199,132,.3)", fontFamily:"Jost,sans-serif" }}>{Math.round((1-p.price/p.mrp)*100)}% OFF</span>
                </div>
                <button onClick={e=>{e.stopPropagation();onToggleWishlist(p.id);}} style={{ position:"absolute", top:12, right:12, zIndex:2, background:"rgba(10,10,10,.75)", border:"1px solid "+C.border, width:36, height:36, display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", color:isWishlisted(p.id)?C.gold:C.muted, fontSize:18, transition:"all .25s" }}>
                  {isWishlisted(p.id)?"♥":"♡"}
                </button>
              </div>

              {/* Info */}
              <div style={{ padding:"16px 16px 20px", borderTop:"1px solid "+C.border }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:6 }}>
                  <h3 style={{ fontFamily:"Playfair Display,serif", fontSize:20, fontWeight:400 }}>{p.name}</h3>
                  <span style={{ fontFamily:"Jost,sans-serif", fontSize:10, color:C.muted }}>{p.size}</span>
                </div>
                <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:10 }}>
                  <Stars n={p.rating}/><span style={{ fontFamily:"Jost,sans-serif", fontSize:10, color:C.muted }}>{p.rating} ({p.reviews.toLocaleString()})</span>
                </div>
                <p style={{ fontFamily:"Jost,sans-serif", fontSize:12, color:C.muted, lineHeight:1.6, marginBottom:14 }}>{p.desc.slice(0,75)}...</p>
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:8 }}>
                  <div style={{ display:"flex", alignItems:"baseline", gap:8 }}>
                    <span style={{ fontFamily:"Playfair Display,serif", fontSize:22, color:C.gold }}>₹{p.price}</span>
                    <span style={{ fontFamily:"Jost,sans-serif", fontSize:11, color:C.muted, textDecoration:"line-through" }}>₹{p.mrp}</span>
                  </div>
                  <button onClick={()=>onAddToCart(p)} style={{ padding:"10px 16px", fontSize:10, letterSpacing:1, background:C.gold, color:C.black, border:"none", cursor:"pointer", fontFamily:"Jost,sans-serif", fontWeight:600, textTransform:"uppercase", transition:"all .25s", whiteSpace:"nowrap" }}>Add to Bag</button>
                </div>
              </div>
            </div>
          </AnimDiv>
        ))}
      </div>
    </section>
  );
}
