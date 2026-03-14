// src/sections/CTABanner.jsx
import AnimDiv from "../components/AnimDiv";
import WAIcon from "../components/WAIcon";
import CONFIG from "../data/config";
const { colors:C, whatsapp:WA } = CONFIG;
export default function CTABanner({ onShopNow }) {
  const openWA = () => window.open(`https://wa.me/${WA.primary}?text=${encodeURIComponent(WA.message)}`,"_blank");
  return (
    <section style={{ padding:"64px 16px", background:"linear-gradient(135deg,#111008,#0d0b09)", position:"relative", overflow:"hidden", textAlign:"center" }}>
      <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:400, height:400, borderRadius:"50%", background:"radial-gradient(circle,rgba(201,169,110,.08) 0%,transparent 70%)", pointerEvents:"none" }}/>
      <AnimDiv>
        <div style={{ display:"flex", justifyContent:"center", alignItems:"center", gap:10, marginBottom:14 }}>
          <span style={{ width:36, height:1, background:C.gold, display:"block", opacity:.45 }}/>
          <span style={{ fontFamily:"Jost,sans-serif", fontSize:9, letterSpacing:4, color:C.gold, textTransform:"uppercase" }}>Try Before You Buy</span>
          <span style={{ width:36, height:1, background:C.gold, display:"block", opacity:.45 }}/>
        </div>
        <h2 style={{ fontFamily:"Playfair Display,serif", fontSize:"clamp(26px,6vw,58px)", fontWeight:400, marginBottom:16 }}>Discover Your<br/><em style={{ color:C.gold }}>Signature Scent</em></h2>
        <p style={{ fontFamily:"Jost,sans-serif", fontSize:13, color:"rgba(250,247,242,.48)", lineHeight:1.8, maxWidth:480, margin:"0 auto 36px" }}>Try our 10ml trial packs at just ₹199. Experience the fragrance for a week — love it? Upgrade to the full bottle.</p>
        <div style={{ display:"flex", gap:10, justifyContent:"center", flexWrap:"wrap", padding:"0 16px" }}>
          <button onClick={onShopNow} style={{ padding:"14px 36px", fontSize:11, letterSpacing:3, background:C.gold, color:C.black, border:"none", cursor:"pointer", fontFamily:"Jost,sans-serif", fontWeight:600, textTransform:"uppercase", transition:"all .25s", flex:1, maxWidth:200 }}>Shop Now</button>
          <button onClick={openWA} style={{ padding:"14px 24px", fontSize:11, letterSpacing:2, background:"transparent", color:C.gold, border:`1px solid ${C.gold}`, cursor:"pointer", fontFamily:"Jost,sans-serif", textTransform:"uppercase", display:"flex", alignItems:"center", justifyContent:"center", gap:8, transition:"all .25s", flex:1, maxWidth:200 }}><WAIcon size={14}/> WhatsApp</button>
        </div>
        <div style={{ marginTop:16, fontFamily:"Jost,sans-serif", fontSize:11, color:C.muted }}>Code <span style={{ color:C.gold, fontWeight:500 }}>TRIAL50</span> → ₹50 off first order</div>
      </AnimDiv>
    </section>
  );
}
