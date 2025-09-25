import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Perfil from "../../components/perfil";
import "../../style/directorCss/MostrarEmpleados.css"

function MostrarEmpleados() {
  const [empleados, setEmpleados] = useState([]);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/empleados/")
      .then((res) => setEmpleados(res.data))
      .catch((err) => {
        console.error("Error cargando empleados", err);
        setMensaje("No se pudieron cargar los empleados");
      });
  }, []);

  return (
    <div id="mostrar-empleados">
  <Perfil/>
  <h2>Lista de Empleados</h2>
  {mensaje && <p id="mensaje-empleados">{mensaje}</p>}

  <table id="tabla-empleados">
    <thead>
      <tr>
        <th>DNI</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Correo</th>
        <th>Teléfono</th>
        <th>Género</th>
        <th>Rol</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {empleados.map((e) => (
        <tr key={e.dni_empleado}>
          <td>{e.dni_empleado}</td>
          <td>{e.nombre_empleado}</td>
          <td>{e.apellido_empleado}</td>
          <td>{e.correo_empleado}</td>
          <td>{e.telefono_empleado}</td>
          <td>{e.genero_empleado}</td>
          <td>{e.rol_nombre}</td>
          <td>
            <Link to={`/empleados/modificar/${e.dni_empleado}`}>Modificar</Link>
          </td>
        </tr>
      ))}
    </tbody>
  </table>

  <div id="acciones-tabla">
    <a id="btn-volver" href="/Director">Volver</a>
  </div>
</div>
  );
}

export default MostrarEmpleados;
