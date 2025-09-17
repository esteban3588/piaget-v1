import { useEffect, useState } from "react"
import { getAllAlumnos } from "../api/alumnos.api"
export function AlumnoList() {
    const [alumnos, setAlumnos] = useState([]);
    useEffect(() => {
        async function loadAlumnos() {
            const res = await getAllAlumnos();
            setAlumnos(res.data);
            console.log(res.data)
        }
        loadAlumnos();
    }, []);

    return (
    <div>
      Alumnos lista
      <table>
        <thead>
          <tr>
            <th>Dni</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Grado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((alumno) => (
            <tr key={alumno.dni_alumno}>
              <td>{alumno.dni_alumno}</td>
              <td>{alumno.nombre_alumno}</td>
              <td>{alumno.apellido_alumno}</td>
              <td>Aun falta</td>
              <td>falta</td>
            </tr>
          ))} 
        </tbody>
      </table>
    </div>
  )
}


