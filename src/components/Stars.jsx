export default function Stars({ n = 5, size = 13 }) {
  return <span style={{ color: "#C9A96E", fontSize: size, letterSpacing: 1 }}>{"★".repeat(Math.floor(n))}{"☆".repeat(5 - Math.floor(n))}</span>;
}
