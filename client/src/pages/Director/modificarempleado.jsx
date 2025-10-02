import { useEffect, useState } from "react";
import { actualizarEmpleado, listarRoles } from "../../api/empleados.api";
import { useParams, useNavigate } from "react-router-dom";
import SuccessModal from "../../components/confirmacio";
import Perfil from "../../components/perfil";
import "../../style/directorCss/ModificarEmpleado.css"
function ModificarEmpleado() {
  const { dni } = useParams(); 
  const navigate = useNavigate();

  const [empleado, setEmpleado] = useState({
    dni_empleado: "",
    nombre_empleado: "",
    apellido_empleado: "",
    telefono_empleado: "",
    correo_empleado: "",
    genero_empleado: "",
    id_rol: "",
    estado_empleado: "Activo",
  });

  const [roles, setRoles] = useState([]);
  const [mensaje, setMensaje] = useState("");

  // Cargar roles y datos del empleado
  useEffect(() => {
    listarRoles()
      .then((res) => setRoles(res.data))
      .catch((err) => console.error("Error cargando roles", err));

    // cargar datos del empleado por fetch directo
    fetch(`http://127.0.0.1:8000/api/directores/empleados/${dni}/`)
      .then((res) => res.json())
      .then((data) => setEmpleado(data))
      .catch((err) => console.error("Error cargando empleado", err));
  }, [dni]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmpleado({
      ...empleado,
      [name]:
        name === "id_rol"
          ? Number(value) // id_rol como número
          : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !empleado.nombre_empleado ||
      !empleado.apellido_empleado ||
      !empleado.telefono_empleado ||
      !empleado.correo_empleado ||
      !empleado.genero_empleado ||
      !empleado.id_rol
    ) {
      setMensaje("Todos los campos son obligatorios");
      return;
    }
    // Validación extra: si se intenta desactivar un director
    if (empleado.id_rol === 1 && empleado.estado_empleado === "Inactivo") {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/directores/empleados/?rol=1&estado=Activo");
        const data = await res.json();
        if (data.length <= 1) {
          setMensaje("Debe haber al menos un director activo");
          return; // evita desactivar al último director
        }
      } catch (err) {
        console.error("Error validando directores activos", err);
        setMensaje("Error al validar directores activos");
        return;
      }
    }

    try {
      await actualizarEmpleado(dni, empleado);
      setMensaje("Empleado actualizado con éxito");
      setTimeout(() => navigate("/director"), 1500); // redirigir
    } catch (err) {
      console.error("Error al actualizar empleado:", err.response?.data || err);
      setMensaje("Error al actualizar empleado");
    }
  };

  return (
    <div>
      <Perfil/>
    <div id="modificar-empleado">
  <h2>Modificar Empleado</h2>
  {mensaje && <p id="mensaje-modificar">{mensaje}</p>}

  <form onSubmit={handleSubmit}>
    <input type="number" name="dni_empleado" value={empleado.dni_empleado} disabled />
    <input type="text" name="nombre_empleado" placeholder="Nombre" value={empleado.nombre_empleado} onChange={handleChange} />
    <input type="text" name="apellido_empleado" placeholder="Apellido" value={empleado.apellido_empleado} onChange={handleChange} />
    <input type="text" name="telefono_empleado" placeholder="Teléfono" value={empleado.telefono_empleado} onChange={handleChange} />
    <input type="email" name="correo_empleado" placeholder="Correo" value={empleado.correo_empleado} disabled />

    <select name="genero_empleado" value={empleado.genero_empleado || ""} onChange={handleChange}>
      <option value="">Seleccione género</option>
      <option value="M">Masculino</option>
      <option value="F">Femenino</option>
      <option value="O">Otro</option>
    </select>

    <select name="id_rol" value={empleado.id_rol || ""} onChange={handleChange}>
      <option value="">Seleccione un rol</option>
      {roles.map((rol) => (
        <option key={rol.id_rol} value={rol.id_rol}>
          {rol.nombre_rol}
        </option>
      ))}
    </select>
      <select 
      name="estado_empleado" 
      value={empleado.estado_empleado || ""} 
      onChange={handleChange}
    >
      <option value="Activo">Activo</option>
      <option value="Inactivo">Inactivo</option>
    </select>
    <button id="boton-guardar" type="submit">Guardar Cambios</button>
  </form>

  <div id="boton-volver">
    <a href="/empleados" className="boton">Volver</a>
  </div>
</div>
</div>
  );
}

export default ModificarEmpleado;
