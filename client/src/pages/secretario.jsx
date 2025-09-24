import Final from "../components/final";
import "../style/home.css"
import Navbar from "../components/navbar";
function Secretario() {
  return (
    <div>
      <Navbar />
      <div className="saludo">
          <h2>Bienvenido al Instituto Jean Piaget</h2>
          <p>Brindamos educación secundaria de calidad.</p>
      </div>
      <div id="mover">
            <a href="/ListaAlumno-create" className="boton">Registrar Estudiante</a>  
            <a href="/ListaAlumno" className="boton">Modificar Alumno</a>
            <a href="/RegistrarTutor" className="boton">Registrar Tutor</a>
      </div>
      <Final />
    </div>
  );
}

export default Secretario;