// src/sections/AnnouncementBar.jsx
import CONFIG from "../data/config";
const { colors:C, announcements } = CONFIG;
export default function AnnouncementBar() {
  const text = announcements.join("   ");
  return (
    <div style={{ background:C.gold, padding:"8px 0", overflow:"hidden" }}>
      <div style={{ display:"flex", animation:"marquee 22s linear infinite", whiteSpace:"nowrap" }}>
        {[text,text].map((t,i)=>(
          <span key={i} style={{ fontSize:10, letterSpacing:2, color:C.black, textTransform:"uppercase", flexShrink:0, paddingRight:48, fontFamily:"Jost,sans-serif" }}>{t}</span>
        ))}
      </div>
    </div>
  );
}
