// src/sections/Contact.jsx
import AnimDiv from "../components/AnimDiv";
import WAIcon from "../components/WAIcon";
import CONFIG from "../data/config";
const { colors:C, whatsapp:WA } = CONFIG;
const CONTACTS = [
  { num:WA.primary,   name:"Vipul Gaikwad",  role:"Founder",   display:"+91 99532 31435" },
  { num:WA.secondary, name:"Ritesh Chauhan", role:"Co-Builder", display:"+91 75077 39785" },
];
export default function Contact() {
  const openWA = (num) => window.open(`https://wa.me/${num}?text=${encodeURIComponent(WA.message)}`,"_blank");
  return (
    <section id="contact" style={{ padding:"64px 16px", background:C.dark }}>
      <AnimDiv>
        <div style={{ fontFamily:"Jost,sans-serif", fontSize:9, letterSpacing:5, color:C.gold, textTransform:"uppercase", marginBottom:10 }}>Contact</div>
        <h2 style={{ fontFamily:"Playfair Display,serif", fontSize:"clamp(24px,5vw,46px)", fontWeight:400, marginBottom:32 }}>Order via <em style={{ color:C.gold }}>WhatsApp</em></h2>
      </AnimDiv>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))", gap:12 }}>
        {CONTACTS.map((c,i)=>(
          <AnimDiv key={c.num} delay={i*.12}>
            <div onClick={()=>openWA(c.num)} style={{ padding:"24px 20px", border:"1px solid "+C.border, cursor:"pointer", display:"flex", alignItems:"center", gap:16, background:"rgba(201,169,110,.02)", transition:"all .3s" }}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(201,169,110,.6)";e.currentTarget.style.background="rgba(201,169,110,.06)";}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor=C.border;e.currentTarget.style.background="rgba(201,169,110,.02)";}}>
              <div style={{ width:48, height:48, background:"#25D366", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <WAIcon size={22} color="white"/>
              </div>
              <div>
                <div style={{ fontFamily:"Jost,sans-serif", fontSize:9, letterSpacing:2, color:C.gold, textTransform:"uppercase", marginBottom:4 }}>{c.role} — {c.name}</div>
                <div style={{ fontFamily:"Playfair Display,serif", fontSize:18, color:C.cream, marginBottom:4 }}>{c.display}</div>
                <div style={{ fontFamily:"Jost,sans-serif", fontSize:10, color:C.muted }}>Tap to chat →</div>
              </div>
            </div>
          </AnimDiv>
        ))}
      </div>
    </section>
  );
}
