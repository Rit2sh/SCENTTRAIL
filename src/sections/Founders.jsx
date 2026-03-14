// src/sections/Founders.jsx
import AnimDiv from "../components/AnimDiv";
import CONFIG from "../data/config";
import IMAGES from "../assets/images";
const { colors:C, founders } = CONFIG;
export default function Founders() {
  return (
    <section id="founders" style={{ padding:"64px 16px", background:C.dark }}>
      <AnimDiv>
        <div style={{ fontFamily:"Jost,sans-serif", fontSize:9, letterSpacing:5, color:C.gold, textTransform:"uppercase", marginBottom:10 }}>The Team</div>
        <h2 style={{ fontFamily:"Playfair Display,serif", fontSize:"clamp(26px,5vw,52px)", fontWeight:400, marginBottom:40 }}>Built by <em style={{ color:C.gold }}>Founders</em></h2>
      </AnimDiv>
      {/* Stack to 1 column on mobile */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))", gap:24 }}>
        {founders.map((f,i)=>(
          <AnimDiv key={f.name} delay={i*.15}>
            <div style={{ border:"1px solid "+C.border, overflow:"hidden", transition:"border-color .3s" }}
              onMouseEnter={e=>e.currentTarget.style.borderColor="rgba(201,169,110,.5)"}
              onMouseLeave={e=>e.currentTarget.style.borderColor=C.border}>
              {/* Photo */}
              <div style={{ height:340, overflow:"hidden", position:"relative" }}>
                <img src={IMAGES[f.imgKey]} alt={f.name} style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"top center", transition:"transform .6s ease" }}
                  onMouseEnter={e=>e.target.style.transform="scale(1.04)"}
                  onMouseLeave={e=>e.target.style.transform="scale(1)"}/>
                <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(13,12,10,.95) 0%,transparent 50%)" }}/>
                <div style={{ position:"absolute", bottom:20, left:20, right:20 }}>
                  <div style={{ fontFamily:"Jost,sans-serif", fontSize:9, letterSpacing:3, color:C.gold, textTransform:"uppercase", marginBottom:6 }}>{f.role}</div>
                  <h3 style={{ fontFamily:"Playfair Display,serif", fontSize:24, fontWeight:400, color:C.cream }}>{f.name}</h3>
                </div>
              </div>
              {/* Bio */}
              <div style={{ padding:"20px 20px 28px" }}>
                <div style={{ fontFamily:"Jost,sans-serif", fontSize:11, color:C.muted, marginBottom:12 }}>{f.title}</div>
                <p style={{ fontFamily:"Jost,sans-serif", fontSize:12, color:"rgba(250,247,242,.52)", lineHeight:1.8, marginBottom:16 }}>{f.bio}</p>
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:10 }}>
                  <span style={{ fontFamily:"Jost,sans-serif", fontSize:10, color:C.muted }}>📍 {f.location}</span>
                  <div style={{ display:"flex", gap:8 }}>
                    {f.links.map(l=>(
                      <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" style={{ padding:"6px 14px", fontSize:10, letterSpacing:1, background:"#1a1814", color:"#FAF7F2", border:"1px solid rgba(201,169,110,.2)", textDecoration:"none", fontFamily:"Jost,sans-serif", transition:"all .25s" }}
                        onMouseEnter={e=>{e.currentTarget.style.borderColor=C.gold;e.currentTarget.style.color=C.gold;}}
                        onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(201,169,110,.2)";e.currentTarget.style.color="#FAF7F2";}}>
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimDiv>
        ))}
      </div>
    </section>
  );
}
