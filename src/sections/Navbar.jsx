// src/sections/Navbar.jsx
import { useState, useEffect } from "react";
import CONFIG from "../data/config";
import WAIcon from "../components/WAIcon";
const { colors: C, whatsapp: WA, brandName } = CONFIG;
const NAV_LINKS = ["collection","about","founders","reviews","contact"];

export default function Navbar({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  const openWA = () => window.open(`https://wa.me/${WA.primary}?text=${encodeURIComponent(WA.message)}`, "_blank");

  return (
    <>
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:100, height:64, display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 20px", background: scrolled ? "rgba(8,8,6,.97)" : "rgba(8,8,6,.85)", backdropFilter:"blur(24px)", borderBottom:"1px solid "+C.border, transition:"all .4s" }}>

        {/* Logo — LEFT */}
        <div onClick={() => window.scrollTo({top:0,behavior:"smooth"})} style={{ fontFamily:"Playfair Display,serif", fontSize:16, letterSpacing:5, color:C.gold, cursor:"pointer", flexShrink:0 }}>
          {brandName}
        </div>

        {/* Desktop nav links — CENTER (hidden on mobile) */}
        <div className="desktop-nav" style={{ display:"flex", gap:24 }}>
          {NAV_LINKS.map(l => (
            <button key={l} onClick={() => scrollTo(l)} style={{ background:"none", border:"none", cursor:"pointer", color:"rgba(250,247,242,.6)", fontSize:10, letterSpacing:"2px", textTransform:"uppercase", fontFamily:"Jost,sans-serif", transition:"color .25s" }}
              onMouseEnter={e=>e.target.style.color=C.gold}
              onMouseLeave={e=>e.target.style.color="rgba(250,247,242,.6)"}>
              {l}
            </button>
          ))}
        </div>

        {/* Right — Bag + Hamburger */}
        <div style={{ display:"flex", gap:8, alignItems:"center" }}>
          {/* WA button desktop only */}
          <button onClick={openWA} className="desktop-nav" style={{ padding:"7px 14px", fontSize:10, letterSpacing:2, display:"flex", alignItems:"center", gap:6, background:"#1a1814", color:"#FAF7F2", border:"1px solid rgba(201,169,110,.2)", cursor:"pointer", fontFamily:"Jost,sans-serif", transition:"all .25s" }}
            onMouseEnter={e=>{e.currentTarget.style.borderColor=C.gold;e.currentTarget.style.color=C.gold;}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(201,169,110,.2)";e.currentTarget.style.color="#FAF7F2";}}>
            <WAIcon size={12}/> Order
          </button>

          {/* Bag button */}
          <button onClick={onCartOpen} style={{ padding:"8px 14px", fontSize:10, letterSpacing:2, display:"flex", alignItems:"center", gap:6, background:C.gold, color:C.black, border:"none", cursor:"pointer", fontFamily:"Jost,sans-serif", fontWeight:500, transition:"all .25s" }}
            onMouseEnter={e=>e.currentTarget.style.background=C.goldL}
            onMouseLeave={e=>e.currentTarget.style.background=C.gold}>
            🛍
            {cartCount > 0 && <span style={{ background:C.black, color:C.gold, borderRadius:99, width:16, height:16, display:"flex", alignItems:"center", justifyContent:"center", fontSize:9, fontWeight:700 }}>{cartCount}</span>}
          </button>

          {/* Hamburger — mobile only */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-only" style={{ background:"none", border:"1px solid rgba(201,169,110,.25)", padding:"7px 10px", cursor:"pointer", display:"flex", flexDirection:"column", gap:4, color:C.gold }}>
            <span style={{ width:18, height:1.5, background:C.gold, display:"block", transition:"all .3s", transform: menuOpen ? "rotate(45deg) translate(4px,4px)" : "none" }}/>
            <span style={{ width:18, height:1.5, background:C.gold, display:"block", opacity: menuOpen ? 0 : 1 }}/>
            <span style={{ width:18, height:1.5, background:C.gold, display:"block", transition:"all .3s", transform: menuOpen ? "rotate(-45deg) translate(4px,-4px)" : "none" }}/>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div style={{ position:"fixed", top:64, left:0, right:0, zIndex:99, background:"rgba(8,8,6,.98)", backdropFilter:"blur(20px)", borderBottom:"1px solid "+C.border, padding:"16px 20px 20px", display:"flex", flexDirection:"column", gap:4 }}>
          {NAV_LINKS.map(l => (
            <button key={l} onClick={() => scrollTo(l)} style={{ background:"none", border:"none", cursor:"pointer", color:"rgba(250,247,242,.7)", fontSize:13, letterSpacing:"2px", textTransform:"uppercase", fontFamily:"Jost,sans-serif", padding:"12px 0", textAlign:"left", borderBottom:"1px solid rgba(201,169,110,.08)", transition:"color .2s" }}
              onMouseEnter={e=>e.target.style.color=C.gold}
              onMouseLeave={e=>e.target.style.color="rgba(250,247,242,.7)"}>
              {l}
            </button>
          ))}
          <button onClick={()=>{openWA();setMenuOpen(false);}} style={{ marginTop:12, padding:"13px", fontSize:11, letterSpacing:2, background:C.gold, color:C.black, border:"none", cursor:"pointer", fontFamily:"Jost,sans-serif", fontWeight:600, textTransform:"uppercase", display:"flex", alignItems:"center", justifyContent:"center", gap:8 }}>
            <WAIcon size={14}/> Order on WhatsApp
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
        @media (min-width: 769px) {
          .mobile-only { display: none !important; }
        }
      `}</style>
    </>
  );
}
