import React, { useState } from "react";
import Modal from "./modal";
import Login from "../pages/login";
import "../style/menu.css";

function Navegacion() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="menu">
      <div className="header">
        <div className="logo">
          <img src="https://iili.io/KTpR0j1.png" alt="Logo" />
          <b className="instituto">Instituto</b>
          <b className="jeanpiaget">Jean Piaget</b>
          <b className="nro">Nº8048</b>
        </div>

        <div className="nivel">Nivel Secundario</div>
      </div>

      {/* Modal con Login */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Login onSuccess={() => setShowModal(false)} />
      </Modal>
    </div>
  );
}

export default Navegacion;
