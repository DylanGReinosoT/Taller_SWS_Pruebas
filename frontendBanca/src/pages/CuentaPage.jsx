import { useState } from 'react';
import { obtenerSocio } from '../services/socios.service';
import { crearCuenta } from '../services/cuentas.service';
import '../styles/CuentaPage.css';

export default function CrearCuenta({ onNavigate }) {
  const [formData, setFormData] = useState({
    socioId: '',
    numeroCuenta: '',
    saldo: '',
    tipoCuenta: 'AHORRO'
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCargando(true);
    setMensaje('');

    try {
      // Validar campos
      if (!formData.socioId.trim()) {
        setMensaje('El ID del socio es obligatorio');
        setTipoMensaje('error');
        setCargando(false);
        return;
      }

      if (!formData.numeroCuenta.trim()) {
        setMensaje('El número de cuenta es obligatorio');
        setTipoMensaje('error');
        setCargando(false);
        return;
      }

      if (!formData.saldo || parseFloat(formData.saldo) < 0) {
        setMensaje('El saldo debe ser un número válido y no negativo');
        setTipoMensaje('error');
        setCargando(false);
        return;
      }

      // Verificar que el socio existe y está activo
      const socio = await obtenerSocio(formData.socioId);

      if (!socio.activo) {
        setMensaje('El socio está inactivo');
        setTipoMensaje('error');
        setCargando(false);
        return;
      }

      // Crear la cuenta
      await crearCuenta({
        socioId: formData.socioId,
        numeroCuenta: formData.numeroCuenta,
        saldo: parseFloat(formData.saldo),
        tipoCuenta: formData.tipoCuenta
      });

      setMensaje('Cuenta creada correctamente');
      setTipoMensaje('exito');

      // Limpiar formulario
      setFormData({
        socioId: '',
        numeroCuenta: '',
        saldo: '',
        tipoCuenta: 'AHORRO'
      });

      // Redirigir a home después de 2 segundos
      setTimeout(() => {
        onNavigate('home');
      }, 2000);
    } catch (error) {
      setMensaje(error.response?.data?.message || 'Error al crear la cuenta');
      setTipoMensaje('error');
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="container-cuenta">
      <div className="formulario-wrapper">
        <div className="header-form">
          <button 
            className="btn-volver"
            onClick={() => onNavigate('home')}
          >
            ← Volver
          </button>
          <h2>Crear Nueva Cuenta</h2>
        </div>

        <form onSubmit={handleSubmit} className="formulario">
          <div className="grupo-campo">
            <label htmlFor="socioId">ID del Socio *</label>
            <input
              id="socioId"
              type="text"
              name="socioId"
              placeholder="Ej: 123e4567-e89b-12d3-a456-426614174000"
              value={formData.socioId}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div className="grupo-campo">
            <label htmlFor="numeroCuenta">Número de Cuenta *</label>
            <input
              id="numeroCuenta"
              type="text"
              name="numeroCuenta"
              placeholder="Ej: 001-123456789"
              value={formData.numeroCuenta}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div className="grupo-campo">
            <label htmlFor="saldo">Saldo Inicial ($) *</label>
            <input
              id="saldo"
              type="number"
              name="saldo"
              placeholder="Ej: 1000"
              value={formData.saldo}
              onChange={handleChange}
              className="input-field"
              step="0.01"
              min="0"
            />
          </div>

          <div className="grupo-campo">
            <label htmlFor="tipoCuenta">Tipo de Cuenta *</label>
            <select
              id="tipoCuenta"
              name="tipoCuenta"
              value={formData.tipoCuenta}
              onChange={handleChange}
              className="input-field"
            >
              <option value="AHORRO">Ahorro</option>
              <option value="CORRIENTE">Corriente</option>
            </select>
          </div>

          <button
            type="submit"
            className="btn-crear"
            disabled={cargando}
          >
            {cargando ? 'Creando...' : 'Crear Cuenta'}
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