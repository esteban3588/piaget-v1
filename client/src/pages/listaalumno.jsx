import {AlumnoList} from '../components/AlumnoList'
import Navegacion from '../components/navbar'
import Final from '../components/final'
import { Navigation } from '../components/Navigation'

export function ListaAlumno() {
  return (
    <div>
      <Navegacion/>
      <AlumnoList/>
      <Final/>
    </div>
    
  )
}

