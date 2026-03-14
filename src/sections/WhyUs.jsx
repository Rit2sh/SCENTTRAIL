// src/sections/WhyUs.jsx
import AnimDiv from "../components/AnimDiv";
import CONFIG from "../data/config";
const { colors:C, whyUs } = CONFIG;
export default function WhyUs() {
  return (
    <section id="about" style={{ padding:"64px 16px", background:C.black }}>
      <AnimDiv>
        <div style={{ fontFamily:"Jost,sans-serif", fontSize:9, letterSpacing:5, color:C.gold, textTransform:"uppercase", marginBottom:10 }}>Why Us</div>
        <h2 style={{ fontFamily:"Playfair Display,serif", fontSize:"clamp(24px,5vw,52px)", fontWeight:400, marginBottom:40 }}>The <em style={{ color:C.gold }}>Scent Trial</em> Difference</h2>
      </AnimDiv>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))", gap:2, border:"1px solid "+C.border }}>
        {whyUs.map((w,i)=>(
          <AnimDiv key={w.title} delay={i*.07}>
            <div style={{ padding:"32px 24px", border:"1px solid "+C.border, transition:"all .35s", cursor:"default" }}
              onMouseEnter={e=>e.currentTarget.style.background="rgba(201,169,110,.05)"}
              onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
              <div style={{ fontSize:28, marginBottom:14 }}>{w.icon}</div>
              <div style={{ fontFamily:"Jost,sans-serif", fontSize:10, color:C.gold, letterSpacing:2, marginBottom:8, textTransform:"uppercase" }}>{w.stat}</div>
              <h3 style={{ fontFamily:"Playfair Display,serif", fontSize:17, fontWeight:400, marginBottom:10 }}>{w.title}</h3>
              <p style={{ fontFamily:"Jost,sans-serif", fontSize:12, color:C.muted, lineHeight:1.7 }}>{w.desc}</p>
            </div>
          </AnimDiv>
        ))}
      </div>
    </section>
  );
}
