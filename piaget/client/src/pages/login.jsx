import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  loginUser,
  registerUser,
  saveUserData,
} from "../api/auth.api";
import "../style/login.css";
import showIcon from "../style/logos_e_imagenes/show.svg";
import hideIcon from "../style/logos_e_imagenes/hide.svg";


function Login({ onSuccess }) {
  const navigate = useNavigate();
  const [activeForm, setActiveForm] = useState("login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword, ] = useState("");
  const [regConfirmPassword, setRegConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(email, password);

       // Guardar el usuario en localStorage
    localStorage.setItem("usuario", JSON.stringify({
      username: data.name || data.username || "Usuario",
      rol: data.rol
    }));
      saveUserData(data);

      const rol = (data.rol || "").toLowerCase();
      if (rol === "tutor") {
        navigate("/tutor");
        onSuccess && onSuccess();
      } else if (rol === "secretario") {
        navigate("/secretario");
        onSuccess && onSuccess();
      } else if (rol === "profesor") {
        navigate("/profesor");
        onSuccess && onSuccess();
      } else if (rol === "director") {
        navigate("/director");
        onSuccess && onSuccess();
      } else if (rol === "rector") {
        navigate("/rector");
        onSuccess && onSuccess();
      }
    } catch (error) {
      setMessage(error?.response?.data?.message || "Error al iniciar sesión");
    }
  };

  const handleRegister = async (e) => {
  e.preventDefault();

  if (regPassword !== regConfirmPassword) {
    setMessage("Las contraseñas no coinciden");
    return;
  }

  try {
    await registerUser(name, regEmail, regPassword);
    setMessage("Registro exitoso, ahora puedes iniciar sesión");
    setActiveForm("login");
  } catch (error) {
    setMessage("Error al registrar usuario");
    console.error(error);
    setMessage(error.message);
  }
};

  return (
    <div className="login-page">
      <div className="login-card-row">
        {/* Columna izquierda */}
        <div className="login-left">
          <div className="login-institute">
            <img src="https://iili.io/KTpR0j1.png" alt="Logo Instituto" className="logo" />
              <h2>Instituto Jean Piaget</h2>
                <p className="institute-number">N°8048</p>
          </div>
        </div>
        

        {/* Columna derecha */}
        <div className="login-right">
          <div className="login-header">
            {activeForm === "login" ? "Iniciar Sesión" : "Registrarse"}
          </div>

          {message && <p className="message">{message}</p>}

          {activeForm === "login" ? (
            <form onSubmit={handleLogin} className="login-form">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label>Contraseña</label>
              <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <img
                    src={showPassword ? showIcon : hideIcon}
                    alt={showPassword ? "Mostrar" : "Ocultar"}
                    className={"eye-icon" + (showPassword ? " show " : "")}
                  />
                </button>
              </div>

              <button type="submit" className="btn-red">
                Ingresar
              </button>

              <div className="divider"></div>
              <p className="register-text">O puedes registrarte</p>
              <button
                type="button"
                className="btn-gray"
                onClick={() => setActiveForm("register")}
              >
                Registrarse
              </button>
            </form>
          ) : (
            <form onSubmit={handleRegister} className="login-form">
              <label>Nombre completo</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <label>Correo electrónico</label>
              <input
                type="email"
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
                required
              />

              <label>Contraseña</label>
              <input
                type="password"
                value={regPassword}
                onChange={(e) => setRegPassword(e.target.value)}
                required
              />
              <label>Confirmar Contraseña</label>
              <input
                type="password"
                value={regConfirmPassword}
                onChange={(e) => setRegConfirmPassword(e.target.value)}
                required
              />
              <button type="submit" className="btn-red">
                Registrarme
              </button>

              <div className="divider"></div>
              <button
                type="button"
                className="btn-gray"
                onClick={() => setActiveForm("login")}
              >
                Volver a Iniciar Sesión
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
