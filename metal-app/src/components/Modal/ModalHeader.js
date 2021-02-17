import React from "react";
import "./ModalHeader.css";


function ModalHeader( {changeModal = () => {}, entidad=""} ) {
  return(
    <div className="modal-header">
    <h5 className="modal-title" id="exampeModalCenterTitle">
      Agregar {entidad==="artists" ? "artista" : "banda"}
    </h5>
    <button 
    type="button" 
    className="close" 
    data-dismiss="modal" 
    aria-label="Close"
    onClick= {changeModal}
    >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>

  )
}


export default ModalHeader;