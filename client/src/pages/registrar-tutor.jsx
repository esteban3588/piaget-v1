import "../style/registrar-tutor.css"
import SuccessModal from "../components/confirmacio"
import React, { useState } from 'react';

function RegistrarTutor() {
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
                    <a href="/home" className="boton">Cancelar</a>
                    <button onClick={() => setShowModal(true)} className="boton">Confirmar</button>
                    <SuccessModal
                        visible={showModal}
                        message="Tutor agregado con éxito (soy el éxito)"
                        onClose={() => setShowModal(false)}
                    />
                </div>  
            </div>
        </div>
    </div>
    )
}

export default RegistrarTutor;