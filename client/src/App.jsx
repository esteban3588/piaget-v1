import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {AlumnoForm} from './pages/alumnoform'
import {ListaAlumno} from './pages/listaalumno'
import Navegacion from './components/navbar'

function App() {
  return (
    <BrowserRouter>
      <Navegacion />
      <Routes>
        <Route path="/ListaAlumno" element={<ListaAlumno />} />
        <Route path="/ListaAlumno-create" element={<AlumnoForm />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
