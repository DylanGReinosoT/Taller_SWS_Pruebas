import { useState } from 'react';
import '../styles/Home.css';

export default function Home({ onNavigate }) {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Bienvenido al Sistema Bancario</h1>
        <p>Gestiona socios y cuentas de forma segura y eficiente</p>
      </div>

      <div className="cards-container">
        <div className="card">
          <div className="card-icon">👥</div>
          <h2>Crear Socio</h2>
          <p>Registra un nuevo socio en el sistema con todos sus datos personales</p>
          <button 
            className="card-button"
            onClick={() => onNavigate('crear-socio')}
          >
            Ir a Crear Socio
          </button>
        </div>

        <div className="card">
          <div className="card-icon">💳</div>
          <h2>Crear Cuenta</h2>
          <p>Abre una nueva cuenta bancaria para un socio existente</p>
          <button 
            className="card-button"
            onClick={() => onNavigate('crear-cuenta')}
          >
            Ir a Crear Cuenta
          </button>
        </div>
      </div>

      <div className="info-section">
        <h3>Características Principales</h3>
        <ul>
          <li>✓ Gestión completa de socios</li>
          <li>✓ Creación y administración de cuentas</li>
          <li>✓ Validación de datos en tiempo real</li>
          <li>✓ Interfaz segura y amigable</li>
          <li>✓ Integración con API bancaria</li>
        </ul>
      </div>
    </div>
  );
}
