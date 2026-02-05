import axios from 'axios';

const API_CUENTAS = 'http://localhost:3000/cuentas';

export const obtenerCuenta = async (id) => {
  const response = await axios.get(`${API_CUENTAS}/${id}`);
  return response.data;
};

export const crearCuenta = async (cuenta) => {
  const response = await axios.post(API_CUENTAS, {
    socioId: cuenta.socioId,
    numeroCuenta: cuenta.numeroCuenta,
    saldo: cuenta.saldo,
    tipoCuenta: cuenta.tipoCuenta
  });
  return response.data;
};