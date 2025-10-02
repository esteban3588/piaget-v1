import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Secretario from "./pages/secretario/secretario";
import AlumnoForm from './pages/secretario/alumnoform';
import AlumnoList from './pages/secretario/AlumnoList';
import RegistrarTutor  from './pages/secretario/registrar-tutor';
import DetalleAlumno from './pages/secretario/detalleAlumno';
import ModificarAlumno from './pages/secretario/modificarAlumno';
import Tutor from "./pages/tutor";
import RutaPrivada from "./components/privateroute";
import Profesor from "./pages/profesor";
import Login from "./pages/login";
import Final from "./components/final";
import DirectorHome from "./pages/Director/director";
import MostrarEmpleados from "./pages/Director/mostrarempleados";
import ModificarEmpleado from "./pages/Director/modificarempleado";
import RegistrarEmpleado from "./pages/Director/registrarEmpleado";
import RegistrarRol from "./pages/Director/registrar-roles";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/director" element={<RutaPrivada role="director"><DirectorHome/></RutaPrivada>} />
        <Route path="/crearempleado" element={<RutaPrivada role="director"><RegistrarEmpleado/></RutaPrivada>} />
        <Route path="/empleados" element={<RutaPrivada role="director"><MostrarEmpleados/></RutaPrivada>} />
        <Route path="/empleados/modificar/:dni" element={<RutaPrivada role="director"><ModificarEmpleado/></RutaPrivada>} />
        <Route path="/registrar-rol" element={<RutaPrivada role="director"><RegistrarRol/></RutaPrivada>} />
        <Route path="/secretario" element={<RutaPrivada role="secretario"><Secretario/></RutaPrivada>} />
        <Route path="/ListaAlumno" element={<RutaPrivada role="secretario"><AlumnoList /></RutaPrivada>} />
        <Route path="/ListaAlumno-create" element={<RutaPrivada role="secretario"><AlumnoForm /></RutaPrivada>} />
        <Route path="/RegistrarTutor" element={<RutaPrivada role="secretario"><RegistrarTutor/></RutaPrivada>} />
        <Route path="/DetalleAlumno" element={<RutaPrivada role="secretario"><DetalleAlumno/></RutaPrivada>} />
        <Route path='/ModificarAlumno' element={<RutaPrivada role="secretario"><ModificarAlumno/></RutaPrivada>} />
        <Route path="/tutor" element={<RutaPrivada role="tutor"><Tutor/></RutaPrivada>} />
        <Route path="/profesor" element={<RutaPrivada role="profesor"><Profesor/></RutaPrivada>} />
      </Routes>
      <Final/>
    </Router>
  );
}

export default App;