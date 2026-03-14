// src/sections/FloatingWA.jsx
// On mobile: single compact button bottom right
// On desktop: two stacked buttons
import { useState } from "react";
import WAIcon from "../components/WAIcon";
import CONFIG from "../data/config";
const { colors:C, whatsapp:WA } = CONFIG;
const BTNS = [
  { num:WA.primary,   display:"+91 75077 39785", name:"Vipul" },
  { num:WA.secondary, display:"+91 99532 31435", name:"Ritesh" },
];
export default function FloatingWA() {
  const [expanded, setExpanded] = useState(false);
  const openWA = (num) => window.open(`https://wa.me/${num}?text=${encodeURIComponent(WA.message)}`,"_blank");
  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .wa-desktop { display: none !important; }
          .wa-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .wa-desktop { display: flex !important; }
          .wa-mobile { display: none !important; }
        }
      `}</style>

      {/* Desktop: two stacked buttons */}
      <div className="wa-desktop" style={{ position:"fixed", bottom:24, right:24, zIndex:999, flexDirection:"column", gap:8, alignItems:"flex-end" }}>
        {BTNS.map(b=>(
          <div key={b.num} onClick={()=>openWA(b.num)} style={{ background:"#111", border:"1px solid rgba(201,169,110,.22)", padding:"9px 14px 9px 10px", display:"flex", alignItems:"center", gap:9, cursor:"pointer", transition:"all .3s", boxShadow:"0 4px 24px rgba(0,0,0,.45)" }}
            onMouseEnter={e=>e.currentTarget.style.borderColor="rgba(201,169,110,.65)"}
            onMouseLeave={e=>e.currentTarget.style.borderColor="rgba(201,169,110,.22)"}>
            <WAIcon size={18}/>
            <div>
              <div style={{ fontFamily:"Jost,sans-serif", fontSize:8, letterSpacing:2, color:"rgba(201,169,110,.65)", textTransform:"uppercase" }}>Order Now</div>
              <div style={{ fontFamily:"Jost,sans-serif", fontSize:11, color:C.cream }}>{b.display}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: single expandable button */}
      <div className="wa-mobile" style={{ position:"fixed", bottom:20, right:16, zIndex:999, flexDirection:"column", alignItems:"flex-end", gap:8 }}>
        {/* Expanded options */}
        {expanded && BTNS.map(b=>(
          <div key={b.num} onClick={()=>{openWA(b.num);setExpanded(false);}} style={{ background:"#111", border:"1px solid rgba(201,169,110,.35)", padding:"10px 14px", display:"flex", alignItems:"center", gap:10, cursor:"pointer", boxShadow:"0 4px 20px rgba(0,0,0,.6)", animation:"fadeUp .2s ease" }}>
            <WAIcon size={16}/>
            <div>
              <div style={{ fontFamily:"Jost,sans-serif", fontSize:9, color:C.gold }}>{b.name}</div>
              <div style={{ fontFamily:"Jost,sans-serif", fontSize:11, color:C.cream }}>{b.display}</div>
            </div>
          </div>
        ))}
        {/* Main button */}
        <button onClick={()=>setExpanded(!expanded)} style={{ width:52, height:52, borderRadius:"50%", background:"#25D366", border:"none", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", boxShadow:"0 4px 20px rgba(37,211,102,.4)", transition:"all .25s", transform: expanded ? "rotate(45deg)" : "none" }}>
          {expanded
            ? <span style={{ color:"white", fontSize:22, fontWeight:300 }}>×</span>
            : <WAIcon size={26} color="white"/>
          }
        </button>
      </div>
    </>
  );
}
