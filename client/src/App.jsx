
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navegacion from "./components/navbar";
import Menu from "./pages/menu";
import Secretaria from "./pages/secretaria";
import Tutor from "./pages/tutor";

function App() {
  return (
    <Router>
      <Navegacion />
      <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/secretaria" element={<Secretaria />} />
        <Route path="/tutor" element={<Tutor />} />
      </Routes>
    </Router>
  );
}

export default App;