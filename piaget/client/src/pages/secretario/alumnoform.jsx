import "../../style/SecretarioCss/AlumnosForm.css"
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getAllTutores } from "../../api/tutores.api"
import { getAllParentesco} from "../../api/parentesco.api"
import Perfil from "../../components/perfil";

function AlumnoForm() {
  {/* 1 que traiga los datos del tutor   COMPLETADO
    2 que se realacione por parentesco   COMPLETADO
    3 que filtre por DNI
  */}
  const [alumnoxTutor, setAlumnoxTutor] = useState({
    dni_tutor: "",
    dni_alumno: "",
    id_parentesco: ""
  });
  
  const handleChangeAlumnoxTutor = (e) => {
    setAlumnoxTutor({ ...alumnoxTutor, [e.target.name]: e.target.value });
  };
  
  const [parentesco, setParentesco] = useState([]);
  useEffect(() => {
      async function loadParentesco() {
          const res = await getAllParentesco();
          setParentesco(res.data); 
      }
      loadParentesco();
  }, []);

   const [tutores, setTutores] = useState([]);
      useEffect(() => {
          async function loadTutores() {
              const res = await getAllTutores();
              setTutores(res.data); 
          }
          loadTutores();
      }, []);


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
     
      const alumnoResponse = await axios.post("http://127.0.0.1:8000/api/secretarios/alumnos/", {
        dni_alumno: alumno.dni_alumno,
        nombre_alumno: alumno.nombre_alumno,
        apellido_alumno: alumno.apellido_alumno,
        fecha_nacimiento_alumno: alumno.fecha_nacimiento_alumno,
        genero_alumno: alumno.genero_alumno,
        observaciones_alumno: alumno.observaciones_alumno,
      });

      await axios.post("http://127.0.0.1:8000/api/secretario/alumnosxgrados/", {
        dni_alumno: alumnoResponse.data.dni_alumno, 
        id_grado: alumno.grado,
      });

      try {
        await axios.post("http://127.0.0.1:8000/api/secretario/alumnosxtutores/", {
          dni_alumno: alumnoResponse.data.dni_alumno,
          dni_tutor: alumnoxTutor.dni_tutor,
          id_parentesco: alumnoxTutor.id_parentesco
        });
        setShowModal(true);
      } catch (error) {
        console.error("Error en POST:", error.response ? error.response.data : error.message);
      }

    } catch (error) {
      console.error("Error al enviar:", error.response?.data || error.message);
    }
  };



  return (
    <div>
      <Perfil/>
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
                <select onChange={handleChangeAlumnoxTutor} 
                name="dni_tutor" 
                value={alumnoxTutor.dni_tutor}>
                  <option value="">Seleccione...</option>
                {tutores.map((tutor) => (
                  <option key={tutor.dni_tutor} value={tutor.dni_tutor}>
                    {tutor.nombre_tutor} {tutor.apellido_tutor}
                  </option>
                ))}
              </select>


                </div>
                <div className="margen-left">
                    <label>Parentesco</label>
                    <select
                      name="id_parentesco"
                      value={alumnoxTutor.id_parentesco}
                      onChange={handleChangeAlumnoxTutor}
                    >
                      <option value="">Seleccione...</option>
                      {parentesco.map((p) => (
                        <option key={p.id_parentesco} value={p.id_parentesco}>
                          {p.parentesco_nombre}
                        </option>
                      ))}
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
