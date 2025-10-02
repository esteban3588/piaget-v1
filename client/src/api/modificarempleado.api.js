import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/directores/empleados/";

export const listarRoles = () => axios.get("http://127.0.0.1:8000/api/directores/roles/");

export const actualizarEmpleado = (dni, empleado) =>
  axios.put(`${API_URL}${dni}/`, empleado);
