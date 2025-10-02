import Perfil from "../../components/perfil";
import "../../style/SecretarioCss/home.css"

function Home() {
  return (
    <div>
      <Perfil/>
      <div className="saludo">
          <h2>Bienvenido al Instituto Jean Piaget</h2>
          <p>Brindamos educación secundaria de calidad.</p>
      </div>
      <div id="mover">
            <a href="/ListaAlumno-create" className="boton">Registrar Estudiante</a>  
            <a href="/ListaAlumno" className="boton">Lista de alumnos</a>
            <a href="/RegistrarTutor" className="boton">Registrar Tutor</a>
      </div>
    </div>
  );
}

export default Home;
