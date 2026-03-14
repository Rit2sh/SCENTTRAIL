// src/sections/Hero.jsx
import CONFIG from "../data/config";
import IMAGES from "../assets/images";
const { colors:C, heroStats } = CONFIG;
export default function Hero({ onShopNow, onAddTrialToCart }) {
  return (
    <section id="hero" style={{ minHeight:"92vh", display:"flex", alignItems:"center", position:"relative", overflow:"hidden", padding:"0 20px" }}>
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 55% 65% at 68% 50%, rgba(201,169,110,.11) 0%, transparent 65%), linear-gradient(140deg,#0A0A0A 0%,#141210 100%)" }}/>
      <div style={{ position:"absolute", right:0, top:0, bottom:0, width:"50%", overflow:"hidden", animation:"imgZoomIn 1.5s ease .5s both" }}>
        <img src={IMAGES.hero} alt="Scent Trial" style={{ width:"100%", height:"100%", objectFit:"cover", opacity:.55 }}/>
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right,#0A0A0A 0%,rgba(10,10,10,.5) 40%,transparent 100%)" }}/>
      </div>
      <div style={{ position:"relative", zIndex:2, maxWidth:620, width:"100%", animation:"heroIn 1.2s ease .3s both" }}>
        <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:20 }}>
          <div style={{ height:1, width:28, background:C.gold }}/>
          <span style={{ fontSize:9, letterSpacing:4, color:C.gold, textTransform:"uppercase", fontFamily:"Jost,sans-serif" }}>Eau De Parfum · Pune, India</span>
        </div>
        <h1 style={{ fontFamily:"Playfair Display,serif", fontSize:"clamp(38px,8vw,86px)", fontWeight:400, lineHeight:1.05, letterSpacing:-1, marginBottom:16 }}>
          Affordable<br/><em style={{ color:C.gold }}>Luxury</em><br/>Fragrances
        </h1>
        <p style={{ fontFamily:"Jost,sans-serif", fontSize:14, color:"rgba(250,247,242,.55)", lineHeight:1.75, marginBottom:28, maxWidth:380, fontWeight:300 }}>
          Premium smelling perfumes without the premium price. Try before you buy — 10ml trial packs from ₹199.
        </p>
        <div style={{ display:"flex", gap:16, marginBottom:28, flexWrap:"wrap" }}>
          {heroStats.map(({value,label})=>(
            <div key={label} style={{ borderLeft:"2px solid rgba(201,169,110,.3)", paddingLeft:12 }}>
              <div style={{ fontFamily:"Playfair Display,serif", fontSize:20, color:C.gold, fontWeight:500 }}>{value}</div>
              <div style={{ fontFamily:"Jost,sans-serif", fontSize:9, letterSpacing:2, color:C.muted, textTransform:"uppercase", marginTop:2 }}>{label}</div>
            </div>
          ))}
        </div>
        <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
          <button onClick={onShopNow} style={{ padding:"14px 32px", fontSize:11, letterSpacing:3, background:C.gold, color:C.black, border:"none", cursor:"pointer", fontFamily:"Jost,sans-serif", fontWeight:600, textTransform:"uppercase", transition:"all .25s", flex:1, minWidth:140 }}>Shop Now</button>
          <button onClick={onAddTrialToCart} style={{ padding:"14px 24px", fontSize:11, letterSpacing:2, background:"transparent", color:C.gold, border:`1px solid ${C.gold}`, cursor:"pointer", fontFamily:"Jost,sans-serif", textTransform:"uppercase", transition:"all .25s", flex:1, minWidth:140 }}>Try ₹199</button>
        </div>
      </div>
    </section>
  );
}
