import "../../style/SecretarioCss/AlumnosForm.css";
import React, { useState } from 'react';
import axios from 'axios';

function AlumnoForm() {
  const [alumno, setAlumno] = useState({
    dni_alumno: "",
    nombre_alumno: "",
    apellido_alumno: "",
    fecha_nacimiento_alumno: "",
    genero_alumno: "",
    observaciones_alumno: "",
    grado: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setAlumno({ ...alumno, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
     
      const alumnoResponse = await axios.post("http://127.0.0.1:8000/api/alumno/", {
        dni_alumno: alumno.dni_alumno,
        nombre_alumno: alumno.nombre_alumno,
        apellido_alumno: alumno.apellido_alumno,
        fecha_nacimiento_alumno: alumno.fecha_nacimiento_alumno,
        genero_alumno: alumno.genero_alumno,
        observaciones_alumno: alumno.observaciones_alumno,
      });

      
      await axios.post("http://127.0.0.1:8000/api/alumnoxgrado/", {
        dni_alumno: alumnoResponse.data.dni_alumno, 
        id_grado: alumno.grado,
      });

      setShowModal(true);

    } catch (error) {
      console.error("Error al enviar:", error.response?.data || error.message);
    }
  };

  return (
    <div>
      <div id="centrar-body">
        <form onSubmit={handleSubmit} className="blank">
          <h1 id="titulo">Información del alumno</h1>
          <div> 
              <label>DNI</label>
              <input type="number" name="dni_alumno" onChange={handleChange} maxLength={8} />

              <label>Nombre</label>
              <input type="text" name="nombre_alumno" onChange={handleChange} />

              <label>Apellido</label>
              <input type="text" name="apellido_alumno" onChange={handleChange} />

              <label>Fecha de Nacimiento</label>
              <input type="date" name="fecha_nacimiento_alumno" onChange={handleChange} />

              <label>Género</label>
              <select name="genero_alumno" onChange={handleChange}>
                <option value="">Selecciona</option>
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
                <option value="O">Otro</option>
              </select>

              <label>Grado</label>
              <select name="grado" onChange={handleChange}>
                <option value="">Selecciona</option>
                <option value="1">1° Grado</option>
                <option value="2">2° Grado</option>
                <option value="3">3° Grado</option>
                <option value="4">4° Grado</option>
                <option value="5">5° Grado</option>
              </select>

              <label>Observaciones</label>
              <textarea name="observaciones_alumno" onChange={handleChange} maxLength={400}></textarea>
            </div>
      
            <h1 id="titulo">Relación con el tutor</h1>
              <div className="display-flex">
                <div id="dni-tutor">
                  <label>DNI</label>
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
                  <label>Seleccionar Tutor</label>
                  <select name="" id="selection-tutor">
                    <option value="">Seleccionar Tutor</option>
                  </select>
                </div>
                <div className="margen-left">
                    <label>Parentesco</label>
                    <select name="" id="">
                      <option value="">Padre/Madre</option>
                      <option value="">Tío/Tía</option>
                      <option value="">Abuelo/Abuela</option>
                      <option value="">Otro </option>
                    </select>
                </div>
              </div>
              <div id="botones">  
                <a href="/secretario" className="boton">Cancelar</a>
                <button onClick={handleSubmit} className="boton">Guardar Cambios</button>
              </div> 
              {showModal && <div className="modal">Alumno creado con éxito</div>} 
        </form>
        </div>
    </div>
  );
}

export default AlumnoForm;
