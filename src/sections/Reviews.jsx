// src/sections/Reviews.jsx
import AnimDiv from "../components/AnimDiv";
import Stars from "../components/Stars";
import CONFIG from "../data/config";
import REVIEWS from "../data/reviews";
const { colors:C } = CONFIG;
export default function Reviews() {
  return (
    <section id="reviews" style={{ padding:"64px 16px", background:C.black }}>
      <AnimDiv>
        <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", marginBottom:40, flexWrap:"wrap", gap:16 }}>
          <div>
            <div style={{ fontFamily:"Jost,sans-serif", fontSize:9, letterSpacing:5, color:C.gold, textTransform:"uppercase", marginBottom:10 }}>Testimonials</div>
            <h2 style={{ fontFamily:"Playfair Display,serif", fontSize:"clamp(24px,5vw,52px)", fontWeight:400 }}>What Customers <em style={{ color:C.gold }}>Say</em></h2>
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <div style={{ fontFamily:"Playfair Display,serif", fontSize:40, color:C.gold }}>4.9</div>
            <div>
              <Stars n={5} size={15}/>
              <div style={{ fontFamily:"Jost,sans-serif", fontSize:10, color:C.muted, marginTop:3 }}>4,094+ reviews</div>
            </div>
          </div>
        </div>
      </AnimDiv>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))", gap:12 }}>
        {REVIEWS.map((r,i)=>(
          <AnimDiv key={r.id} delay={i*.06}>
            <div style={{ padding:"24px 20px", border:"1px solid "+C.border, transition:"all .3s", cursor:"default" }}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.borderColor="rgba(201,169,110,.45)";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.borderColor=C.border;}}>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:10 }}>
                <Stars n={r.rating}/>
                {r.verified&&<span style={{ fontFamily:"Jost,sans-serif", fontSize:9, color:C.green, border:"1px solid rgba(129,199,132,.3)", padding:"2px 8px" }}>✓ Verified</span>}
              </div>
              <p style={{ fontFamily:"Cormorant Garamond,serif", fontSize:16, lineHeight:1.65, marginBottom:16, color:C.cream, fontStyle:"italic" }}>"{r.text}"</p>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                  <div style={{ width:34, height:34, borderRadius:"50%", background:`linear-gradient(135deg,#9A7A45,${C.gold})`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, color:C.black, fontWeight:700, fontFamily:"Playfair Display,serif", flexShrink:0 }}>{r.name[0]}</div>
                  <div>
                    <div style={{ fontFamily:"Jost,sans-serif", fontSize:12, fontWeight:500 }}>{r.name}</div>
                    <div style={{ fontFamily:"Jost,sans-serif", fontSize:10, color:C.muted }}>{r.city} · {r.date}</div>
                  </div>
                </div>
              </div>
              <div style={{ marginTop:12, paddingTop:10, borderTop:"1px solid "+C.border }}>
                <span style={{ fontFamily:"Jost,sans-serif", fontSize:10, color:C.muted }}>👍 {r.helpful} found helpful</span>
              </div>
            </div>
          </AnimDiv>
        ))}
      </div>
    </section>
  );
}
