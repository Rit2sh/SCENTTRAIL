import { useState } from "react";

const INIT_ORDERS = [
  { id:"ST001", customer:"Arjun Mehta",     phone:"9876543210", city:"Mumbai",    product:"Trial Pack 10ml",  qty:2, amount:398, status:"Delivered", date:"2026-03-10", channel:"WhatsApp" },
  { id:"ST002", customer:"Priya Sharma",    phone:"9123456780", city:"Delhi",     product:"Date Night 30ml",  qty:1, amount:299, status:"Shipped",   date:"2026-03-11", channel:"Instagram" },
  { id:"ST003", customer:"Rohan Desai",     phone:"9988776655", city:"Pune",      product:"Signature Set",    qty:1, amount:449, status:"Pending",   date:"2026-03-12", channel:"WhatsApp" },
  { id:"ST004", customer:"Kavya Nair",      phone:"9001122334", city:"Bangalore", product:"Trial Pack 10ml",  qty:3, amount:597, status:"Pending",   date:"2026-03-13", channel:"Website" },
  { id:"ST005", customer:"Siddharth Joshi", phone:"9871234560", city:"Nashik",    product:"Date Night 30ml",  qty:2, amount:598, status:"Shipped",   date:"2026-03-13", channel:"WhatsApp" },
  { id:"ST006", customer:"Meera Patel",     phone:"9765432109", city:"Ahmedabad", product:"Signature Set",    qty:1, amount:449, status:"Delivered", date:"2026-03-09", channel:"Instagram" },
];

const INIT_PRODUCTS = [
  { id:1, name:"Trial Pack",    size:"10ml",      price:199, stock:150, sold:48 },
  { id:2, name:"Date Night",    size:"30ml",      price:299, stock:80,  sold:31 },
  { id:3, name:"Signature Set", size:"10ml+30ml", price:449, stock:40,  sold:18 },
];

const STATUS_COLORS = {
  Pending:   { background:"rgba(255,193,7,0.15)",  color:"#FFC107", border:"1px solid rgba(255,193,7,0.3)" },
  Shipped:   { background:"rgba(33,150,243,0.15)", color:"#64B5F6", border:"1px solid rgba(33,150,243,0.3)" },
  Delivered: { background:"rgba(76,175,80,0.15)",  color:"#81C784", border:"1px solid rgba(76,175,80,0.3)" },
  Cancelled: { background:"rgba(244,67,54,0.15)",  color:"#E57373", border:"1px solid rgba(244,67,54,0.3)" },
};

const G = {
  gold:"#C9A96E", goldL:"#E8D5A3", black:"#0A0A0A",
  card:"#111008", dark:"#0D0C0A", cream:"#FAF7F2",
  muted:"#8A7F74", border:"rgba(201,169,110,0.18)", green:"#81C784",
};

