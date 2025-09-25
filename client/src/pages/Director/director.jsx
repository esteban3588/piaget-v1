import "../../style/directorCss/home.css";
import Perfil from "../../components/perfil";
function DirectorHome() {
  return (
    <div className="director-home">
      <Perfil/>
      {/* Saludo */}
      <header className="saludo">
        <h2>Bienvenido al Instituto Jean Piaget</h2>
        <p>Brindamos educación secundaria de calidad.</p>
      </header>

       <div id="mover">
            <a href="/crearempleado" className="boton">Registrar Empleado</a>  
            <a href="/empleados" className="boton">Mostrar Empleados</a>
            <a href="/registrar-rol" className="boton">Registrar Nuevo Rol</a>
      </div>
    </div>
  );
}

export default DirectorHome;
