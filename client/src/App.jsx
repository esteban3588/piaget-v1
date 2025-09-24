import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Secretario from "./pages/secretario";
import AlumnoForm from './pages/alumnoform'
import AlumnoList from './pages/AlumnoList'
import RegistrarTutor  from './pages/registrar-tutor' 
import DetalleAlumno from './pages/detalleAlumno'
import ModificarAlumno from './pages/modificarAlumno'
import Tutor from "./pages/tutor";
import Menu from "./pages/menu";
import RutaPrivada from "./components/privateroute";
import Profesor from "./pages/profesor";
import Login from "./pages/login";
import Final from "./components/final";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/secretario" element={<RutaPrivada role="secretario"><Secretario/></RutaPrivada>} />
        <Route path="/ListaAlumno" element={<AlumnoList />} />
        <Route path="/ListaAlumno-create" element={<AlumnoForm />} />
        <Route path="/RegistrarTutor" element={<RegistrarTutor/>} />
        <Route path="/DetalleAlumno" element={<DetalleAlumno/>}/>
        <Route path='/ModificarAlumno' element={<ModificarAlumno/>} />
        <Route path="/tutor" element={<RutaPrivada role="tutor"><Tutor/></RutaPrivada>} />
        <Route path="/profesor" element={<RutaPrivada role="profesor"><Profesor/></RutaPrivada>} />
      </Routes>
      <Final />
    </Router>
  );
}

export default App;