export default function AdminDashboard() {
  const [orders,        setOrders]        = useState(INIT_ORDERS);
  const [products,      setProducts]      = useState(INIT_PRODUCTS);
  const [tab,           setTab]           = useState("dashboard");
  const [search,        setSearch]        = useState("");
  const [statusFilter,  setStatusFilter]  = useState("all");
  const [editingOrder,  setEditingOrder]  = useState(null);
  const [modalOpen,     setModalOpen]     = useState(false);
  const [editProduct,   setEditProduct]   = useState(null);
  const [newProduct,    setNewProduct]    = useState({ name:"", size:"", price:"", stock:"" });
  const [toast,         setToast]         = useState(null);
  const [sidebarOpen,   setSidebarOpen]   = useState(true);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  // ── Computed stats ──────────────────────────────
  const totalRevenue   = orders.filter(o => o.status === "Delivered").reduce((s, o) => s + o.amount, 0);
  const totalOrders    = orders.length;
  const pendingOrders  = orders.filter(o => o.status === "Pending").length;
  const totalCustomers = new Set(orders.map(o => o.phone)).size;

  // ── Order actions ────────────────────────────────
  const updateStatus = (id, status) => {
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status } : o));
    setEditingOrder(null);
    showToast("Order status updated!");
  };
  const deleteOrder = (id) => {
    setOrders(prev => prev.filter(o => o.id !== id));
    showToast("Order deleted", "error");
  };

  // ── Product actions ──────────────────────────────
  const openAddProduct = () => {
    setEditProduct(null);
    setNewProduct({ name:"", size:"", price:"", stock:"" });
    setModalOpen(true);
  };
  const openEditProduct = (p) => {
    setEditProduct(p);
    setNewProduct({ name:p.name, size:p.size, price:p.price, stock:p.stock });
    setModalOpen(true);
  };
  const saveProduct = () => {
    if (!newProduct.name || !newProduct.price) return;
    if (editProduct) {
      setProducts(prev => prev.map(p => p.id === editProduct.id
        ? { ...p, ...newProduct, price: Number(newProduct.price), stock: Number(newProduct.stock) }
        : p
      ));
      showToast("Product updated!");
    } else {
      setProducts(prev => [...prev, {
        id: Date.now(), ...newProduct,
        price: Number(newProduct.price),
        stock: Number(newProduct.stock),
        sold: 0,
      }]);
      showToast("Product added!");
    }
    setModalOpen(false);
    setEditProduct(null);
    setNewProduct({ name:"", size:"", price:"", stock:"" });
  };
  const deleteProduct = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
    showToast("Product deleted", "error");
  };

  // ── Filtered orders ──────────────────────────────
  const filtered = orders.filter(o => {
    const q = search.toLowerCase();
    const matchSearch = o.customer.toLowerCase().includes(q) || o.id.toLowerCase().includes(q) || o.city.toLowerCase().includes(q);
    const matchStatus = statusFilter === "all" || o.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const NAV = [
    { id:"dashboard", icon:"📊", label:"Dashboard" },
    { id:"orders",    icon:"📦", label:"Orders" },
    { id:"products",  icon:"🧴", label:"Products" },
    { id:"customers", icon:"👥", label:"Customers" },
    { id:"analytics", icon:"📈", label:"Analytics" },
  ];

  const cardStyle  = { background:G.card, border:`1px solid ${G.border}`, padding:"24px 28px" };
  const thStyle    = { padding:"12px 16px", textAlign:"left", fontSize:10, letterSpacing:2, color:G.muted, textTransform:"uppercase", borderBottom:`1px solid ${G.border}`, fontFamily:"Jost,sans-serif", whiteSpace:"nowrap" };
  const tdStyle    = { padding:"14px 16px", fontSize:13, color:G.cream, borderBottom:`1px solid rgba(201,169,110,0.08)`, fontFamily:"Jost,sans-serif" };

  // ── Status badge helper ──────────────────────────
  const StatusBadge = ({ status }) => (
    <span style={{
      ...STATUS_COLORS[status],
      padding:"3px 10px", fontSize:10,
      letterSpacing:1, textTransform:"uppercase",
    }}>
      {status}
    </span>
  );

  return (
    <div style={{ display:"flex", height:"100vh", fontFamily:"Jost,sans-serif", background:G.black, color:G.cream, overflow:"hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&family=Jost:wght@300;400;500&display=swap');
        ::-webkit-scrollbar{width:4px} ::-webkit-scrollbar-track{background:#0A0A0A} ::-webkit-scrollbar-thumb{background:#C9A96E;border-radius:2px}
        .nav-item:hover{background:rgba(201,169,110,0.08)!important;color:#C9A96E!important}
        .btn-gold{background:#C9A96E;color:#0A0A0A;border:none;cursor:pointer;font-family:Jost,sans-serif;font-weight:500;letter-spacing:2px;text-transform:uppercase;transition:all .25s}
        .btn-gold:hover{background:#E8D5A3}
        .btn-outline{background:transparent;color:#C9A96E;border:1px solid #C9A96E;cursor:pointer;font-family:Jost,sans-serif;letter-spacing:1px;transition:all .25s}
        .btn-outline:hover{background:#C9A96E;color:#0A0A0A}
        .row-hover:hover{background:rgba(201,169,110,0.04)!important}
        .stat-card:hover{border-color:rgba(201,169,110,0.45)!important;transform:translateY(-2px)}
        .stat-card{transition:all .3s}
        .prod-card:hover{border-color:rgba(201,169,110,0.5)!important}
        .prod-card{transition:all .3s}
        @keyframes slideUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        @keyframes toastIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
        input,select{background:#1a1814!important;border:1px solid rgba(201,169,110,0.25)!important;color:#FAF7F2!important;padding:10px 14px!important;font-family:Jost,sans-serif!important;font-size:13px!important;outline:none!important;width:100%!important;box-sizing:border-box!important}
        input:focus,select:focus{border-color:#C9A96E!important}
        select option{background:#1a1814}
      `}</style>

      {/* ── Toast ─────────────────────────────────── */}
      {toast && (
        <div style={{ position:"fixed", top:20, right:24, zIndex:9999, background:toast.type==="error"?"#2a1010":"#101a10", border:`1px solid ${toast.type==="error"?"#E57373":"#81C784"}`, padding:"12px 22px", color:G.cream, fontSize:13, animation:"toastIn .3s ease", boxShadow:"0 8px 30px rgba(0,0,0,0.5)" }}>
          {toast.type === "error" ? "✗" : "✓"} &nbsp;{toast.msg}
        </div>
      )}

      {/* ── Sidebar ───────────────────────────────── */}
      <div style={{ width:sidebarOpen?220:64, background:"#080806", borderRight:`1px solid ${G.border}`, height:"100vh", flexShrink:0, transition:"width 0.3s ease", overflow:"hidden", display:"flex", flexDirection:"column" }}>
        <div style={{ padding:"20px 16px", borderBottom:`1px solid ${G.border}`, display:"flex", alignItems:"center", gap:10, cursor:"pointer" }} onClick={() => setSidebarOpen(!sidebarOpen)}>
          <div style={{ fontSize:18, color:G.gold, flexShrink:0 }}>ST</div>
          {sidebarOpen && <div style={{ fontFamily:"Playfair Display,serif", fontSize:13, letterSpacing:3, color:G.gold, whiteSpace:"nowrap" }}>SCENT TRIAL</div>}
        </div>
        <div style={{ padding:"12px 8px", flex:1 }}>
          {NAV.map(n => (
            <div key={n.id} className="nav-item" onClick={() => setTab(n.id)}
              style={{ display:"flex", alignItems:"center", gap:12, padding:"11px 12px", cursor:"pointer", borderRadius:2, marginBottom:2, background:tab===n.id?"rgba(201,169,110,0.12)":"transparent", color:tab===n.id?G.gold:G.muted, transition:"all .2s", whiteSpace:"nowrap" }}>
              <span style={{ fontSize:16, flexShrink:0 }}>{n.icon}</span>
              {sidebarOpen && <span style={{ fontSize:12, letterSpacing:1, textTransform:"uppercase", fontWeight:tab===n.id?500:300 }}>{n.label}</span>}
            </div>
          ))}
        </div>
        {sidebarOpen && (
          <div style={{ padding:"16px", borderTop:`1px solid ${G.border}` }}>
            <div style={{ fontSize:10, color:G.muted, letterSpacing:1, textTransform:"uppercase", marginBottom:8 }}>Admin</div>
            <div style={{ fontSize:12, color:G.cream }}>Vipul Gaikwad</div>
            <div style={{ fontSize:11, color:G.muted }}>Founder</div>
          </div>
        )}
      </div>

      {/* ── Main body ─────────────────────────────── */}
      <div style={{ flex:1, overflow:"auto", background:G.dark }}>

        {/* Topbar */}
        <div style={{ padding:"16px 32px", borderBottom:`1px solid ${G.border}`, display:"flex", alignItems:"center", justifyContent:"space-between", background:"rgba(10,10,10,0.8)", backdropFilter:"blur(10px)", position:"sticky", top:0, zIndex:10 }}>
          <h1 style={{ fontFamily:"Playfair Display,serif", fontSize:20, fontWeight:400, color:G.cream }}>
            {NAV.find(n => n.id === tab)?.icon}&nbsp;&nbsp;{NAV.find(n => n.id === tab)?.label}
          </h1>
          <div style={{ display:"flex", gap:10, alignItems:"center" }}>
            {pendingOrders > 0 && (
              <div style={{ background:"rgba(255,193,7,0.15)", border:"1px solid rgba(255,193,7,0.3)", padding:"6px 14px", fontSize:11, color:"#FFC107", letterSpacing:1 }}>
                ⚠ {pendingOrders} Pending
              </div>
            )}
            <div style={{ fontSize:12, color:G.muted }}>
              📅 {new Date().toLocaleDateString("en-IN", { day:"numeric", month:"short", year:"numeric" })}
            </div>
          </div>
        </div>

        <div style={{ padding:"32px" }}>

          {/* ══ DASHBOARD ══════════════════════════════ */}
          {tab === "dashboard" && (
            <>
              {/* Stat cards */}
              <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:16, marginBottom:32 }}>
                {[
                  { label:"Total Revenue", value:`₹${totalRevenue.toLocaleString()}`, sub:"From delivered orders",   icon:"💰", color:G.gold },
                  { label:"Total Orders",  value:totalOrders,                         sub:`${pendingOrders} pending`, icon:"📦", color:"#64B5F6" },
                  { label:"Customers",     value:totalCustomers,                      sub:"Unique buyers",            icon:"👥", color:"#81C784" },
                  { label:"Products",      value:products.length,                     sub:`${products.reduce((s,p)=>s+p.stock,0)} in stock`, icon:"🧴", color:"#CE93D8" },
                ].map(s => (
                  <div key={s.label} className="stat-card" style={{ ...cardStyle, cursor:"default" }}>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:12 }}>
                      <div style={{ fontSize:10, letterSpacing:2, color:G.muted, textTransform:"uppercase" }}>{s.label}</div>
                      <span style={{ fontSize:22 }}>{s.icon}</span>
                    </div>
                    <div style={{ fontFamily:"Playfair Display,serif", fontSize:32, color:s.color, marginBottom:6 }}>{s.value}</div>
                    <div style={{ fontSize:11, color:G.muted }}>{s.sub}</div>
                  </div>
                ))}
              </div>

              {/* Charts row */}
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20, marginBottom:24 }}>
                <div style={cardStyle}>
                  <div style={{ fontSize:12, letterSpacing:2, color:G.gold, textTransform:"uppercase", marginBottom:20 }}>Orders by Channel</div>
                  {["WhatsApp","Instagram","Website"].map(ch => {
                    const count = orders.filter(o => o.channel === ch).length;
                    const pct = Math.round(count / orders.length * 100);
                    return (
                      <div key={ch} style={{ marginBottom:16 }}>
                        <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6 }}>
                          <span style={{ fontSize:13 }}>{ch}</span>
                          <span style={{ fontSize:13, color:G.gold }}>{count} orders ({pct}%)</span>
                        </div>
                        <div style={{ height:4, background:"rgba(201,169,110,0.1)", borderRadius:2 }}>
                          <div style={{ height:"100%", width:`${pct}%`, background:G.gold, borderRadius:2, transition:"width .5s ease" }}/>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div style={cardStyle}>
                  <div style={{ fontSize:12, letterSpacing:2, color:G.gold, textTransform:"uppercase", marginBottom:20 }}>Top Products</div>
                  {[...products].sort((a,b) => b.sold - a.sold).map(p => (
                    <div key={p.id} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"10px 0", borderBottom:`1px solid ${G.border}` }}>
                      <div>
                        <div style={{ fontSize:13 }}>{p.name}</div>
                        <div style={{ fontSize:11, color:G.muted }}>{p.size}</div>
                      </div>
                      <div style={{ textAlign:"right" }}>
                        <div style={{ fontSize:13, color:G.gold }}>₹{(p.sold * p.price).toLocaleString()}</div>
                        <div style={{ fontSize:11, color:G.muted }}>{p.sold} sold</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent orders */}
              <div style={cardStyle}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
                  <div style={{ fontSize:12, letterSpacing:2, color:G.gold, textTransform:"uppercase" }}>Recent Orders</div>
                  <button className="btn-outline" style={{ padding:"6px 16px", fontSize:10, letterSpacing:1 }} onClick={() => setTab("orders")}>View All</button>
                </div>
                <table style={{ width:"100%", borderCollapse:"collapse" }}>
                  <thead>
                    <tr>{["Order ID","Customer","Product","Amount","Status"].map(h => <th key={h} style={thStyle}>{h}</th>)}</tr>
                  </thead>
                  <tbody>
                    {orders.slice(0,4).map(o => (
                      <tr key={o.id} className="row-hover" style={{ cursor:"pointer" }} onClick={() => setTab("orders")}>
                        <td style={tdStyle}><span style={{ color:G.gold, fontWeight:500 }}>{o.id}</span></td>
                        <td style={tdStyle}>{o.customer}</td>
                        <td style={tdStyle}>{o.product}</td>
                        <td style={tdStyle}><span style={{ color:G.gold }}>₹{o.amount}</span></td>
                        <td style={tdStyle}><StatusBadge status={o.status}/></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* ══ ORDERS ═════════════════════════════════ */}
          {tab === "orders" && (
            <>
              <div style={{ display:"flex", gap:12, marginBottom:24, flexWrap:"wrap" }}>
                <input placeholder="Search orders..." value={search} onChange={e => setSearch(e.target.value)} style={{ maxWidth:260 }}/>
                <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} style={{ maxWidth:160 }}>
                  {["all","Pending","Shipped","Delivered","Cancelled"].map(s => (
                    <option key={s} value={s}>{s === "all" ? "All Status" : s}</option>
                  ))}
                </select>
                <div style={{ marginLeft:"auto", fontSize:12, color:G.muted, alignSelf:"center" }}>{filtered.length} orders</div>
              </div>
              <div style={cardStyle}>
                <table style={{ width:"100%", borderCollapse:"collapse" }}>
                  <thead>
                    <tr>{["Order ID","Date","Customer","City","Product","Qty","Amount","Channel","Status","Actions"].map(h => <th key={h} style={thStyle}>{h}</th>)}</tr>
                  </thead>
                  <tbody>
                    {filtered.map(o => (
                      <tr key={o.id} className="row-hover">
                        <td style={tdStyle}><span style={{ color:G.gold, fontWeight:500 }}>{o.id}</span></td>
                        <td style={tdStyle}>{o.date}</td>
                        <td style={{ ...tdStyle, fontWeight:500 }}>{o.customer}</td>
                        <td style={tdStyle}>{o.city}</td>
                        <td style={tdStyle}>{o.product}</td>
                        <td style={tdStyle}>{o.qty}</td>
                        <td style={{ ...tdStyle, color:G.gold, fontWeight:500 }}>₹{o.amount}</td>
                        <td style={tdStyle}><span style={{ fontSize:11, color:G.muted }}>{o.channel}</span></td>
                        <td style={tdStyle}>
                          {editingOrder === o.id
                            ? <select defaultValue={o.status} onChange={e => updateStatus(o.id, e.target.value)} style={{ width:"auto", fontSize:11, padding:"4px 8px" }}>
                                {["Pending","Shipped","Delivered","Cancelled"].map(s => <option key={s} value={s}>{s}</option>)}
                              </select>
                            : <span style={{ cursor:"pointer" }} onClick={() => setEditingOrder(o.id)}><StatusBadge status={o.status}/></span>
                          }
                        </td>
                        <td style={tdStyle}>
                          <div style={{ display:"flex", gap:8 }}>
                            <button style={{ background:"none", border:`1px solid ${G.border}`, color:G.gold, padding:"4px 10px", cursor:"pointer", fontSize:11 }}
                              onClick={() => window.open(`https://wa.me/${o.phone}?text=Hi ${o.customer}, your Scent Trial order ${o.id} update...`)}>
                              💬
                            </button>
                            <button style={{ background:"none", border:"1px solid rgba(244,67,54,0.3)", color:"#E57373", padding:"4px 10px", cursor:"pointer", fontSize:11 }}
                              onClick={() => deleteOrder(o.id)}>
                              🗑
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* ══ PRODUCTS ═══════════════════════════════ */}
          {tab === "products" && (
            <>
              <div style={{ display:"flex", justifyContent:"flex-end", marginBottom:24 }}>
                <button className="btn-gold" style={{ padding:"11px 28px", fontSize:10, letterSpacing:2 }} onClick={openAddProduct}>
                  + Add Product
                </button>
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16 }}>
                {products.map(p => (
                  <div key={p.id} className="prod-card" style={{ ...cardStyle, cursor:"default" }}>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:16 }}>
                      <div>
                        <div style={{ fontFamily:"Playfair Display,serif", fontSize:20, marginBottom:4 }}>{p.name}</div>
                        <div style={{ fontSize:11, color:G.muted }}>{p.size}</div>
                      </div>
                      <span style={{ fontFamily:"Playfair Display,serif", fontSize:24, color:G.gold }}>₹{p.price}</span>
                    </div>
                    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:20 }}>
                      {[
                        ["In Stock",    p.stock,                         p.stock < 20 ? "#E57373" : G.green],
                        ["Units Sold",  p.sold,                          G.gold],
                        ["Revenue",     `₹${(p.sold*p.price).toLocaleString()}`, G.cream],
                      ].map(([label, val, color]) => (
                        <div key={label} style={{ background:"rgba(201,169,110,0.05)", padding:"10px 12px", border:`1px solid ${G.border}` }}>
                          <div style={{ fontSize:10, color:G.muted, letterSpacing:1, textTransform:"uppercase", marginBottom:4 }}>{label}</div>
                          <div style={{ fontSize:18, color, fontFamily:"Playfair Display,serif" }}>{val}</div>
                        </div>
                      ))}
                    </div>
                    {p.stock < 20 && (
                      <div style={{ fontSize:11, color:"#E57373", marginBottom:12, padding:"6px 10px", background:"rgba(244,67,54,0.08)", border:"1px solid rgba(244,67,54,0.2)" }}>
                        ⚠ Low stock warning
                      </div>
                    )}
                    <div style={{ display:"flex", gap:8 }}>
                      <button className="btn-outline" style={{ flex:1, padding:"8px", fontSize:10, letterSpacing:1 }} onClick={() => openEditProduct(p)}>✏ Edit</button>
                      <button style={{ background:"none", border:"1px solid rgba(244,67,54,0.3)", color:"#E57373", padding:"8px 14px", cursor:"pointer", fontSize:11, transition:"all .2s" }} onClick={() => deleteProduct(p.id)}>🗑</button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* ══ CUSTOMERS ══════════════════════════════ */}
          {tab === "customers" && (
            <div style={cardStyle}>
              <div style={{ fontSize:12, letterSpacing:2, color:G.gold, textTransform:"uppercase", marginBottom:20 }}>All Customers</div>
              <table style={{ width:"100%", borderCollapse:"collapse" }}>
                <thead>
                  <tr>{["Customer","Phone","City","Orders","Total Spent","Last Order","Action"].map(h => <th key={h} style={thStyle}>{h}</th>)}</tr>
                </thead>
                <tbody>
                  {Object.values(
                    orders.reduce((acc, o) => {
                      if (!acc[o.phone]) acc[o.phone] = { name:o.customer, phone:o.phone, city:o.city, orders:0, spent:0, last:o.date };
                      acc[o.phone].orders++;
                      acc[o.phone].spent += o.amount;
                      if (o.date > acc[o.phone].last) acc[o.phone].last = o.date;
                      return acc;
                    }, {})
                  ).map(c => (
                    <tr key={c.phone} className="row-hover">
                      <td style={{ ...tdStyle, fontWeight:500 }}>{c.name}</td>
                      <td style={tdStyle}>{c.phone}</td>
                      <td style={tdStyle}>{c.city}</td>
                      <td style={tdStyle}>{c.orders}</td>
                      <td style={{ ...tdStyle, color:G.gold }}>₹{c.spent}</td>
                      <td style={tdStyle}>{c.last}</td>
                      <td style={tdStyle}>
                        <button style={{ background:"none", border:`1px solid ${G.border}`, color:G.gold, padding:"4px 10px", cursor:"pointer", fontSize:11 }}
                          onClick={() => window.open(`https://wa.me/${c.phone}?text=Hi ${c.name}, thank you for shopping with Scent Trial! 🌟`)}>
                          💬 WhatsApp
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* ══ ANALYTICS ══════════════════════════════ */}
          {tab === "analytics" && (
            <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:20 }}>
              <div style={cardStyle}>
                <div style={{ fontSize:12, letterSpacing:2, color:G.gold, textTransform:"uppercase", marginBottom:20 }}>Revenue by Product</div>
                {products.map(p => {
                  const rev   = p.sold * p.price;
                  const total = products.reduce((s, pp) => s + pp.sold * pp.price, 0);
                  const pct   = total ? Math.round(rev / total * 100) : 0;
                  return (
                    <div key={p.id} style={{ marginBottom:18 }}>
                      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:7 }}>
                        <span style={{ fontSize:13 }}>{p.name} <span style={{ color:G.muted, fontSize:11 }}>({p.size})</span></span>
                        <span style={{ fontSize:13, color:G.gold }}>₹{rev.toLocaleString()} ({pct}%)</span>
                      </div>
                      <div style={{ height:6, background:"rgba(201,169,110,0.1)", borderRadius:3 }}>
                        <div style={{ height:"100%", width:`${pct}%`, background:"linear-gradient(to right,#9A7A45,#C9A96E)", borderRadius:3, transition:"width .6s ease" }}/>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div style={cardStyle}>
                <div style={{ fontSize:12, letterSpacing:2, color:G.gold, textTransform:"uppercase", marginBottom:20 }}>Order Status Breakdown</div>
                {["Delivered","Shipped","Pending","Cancelled"].map(s => {
                  const count = orders.filter(o => o.status === s).length;
                  const pct   = Math.round(count / orders.length * 100);
                  return (
                    <div key={s} style={{ marginBottom:16 }}>
                      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6 }}>
                        <StatusBadge status={s}/>
                        <span style={{ fontSize:13, color:G.cream }}>{count} ({pct}%)</span>
                      </div>
                      <div style={{ height:5, background:"rgba(255,255,255,0.05)", borderRadius:2 }}>
                        <div style={{ height:"100%", width:`${pct}%`, background:STATUS_COLORS[s]?.color, borderRadius:2, opacity:0.8 }}/>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div style={{ ...cardStyle, gridColumn:"1/-1" }}>
                <div style={{ fontSize:12, letterSpacing:2, color:G.gold, textTransform:"uppercase", marginBottom:20 }}>100 Customers Challenge — Progress</div>
                <div style={{ marginBottom:12 }}>
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:8 }}>
                    <span style={{ fontSize:14 }}>Customers Acquired</span>
                    <span style={{ fontSize:14, color:G.gold }}>{totalCustomers} / 100</span>
                  </div>
                  <div style={{ height:10, background:"rgba(201,169,110,0.1)", borderRadius:5 }}>
                    <div style={{ height:"100%", width:`${totalCustomers}%`, background:"linear-gradient(to right,#9A7A45,#E8D5A3)", borderRadius:5, transition:"width .8s ease" }}/>
                  </div>
                  <div style={{ fontSize:11, color:G.muted, marginTop:8 }}>{100 - totalCustomers} more customers to go! Keep pushing 🚀</div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* ── Add / Edit Product Modal ───────────────── */}
      {modalOpen && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.8)", zIndex:300, display:"flex", alignItems:"center", justifyContent:"center", backdropFilter:"blur(8px)" }}
          onClick={() => setModalOpen(false)}>
          <div style={{ background:"#111008", border:`1px solid ${G.border}`, padding:"36px 40px", width:400, animation:"slideUp .3s ease" }}
            onClick={e => e.stopPropagation()}>
            <div style={{ display:"flex", justifyContent:"space-between", marginBottom:24 }}>
              <h3 style={{ fontFamily:"Playfair Display,serif", fontSize:22, fontWeight:400 }}>{editProduct ? "Edit Product" : "Add Product"}</h3>
              <button onClick={() => setModalOpen(false)} style={{ background:"none", border:"none", color:G.muted, fontSize:22, cursor:"pointer" }}>×</button>
            </div>
            {[
              ["Product Name",       "name",  "text"],
              ["Size (e.g. 30ml)",   "size",  "text"],
              ["Price (₹)",          "price", "number"],
              ["Stock Quantity",     "stock", "number"],
            ].map(([label, key, type]) => (
              <div key={key} style={{ marginBottom:16 }}>
                <div style={{ fontSize:10, letterSpacing:2, color:G.muted, textTransform:"uppercase", marginBottom:6 }}>{label}</div>
                <input
                  type={type}
                  value={newProduct[key]}
                  onChange={e => setNewProduct(p => ({ ...p, [key]: e.target.value }))}
                  placeholder={label}
                />
              </div>
            ))}
            <div style={{ display:"flex", gap:10, marginTop:24 }}>
              <button className="btn-gold" style={{ flex:1, padding:"12px", fontSize:11, letterSpacing:2 }} onClick={saveProduct}>
                {editProduct ? "Save Changes" : "Add Product"}
              </button>
              <button className="btn-outline" style={{ padding:"12px 20px", fontSize:11 }} onClick={() => setModalOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
