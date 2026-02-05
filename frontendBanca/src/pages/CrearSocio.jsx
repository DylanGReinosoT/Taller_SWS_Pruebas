import { useState } from 'react';
import { crearSocio } from '../services/socios.service';
import '../styles/CrearSocio.css';

export default function CrearSocio({ onNavigate }) {
  const [formData, setFormData] = useState({
    identificacion: '',
    nombres: '',
    apellidos: '',
    email: '',
    telefono: '',
    direccion: '',
    tipoIdentificacion: 'CEDULA'
  });
  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState('');
  const [cargando, setCargando] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validarEmail = (email) => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
  };

  const validarTelefono = (telefono) => {
    return /^\d{10}$/.test(telefono);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCargando(true);
    setMensaje('');

    try {
      // Validaciones
      if (!formData.identificacion.trim()) {
        setMensaje('La identificación es obligatoria');
        setTipoMensaje('error');
        setCargando(false);
        return;
      }

      if (!formData.nombres.trim()) {
        setMensaje('Los nombres son obligatorios');
        setTipoMensaje('error');
        setCargando(false);
        return;
      }

      if (!formData.apellidos.trim()) {
        setMensaje('Los apellidos son obligatorios');
        setTipoMensaje('error');
        setCargando(false);
        return;
      }

      if (!validarEmail(formData.email)) {
        setMensaje('El email no es válido');
        setTipoMensaje('error');
        setCargando(false);
        return;
      }

      if (!validarTelefono(formData.telefono)) {
        setMensaje('El teléfono debe tener 10 dígitos');
        setTipoMensaje('error');
        setCargando(false);
        return;
      }

      if (!formData.direccion.trim()) {
        setMensaje('La dirección es obligatoria');
        setTipoMensaje('error');
        setCargando(false);
        return;
      }

      // Crear socio
      await crearSocio({
        identificacion: formData.identificacion,
        nombres: formData.nombres,
        apellidos: formData.apellidos,
        email: formData.email,
        telefono: formData.telefono,
        direccion: formData.direccion,
        tipoIdentificacion: formData.tipoIdentificacion,
        activo: true
      });

      setMensaje('Socio creado correctamente');
      setTipoMensaje('exito');

      // Limpiar formulario
      setFormData({
        identificacion: '',
        nombres: '',
        apellidos: '',
        email: '',
        telefono: '',
        direccion: '',
        tipoIdentificacion: 'CEDULA'
      });

      // Redirigir a home después de 2 segundos
      setTimeout(() => {
        onNavigate('home');
      }, 2000);
    } catch (error) {
      setMensaje(error.response?.data?.message || 'Error al crear el socio');
      setTipoMensaje('error');
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="container-socio">
      <div className="formulario-wrapper-socio">
        <div className="header-form">
          <button 
            className="btn-volver"
            onClick={() => onNavigate('home')}
          >
            ← Volver
          </button>
          <h2>Crear Nuevo Socio</h2>
        </div>

        <form onSubmit={handleSubmit} className="formulario">
          <div className="row-campos">
            <div className="grupo-campo">
              <label htmlFor="identificacion">Identificación *</label>
              <input
                id="identificacion"
                type="text"
                name="identificacion"
                placeholder="Ej: 1712345678"
                value={formData.identificacion}
                onChange={handleChange}
                className="input-field"
              />
            </div>

            <div className="grupo-campo">
              <label htmlFor="tipoIdentificacion">Tipo de Identificación *</label>
              <select
                id="tipoIdentificacion"
                name="tipoIdentificacion"
                value={formData.tipoIdentificacion}
                onChange={handleChange}
                className="input-field"
              >
                <option value="CEDULA">Cédula</option>
                <option value="PASAPORTE">Pasaporte</option>
                <option value="RUC">RUC</option>
              </select>
            </div>
          </div>

          <div className="row-campos">
            <div className="grupo-campo">
              <label htmlFor="nombres">Nombres *</label>
              <input
                id="nombres"
                type="text"
                name="nombres"
                placeholder="Ej: Juan Carlos"
                value={formData.nombres}
                onChange={handleChange}
                className="input-field"
              />
            </div>

            <div className="grupo-campo">
              <label htmlFor="apellidos">Apellidos *</label>
              <input
                id="apellidos"
                type="text"
                name="apellidos"
                placeholder="Ej: Pérez González"
                value={formData.apellidos}
                onChange={handleChange}
                className="input-field"
              />
            </div>
          </div>

          <div className="row-campos">
            <div className="grupo-campo">
              <label htmlFor="email">Email *</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Ej: juan.perez@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="input-field"
              />
            </div>

            <div className="grupo-campo">
              <label htmlFor="telefono">Teléfono *</label>
              <input
                id="telefono"
                type="tel"
                name="telefono"
                placeholder="Ej: 0987654321"
                value={formData.telefono}
                onChange={handleChange}
                className="input-field"
                maxLength="10"
              />
            </div>
          </div>

          <div className="grupo-campo">
            <label htmlFor="direccion">Dirección *</label>
            <input
              id="direccion"
              type="text"
              name="direccion"
              placeholder="Ej: Av. Amazonas N23-45"
              value={formData.direccion}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <button
            type="submit"
            className="btn-crear-socio"
            disabled={cargando}
          >
            {cargando ? 'Creando...' : 'Crear Socio'}
          </button>
        </form>

        {mensaje && (
          <div className={`mensaje ${tipoMensaje}`}>
            {mensaje}
          </div>
        )}
      </div>
    </div>
  );
}
