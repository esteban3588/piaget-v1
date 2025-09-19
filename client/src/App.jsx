import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Secretario from "./pages/secretario";
import Tutor from "./pages/tutor";
import Menu from "./pages/menu";
import Navegacion from "./components/navbar";
import RutaPrivada from "./components/privateroute";
import Profesor from "./pages/profesor";

function App() {
  return (
    <Router>
    <Navegacion/>
      <Routes>
        <Route path="/secretario" element={<RutaPrivada role="secretario"><Secretario/></RutaPrivada>} />
        <Route path="/tutor" element={<RutaPrivada role="tutor"><Tutor/></RutaPrivada>} />
        <Route path="/profesor" element={<RutaPrivada role="profesor"><Profesor/></RutaPrivada>} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;