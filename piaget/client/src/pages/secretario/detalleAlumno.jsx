import React, { useState, useEffect } from 'react';
import { useNavigate, useParams} from "react-router"
import axios from 'axios';
import Perfil from "../../components/perfil";

function DetalleAlumno(){
    const { dni_alumno } = useParams();
    const navigate = useNavigate()
    
    const [alumno, setAlumno] = useState(null);
      
        useEffect(() => {
          axios.get(`http://127.0.0.1:8000/api/alumnos/${dni_alumno}/`)
            .then(res => setAlumno(res.data))
            .catch(err => console.error(err));
        }, [dni_alumno]);
      
        if (!alumno) return <p>Cargando...</p>;
  
    return (
        <div>
            <Perfil/>
             <h1 id="titulo">Detalles del alumno</h1>
            <div id="centrar-body">
                <div className="blank">
                <div className="flex-row">     
                    <div className="top">
                        <label htmlFor="">DNI</label>
                        <input type="text" />
                    </div>
                    <div className="top">
                        <label htmlFor="">Nombre</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="flex-row">
                    <div>
                        <label htmlFor="">Apellido</label>
                        <input type="text" name="" id="" />
                    </div>
                    <div>
                        <label htmlFor="">Género</label>
                        <input type="email" name="Email" id="" />
                    </div>
                </div>
                <div className="flex-row">
                    <div id="cosa">
                        <label htmlFor="">Grado </label>
                        <input type="tel" name="" id=""/>
                    </div>
                    <div id="edad">
                        <label htmlFor="">Edad</label>
                        <input type="date" name="" id=""/>
                    </div>
                </div>
                <div>
                    <label htmlFor="" id="email-label">Fecha de nacimiento</label>
                    <input type="email" name="" id="email" />
                </div>
            </div>
        </div>
         <h1 id="titulo">Tutor relacionado  </h1>
            <div id="centrar-body">
                <div className="blank">
                <div className="flex-row">     
                    <div className="top">
                        <label htmlFor="">DNI</label>
                        <input type="text" />
                    </div>
                    <div className="top">
                        <label htmlFor="">Nombre</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="flex-row">
                    <div>
                        <label htmlFor="">Apellido</label>
                        <input type="text" name="" id="" />
                    </div>
                    <div>
                        <label htmlFor="">Género    </label>
                        <input type="email" name="Email" id="" />
                    </div>
                </div>
                <div className="flex-row">
                    <div>
                            <label htmlFor="">Teléfono</label>
                            <input type="tel" name="" id="" />
                    </div>
                    <div>
                        <label htmlFor="">Fecha de nacimiento</label>
                        <input type="date" name="" id="" />
                    </div>
                </div>
                <div>
                    <label htmlFor="" id="email-label">Email</label>
                    <input type="email" name="" id="email" />
                </div>
                <div id="botones">  
                    <a href="/ListaAlumno" className="boton">Volver a la lista</a>
                    <button onClick={() => navigate("/ModificarAlumno/" + alumno.dni_alumno)} className="boton">Modificar</button>


                </div>  
            </div>
        </div>
        </div>
    )
}

export default DetalleAlumno;