// src/App.js — Routing
// Website:  http://localhost:3000
// Admin:    http://localhost:3000/admin
import ScentTrial     from './pages/ScentTrial';
import AdminDashboard from './pages/AdminDashboard';
function App() {
  return window.location.pathname === '/admin' ? <AdminDashboard /> : <ScentTrial />;
}
export default App;
