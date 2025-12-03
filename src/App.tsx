import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/home';
import Trade from './views/buy';
import './App.css';
import Wallet from './views/wallet';
import SendBitcoin from './views/send';
import Login from './views/login';
import AdminDashboard from './views/admin';
import ProtectedRoute from './components/protectedRoute';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/buying-selling" element={<ProtectedRoute><Trade /></ProtectedRoute>} />
        <Route path="/wallet" element={<ProtectedRoute><Wallet /></ProtectedRoute>} />
        <Route path="/send" element={<ProtectedRoute><SendBitcoin /></ProtectedRoute>} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
