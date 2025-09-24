import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  loginUser,
  registerUser,
  saveUserData,
} from "../api/auth.api"; // uso de la api
import "../style/login.css";


function Login({onSuccess}) {
  const navigate = useNavigate();
  const [activeForm, setActiveForm] = useState("login");

  // Estados para login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Estados para registro
  const [name, setName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");

  // Estado para errores/mensajes
  const [message, setMessage] = useState("");

  // Manejo de Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(email, password);
      console.log("Login response:", data);
      //se guarda token y el rol en localstorage
      saveUserData(data);

      //redirigir segun el rol
      const rol =(data.rol || "").toLowerCase();
      if (rol === "tutor") { navigate("/tutor"); onSuccess && onSuccess();
      } else if (rol === "secretario") { navigate("/secretario"); onSuccess && onSuccess();
      } else if (rol === "profesor") { navigate("/profesor"); onSuccess && onSuccess();
      }
    } catch (error) {
      console.error(error);
      setMessage(error?.response?.data?.message || "Error al iniciar sesión");
    }
  };
  // Manejo de Registro
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser(name, regEmail, regPassword);
      setMessage(" Registro exitoso, ahora puedes iniciar sesión");
      setActiveForm("login");
    } catch (error) {
      console.error(error);
      setMessage(" Error al registrar usuario");
    }
  };

  return (
    <body>
    <div className="login-page">
      <div className="login-container">
        {/* Panel lateral */}
        <div className="login-sidebar">
          <h2>{activeForm === "login" ? "Iniciar Sesión" : "Registrarse"}</h2>
        </div>

        {/* Formulario principal */}
        <div className="login-form">
          {/* Tabs */}
          <div className="tabs">
            <button
              className={activeForm === "login" ? "active" : ""}
              onClick={() => setActiveForm("login")}
            >
              Iniciar Sesión
            </button>
            <button
              className={activeForm === "register" ? "active" : ""}
              onClick={() => setActiveForm("register")}
            >
              Registrarse
            </button>
          </div>

          {/* Mostrar mensajes */}
          {message && <p style={{ color: "white" }}>{message}</p>}

          {/* Contenido dinámico */}
          {activeForm === "login" ? (
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button className="btn-green" type="submit" >
                Entrar
              </button>
            </form>
          ) : (
            <form onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="Nombre completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={regPassword}
                onChange={(e) => setRegPassword(e.target.value)}
                required
              />
              <button className="btn-green" type="submit">
                Registrarme
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
    </body>
  );
}

export default Login;
