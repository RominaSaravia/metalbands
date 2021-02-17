import React from "react";
import "./ModalFooter.css"

function ModalFooter({ changeModal = () => { }, createEntity = () => { } }) {
  return (
    <div className="modal-footer">
      <button
        onClick={changeModal}
        type="button"
        className="btn btn-secondary"
        data-dismiss="modal"
      >
        Cerrar
    </button>

      <button
        onClick={createEntity}
        type="button"
        className="btn btn-primary"
        data-dismiss="modal"
        id="btn-guardar"
        >
        Aceptar
    </button>
    </div>
  )
}

export default ModalFooter;