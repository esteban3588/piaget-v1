import { useState } from "react";
import axios from "axios";
import Perfil from "../../components/perfil";
import "../../style/directorCss/RegistrarRol.css"
function RegistrarRol() {
  const [nombreRol, setNombreRol] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombreRol.trim()) {
      setMensaje("El nombre del rol es obligatorio");
      return;
    }

    try {
      await axios.post("http://127.0.0.1:8000/api/roles/", {
        nombre_rol: nombreRol.trim().toLowerCase(),
      });
      setMensaje("Rol registrado con éxito ");
      setNombreRol("");
    } catch (err) {
      if (err.response?.status === 400) {
        setMensaje("Ese rol ya existe ");
      } else {
        setMensaje("Error al registrar el rol ");
      }
      console.error("Error al registrar rol:", err.response?.data || err);
    }
  };

  return (
    <div>
       <Perfil/>
    <div id="registrar-rol">
 
  <h2>Registrar Rol</h2>
  {mensaje && <p id="mensaje-rol">{mensaje}</p>}
  
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Nombre del rol"
      value={nombreRol}
      onChange={(e) => setNombreRol(e.target.value)}
    />
    <button type="submit">Guardar</button>
  </form>
  
  <div id="boton-volver">
    <a href="/Director" className="boton">Volver</a>
  </div>
</div>
</div>
  );
}

export default RegistrarRol;
