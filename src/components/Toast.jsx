export default function Toast({ toast }) {
  if (!toast) return null;
  return (
    <div style={{ position: "fixed", top: 88, right: 20, zIndex: 9999, background: toast.type === "error" ? "#1a0808" : "#0a1208", border: `1px solid ${toast.type === "error" ? "#E57373" : "#C9A96E"}`, padding: "12px 22px", color: "#FAF7F2", fontSize: 13, animation: "toastPop 0.35s ease", boxShadow: "0 16px 48px rgba(0,0,0,0.6)", maxWidth: 300, fontFamily: "Jost, sans-serif" }}>
      {toast.type === "error" ? "✗ " : "✓ "}{toast.msg}
    </div>
  );
}
