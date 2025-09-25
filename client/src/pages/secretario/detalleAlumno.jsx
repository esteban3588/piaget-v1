
import React, { useState } from 'react';
import Ventana_Emergente_Eliminar from "../../components/ventana-emergente-elimnar";

function DetalleAlumno(){
    return (
        <div>
             <h1 id="titulo">Detalles del alumno</h1>
            <div id="centrar-body">
                <div className="blank">
                <div className="flex-row">     
                    <div className="top">
                        <label htmlFor="">DNI</label>
                        <input type="number" />
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
                    <a href="/ModificarAlumno" className="boton">Modificar</a>
                    <button onClick={() => setShowModal(true)} className="boton">Eliminar</button>
                        <Ventana_Emergente_Eliminar
                            visible={showModal}
                            message="Desea eliminar la cosa esta?"
                            onClose={() => setShowModal(false)}
                        />
                </div>  
            </div>
        </div>
        </div>
    )
}

export default DetalleAlumno;