import "../../style/SecretarioCss/registrar-tutor.css";
import React, { useState } from 'react';
import { createTutores } from "../../api/tutores.api";

function RegistrarTutor() {
    const [tutor, setTutor] = useState({
          "dni_tutor": "",
          "nombre_tutor": "",
          "apellido_tutor": "",
          "telefono_tutor": "",
          "correo_tutor":"",
          "genero_tutor": "",
          
      })
      const handleSubmit = async () => {
        try{
        if (!tutor.dni_tutor || !tutor.nombre_tutor || !tutor.apellido_tutor || !tutor.telefono_tutor || !tutor.correo_tutor || !tutor.genero_tutor) {
          alert("Completa todos los campos");
          return;
        }
        await createTutores(tutor);
        {/* No funciona el mostrar la ventana emergente*/}
        console.alert("Se registro con éxito");
        
      } catch (error) {
          console.error("Error al enviar:", error.response?.data || error.message);
        }
      };

    const [showModal, setShowModal] = useState(false);
    
    const handleFinalizar = () => {
        setShowModal(true);
    };
    return(
        <div>
            <h1 id="titulo">Registrar Tutor</h1>
            <div id="centrar-body">
                <div className="blank">
                <div className="flex-row">     
                    <div className="top">
                        <label>DNI</label>
                        <input type="number" onChange={(e) => setTutor({...tutor, dni_tutor: e.target.value})} maxLength={8}/>
                    </div>
                    <div className="top">
                        <label>Nombre</label>
                        <input type="text" onChange={(e) => setTutor({...tutor, nombre_tutor: e.target.value})}/>
                    </div>
                </div>
                <div className="flex-row">
                    <div>
                        <label>Apellido</label>
                        <input type="text" onChange={(e) => setTutor({...tutor, apellido_tutor: e.target.value})}/>
                    </div>
                    <div>
                        <label>Género</label>
                        <select
                        name="genero"
                        id="genero"
                        value={tutor.genero_tutor || ""}
                        onChange={(e) =>
                            setTutor({ ...tutor,genero_tutor: e.target.value })}>
                            <option value="">Selecciona una opción</option>
                            <option value="M">Masculino</option>
                            <option value="F">Femenino</option>
                            <option value="O">Otro</option>
                        </select>
                    </div>
                </div>
                <div className="flex-row">
                    <div>
                        <label>Teléfono</label>
                        <input type="tel" onChange={(e) => setTutor({...tutor, telefono_tutor: e.target.value})}/>
                    </div>
                
                    <div>
                        <label id="email-label">Email</label>
                        <input type="email" onChange={(e) => setTutor({...tutor, correo_tutor: e.target.value})}/>
                    </div>
                </div>
                <div id="botones">  
                    <a href="/secretario" className="boton">Cancelar</a>
                    <button onClick={handleSubmit} className="boton" href="/secretario">Confirmar</button>
                </div>  
            </div>
        </div>
    </div>
    )
}

export default RegistrarTutor;