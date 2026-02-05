import axios from 'axios';

const API_SOCIOS = 'http://localhost:8080/api/socios';

export const obtenerSocio = async (id) => {
  const response = await axios.get(`${API_SOCIOS}/${id}`);
  return response.data;
};

export const crearSocio = async (socio) => {
  const response = await axios.post(API_SOCIOS, {
    id: socio.id,
    identificacion: socio.identificacion,
    nombres: socio.nombres,
    apellidos: socio.apellidos,
    email: socio.email,
    telefono: socio.telefono,
    direccion: socio.direccion,
    tipoIdentificacion: socio.tipoIdentificacion,
    activo: socio.activo,
    fechaCreacion: socio.fechaCreacion,
    fechaActualizacion: socio.fechaActualizacion
  });
  return response.data;
};