import { useEffect, useState } from "react"
import { getAllAlumnos } from "../../api/alumnos.api"
import { useNavigate} from "react-router"
import "../../style/SecretarioCss/AlumnosList.css"
import Perfil from "../../components/perfil";



function AlumnoList() {

    const navigate = useNavigate()

    const [alumnos, setAlumnos] = useState([]);
    useEffect(() => {
        async function loadAlumnos() {
            const res = await getAllAlumnos();
            setAlumnos(res.data); 
        }
        loadAlumnos();
    }, []);

    return (
    <div className="centrar">
      <Perfil/>
      <div className="cabezera">
            <div id="boton-volver">
              <a href="/secretario" className="boton">Volver</a>
            </div>
            <h1 id="listar-alumno">Lista de Alumnos</h1>
            <a href="/ListaAlumno-create" className="boton" >Añadir alumno</a>
            <div id="tutor-boton">
              <a href="/RegistrarTutor" className="boton">Añadir Tutor</a>
            </div>
      </div>
      <table id="tabla">
          {/* Cabezera */}
        <thead>
          <tr>
            <th>
              <label>DNI:</label>
              <input type="text"/>
            </th>
            <th>
              <label>Nombre:</label>
              <input type="text"/>
            </th>
            <th>
              <label>Apellido:</label>
              <input type="text"/>
            </th>
            <th>
              <label>Grado:</label>
              <select name="Grados">
                <option value="1">1ro</option>
                <option value="2">2do</option>
                <option value="3">3ro</option>
                <option value="4">4to</option>
                <option value="5">5to</option>
              </select>
            </th>
            <th className="centrar">Acciones</th>
            <th>
              <button id="boton-search">
                    search  
              </button>
            </th>
          </tr>
        </thead>
          {/* Empieza la lista de alumnos */}
        <tbody>
          {alumnos.map((alumno) => (
            <tr key={alumno.dni_alumno}>
              <td>{alumno.dni_alumno}</td>
              <td>{alumno.nombre_alumno}</td>
              <td>{alumno.apellido_alumno}</td>
              <td>{alumno.grado}</td>
              <td>
                  <div id="botones-th"> 
                    <button onClick={() => navigate("/DetalleAlumno/" + alumno.dni_alumno)} className="boton">Ver Datos</button>
                    <button onClick={() => navigate("/ModificarAlumno/" + alumno.dni_alumno)} className="boton">Modificar</button>
                    <button onClick={() => navigate("/EliminarAlumno/" + alumno.dni_alumno)} className="boton">Eliminar</button>
                  </div>
              </td>
            </tr>
          ))} 
        </tbody>
      </table>
    </div>   
  )
}

export default AlumnoList;