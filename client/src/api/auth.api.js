import axios from "axios";

const API_URL = "http://localhost:8000/api"; // cambiar si se usa otro puerto o prefijo

//  Login
export const loginUser = async (email, password) => {
  const response = await axios.post(`${API_URL}/login/`, { email, password });
  return response.data; // devuelve { token, refresh }
};

//  Registro
export const registerUser = async (name, email, password) => {
  const response = await axios.post(`${API_URL}/register/`, {
    name,
    email,
    password,
  });
  return response.data; // devuelve mensaje de éxito
};

//  Guardar token en el almacenamiento local
export const saveToken = (token) => {
  localStorage.setItem("token", token);
};

//  Obtener token desde el almacenamiento local
export const getToken = () => {
  return localStorage.getItem("token");
};

//  cerrar sesión
export const logoutUser = () => {
  localStorage.removeItem("token");
};
