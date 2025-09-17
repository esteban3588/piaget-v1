import { Link } from "react-router-dom"
import "../style/menu.css"
export function Navigation() {
  return (
    <div>
      <Link to="ListaAlumno"><h1>Navegacion</h1></Link>
      <Link to="/ListaAlumno-create">Crear Alumno</Link>
    </div>
  )
}


