import axios from "axios";

const API_URL = "http://localhost:8000/api"; // cambiar según entorno

// Cliente Axios con Interceptor
const api = axios.create({
  baseURL: API_URL,
});

// Agregar token automáticamente en cada request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


// Manejo centralizado de errores
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const customError =
      error.response?.data?.message ||
      error.response?.data?.error || "Error en la conexión con el servidor";
    return Promise.reject(new Error(customError));
  }
);

// Funciones de Autenticación

// Login
export const loginUser = async (email, password) => {
  const response = await api.post("/login/", { email, password });
  console.log("Login response:", response.data);
  return response.data; // { token, refresh, rol, ... }
};

// Registro
export const registerUser = async (name, email, password) => {
  const response = await api.post("/register/", { name, email, password });
  console.log("Register response:", response.data);
  return response.data;
};

// Guardar token y datos del usuario
export const saveUserData = (data) => {
  localStorage.setItem("token", data.token);
  if (data.rol) localStorage.setItem("rol", data.rol);
  if (data.name) localStorage.setItem("name", data.name);
};

// Obtener token
export const getToken = () => localStorage.getItem("token");

// Obtener rol
export const getUserRole = () => localStorage.getItem("rol");

// Obtener nombre
export const getUserName = () => localStorage.getItem("name");

// Logout
export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("rol");
  localStorage.removeItem("name");
};


// Exportar cliente para otras llamadas

export default api;
