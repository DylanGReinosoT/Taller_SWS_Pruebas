import { useState } from 'react';
import Home from "./pages/Home";
import CrearSocio from "./pages/CrearSocio";
import CrearCuenta from "./pages/CuentaPage";
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="app-container">
      {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
      {currentPage === 'crear-socio' && <CrearSocio onNavigate={handleNavigate} />}
      {currentPage === 'crear-cuenta' && <CrearCuenta onNavigate={handleNavigate} />}
    </div>
  );
}

export default App
