import { useState } from "react";
import "../style/login.css";

function Login() {
  const [activeForm, setActiveForm] = useState("login");

  return (
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

          {/* Contenido dinámico */}
          {activeForm === "login" ? (
            <form>
              <input type="email" placeholder="Correo electrónico" required />
              <input type="password" placeholder="Contraseña" required />
              <button className="btn-green" type="submit">
                Entrar
              </button>
            </form>
          ) : (
            <form>
              <input type="text" placeholder="Nombre completo" required />
              <input type="email" placeholder="Correo electrónico" required />
              <input type="password" placeholder="Contraseña" required />
              <button className="btn-green" type="submit">
                Registrarme
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
