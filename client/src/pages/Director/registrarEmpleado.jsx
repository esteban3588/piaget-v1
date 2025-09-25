import { useEffect, useState } from "react";
import { crearEmpleado, listarRoles } from "../../api/empleados.api";
import Perfil from "../../components/perfil";
import "../../style/directorCss/RegistrarEmpleado.css"
function RegistrarEmpleado() {
  const [empleado, setEmpleado] = useState({
    dni_empleado: "",
    nombre_empleado: "",
    apellido_empleado: "",
    telefono_empleado: "",
    correo_empleado: "",
    genero_empleado: "",
    id_rol: "",
  });

  const [roles, setRoles] = useState([]);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    listarRoles()
      .then((res) => {
        console.log("Roles recibidos:", res.data);
        setRoles(res.data);
      })
      .catch((err) => console.error("Error cargando roles", err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmpleado({
      ...empleado,
      [name]:
        name === "dni_empleado" || name === "id_rol"
          ? Number(value)
          : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !empleado.dni_empleado ||
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

    try {
      await crearEmpleado(empleado);
      setMensaje("Empleado registrado con éxito");
      setEmpleado({
        dni_empleado: "",
        nombre_empleado: "",
        apellido_empleado: "",
        telefono_empleado: "",
        correo_empleado: "",
        genero_empleado: "",
        id_rol: "",
      });
    } catch (err) {
      console.error("Error al crear empleado:", err.response?.data || err);
      setMensaje("Error al registrar empleado. Revisa los datos.");
    }
  };

  return (
    <div id="registrar-empleado">
      <Perfil />
      <h2 id="titulo-form">Registrar Empleado</h2>
      {mensaje && <p id="mensaje">{mensaje}</p>}
      <form id="form-empleado" onSubmit={handleSubmit}>
        <input
          id="dni-empleado"
          type="number"
          name="dni_empleado"
          placeholder="DNI"
          value={empleado.dni_empleado}
          onChange={handleChange}
        />
        <input
          id="nombre-empleado"
          type="text"
          name="nombre_empleado"
          placeholder="Nombre"
          value={empleado.nombre_empleado}
          onChange={handleChange}
        />
        <input
          id="apellido-empleado"
          type="text"
          name="apellido_empleado"
          placeholder="Apellido"
          value={empleado.apellido_empleado}
          onChange={handleChange}
        />
        <input
          id="telefono-empleado"
          type="text"
          name="telefono_empleado"
          placeholder="Teléfono"
          value={empleado.telefono_empleado}
          onChange={handleChange}
        />
        <input
          id="correo-empleado"
          type="email"
          name="correo_empleado"
          placeholder="Correo"
          value={empleado.correo_empleado}
          onChange={handleChange}
        />

        {/* Selección de género */}
        <select
          id="genero-empleado"
          name="genero_empleado"
          value={empleado.genero_empleado}
          onChange={handleChange}
        >
          <option value="">Seleccione género</option>
          <option value="M">Masculino</option>
          <option value="F">Femenino</option>
          <option value="O">Otro</option>
        </select>

        {/* Selección de rol */}
        <select
          id="rol-empleado"
          name="id_rol"
          value={empleado.id_rol || ""}
          onChange={handleChange}
        >
          <option value="">Seleccione un rol</option>
          {roles.map((rol) => (
            <option key={rol.id_rol} value={rol.id_rol}>
              {rol.nombre_rol}
            </option>
          ))}
        </select>

        <div id="acciones-form">
          <button id="btn-registrar" type="submit">Registrar</button>
          <a id="btn-volver" href="/Director">Volver</a>
        </div>
      </form>
    </div>
  );
}

export default RegistrarEmpleado;
