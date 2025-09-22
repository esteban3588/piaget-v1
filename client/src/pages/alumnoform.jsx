import "../style/AlumnosForm.css"
import Final from '../components/final'
import SuccessModal from "../components/confirmacio"
import React, { useState } from 'react';

function AlumnoForm() {
  const [showModal, setShowModal] = useState(false);

  const handleFinalizar = () => {
    setShowModal(true);
  };

  return (
    <div>
      <h1 id="titulo">Información del alumno</h1>
      <div id="centrar-body">
        <div className="blank">
          <div className="display-flex">
            <div id="grado">
              <label>Seleccionar Grado</label>
              <select name="" id="">
                <option value="">1° Grado</option>
                <option value="">2°Grado</option>
                <option value="">3°Grado</option>
                <option value="">4°Grado</option>
                <option value="">5°Grado</option>
              </select>
            </div>
            <div className="margen-left">
              <label>Fecha de Nacimiento</label>
              <input type="date" />
            </div>
          </div>
          <div className="display-flex">
            <div id="dni">
              <label htmlFor="">DNI</label>
              <input type="text" />
            </div>
            <div className="margen-left">
                <label htmlFor="">Género</label>
                <select name="" id="">
                  <option value="">Masculino</option>
                  <option value="">Femenino</option>
                  <option value="">Otro</option>
                </select>
            </div>
          </div>
          <div className="flex-warp">     
              <div className="flex-column">
                <div className="top">
                    <label htmlFor="">Nombres</label>
                    <input type="text" />
                </div>
                <div className="top">
                    <label htmlFor="">Apellidos</label>
                    <input type="text" />
                </div>
              </div>
            <div>
              <label htmlFor="">Observaciones</label>
              <textarea name="" id=""></textarea>
            </div>
          </div>
        </div>
        
      </div>
      <h1 id="titulo">Relación con el tutor</h1>
      <div id="centrar-body">
        <div className="blank">
          <div className="display-flex">
            <div id="dni-tutor">
              <label htmlFor="">DNI</label>
              <input type="text" />
            </div>
            <div >
              <button id="buscar">
                Buscar
              </button>
            </div>
          </div>
          <div className="display-row">
            <div>
              <label htmlFor="">Seleccionar Tutor</label>
              <select name="" id="selection-tutor">
                <option value="">Seleccionar Tutor</option>
              </select>
            </div>
            <div className="margen-left">
                <label htmlFor="">Parentesco</label>
                <select name="" id="">
                  <option value="">Padre/Madre</option>
                  <option value="">Tío/Tía</option>
                  <option value="">Abuelo/Abuela</option>
                  <option value="">Otro </option>
                </select>
            </div>
          </div>
          <div id="botones">  
              <a href="/home" className="boton">Cancelar</a>
              <button onClick={() => setShowModal(true)} className="boton">Guardar Cambios</button>
              <SuccessModal
                  visible={showModal}
                  message="Alumno agregado"
                  onClose={() => setShowModal(false)}
              />
          </div>  
        </div>
        
      </div>
      
      <Final/>
    </div>
  )
}

export default AlumnoForm;