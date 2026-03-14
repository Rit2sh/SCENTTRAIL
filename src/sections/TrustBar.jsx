// src/sections/TrustBar.jsx
import CONFIG from "../data/config";
const { colors:C, trustBadges } = CONFIG;
export default function TrustBar() {
  return (
    <div style={{ background:"#0d0c0a", borderBottom:"1px solid "+C.border, overflowX:"auto", WebkitOverflowScrolling:"touch" }}>
      <div style={{ display:"flex", gap:0, minWidth:"max-content", padding:"14px 16px" }}>
        {trustBadges.map(({icon,title,sub})=>(
          <div key={title} style={{ display:"flex", alignItems:"center", gap:8, padding:"0 20px", borderRight:"1px solid "+C.border }}>
            <span style={{ fontSize:18, flexShrink:0 }}>{icon}</span>
            <div style={{ whiteSpace:"nowrap" }}>
              <div style={{ fontFamily:"Jost,sans-serif", fontSize:11, fontWeight:500 }}>{title}</div>
              <div style={{ fontFamily:"Jost,sans-serif", fontSize:10, color:C.muted }}>{sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
