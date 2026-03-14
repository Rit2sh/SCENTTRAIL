// src/sections/Footer.jsx
import CONFIG from "../data/config";
const { colors:C, brandName, email, location, year, social, footerLinks } = CONFIG;
export default function Footer() {
  return (
    <footer style={{ background:"#050504", padding:"48px 16px 24px", borderTop:"1px solid "+C.border }}>
      {/* Stack to 1 col on mobile, 4 on desktop */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(160px, 1fr))", gap:32, marginBottom:36 }}>
        <div style={{ gridColumn:"1 / -1", maxWidth:280 }}>
          <div style={{ fontFamily:"Playfair Display,serif", fontSize:16, letterSpacing:6, color:C.gold, marginBottom:12 }}>{brandName}</div>
          <p style={{ fontFamily:"Jost,sans-serif", fontSize:12, color:C.muted, lineHeight:1.8, marginBottom:16 }}>Affordable luxury fragrances crafted for the modern soul. Made in Pune, India.</p>
          <div style={{ display:"flex", gap:8, marginBottom:12 }}>
            {[{label:"in",href:social.linkedin},{label:"GH",href:social.github},{label:"IG",href:social.instagram}].map(({label,href})=>(
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{ width:32, height:32, display:"flex", alignItems:"center", justifyContent:"center", fontSize:10, background:"#1a1814", color:C.muted, border:"1px solid rgba(201,169,110,.2)", textDecoration:"none", transition:"all .25s" }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor=C.gold;e.currentTarget.style.color=C.gold;}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(201,169,110,.2)";e.currentTarget.style.color=C.muted;}}>
                {label}
              </a>
            ))}
          </div>
          <div style={{ fontFamily:"Jost,sans-serif", fontSize:11, color:C.muted }}>📧 {email}</div>
        </div>
        {footerLinks.map(col=>(
          <div key={col.heading}>
            <h4 style={{ fontFamily:"Jost,sans-serif", fontSize:9, letterSpacing:3, color:C.gold, marginBottom:14, textTransform:"uppercase" }}>{col.heading}</h4>
            <ul style={{ listStyle:"none" }}>
              {col.links.map(l=>(
                <li key={l} style={{ marginBottom:8 }}>
                  <button onClick={()=>{}} style={{ background:"none", border:"none", cursor:"pointer", fontFamily:"Jost,sans-serif", fontSize:12, color:C.muted, transition:"color .25s", padding:0, textAlign:"left" }}
                    onMouseEnter={e=>e.target.style.color=C.gold}
                    onMouseLeave={e=>e.target.style.color=C.muted}>
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", paddingTop:20, borderTop:"1px solid "+C.border, flexWrap:"wrap", gap:10 }}>
        <p style={{ fontFamily:"Jost,sans-serif", fontSize:10, color:"rgba(138,127,116,.5)" }}>© {year} {brandName} · {location}</p>
        <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
          {["Visa","Mastercard","UPI","COD"].map(p=><span key={p} style={{ fontFamily:"Jost,sans-serif", fontSize:9, color:C.muted, border:"1px solid "+C.border, padding:"3px 8px" }}>{p}</span>)}
        </div>
      </div>
    </footer>
  );
}
