import React from "react";
import ModalHeader from "./ModalHeader.js"
import ModalFooter from "./ModalFooter";
import "./Modal.css";


function Modal({ 
  changeModal = () => { },  
  createEntity = ()=>{} ,
  children=[],
  entidad="",

}) {

  return (
    <>
      <div>
        <div className="modal"
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >

          <div className="modal-dialog modal-dialog-centered" role="document">

            <div className="modal-content">

              <ModalHeader changeModal={changeModal} entidad={entidad}/>

              <div className="modal-body">
                <form id="form">
  
                  {children} 

                </form>
              </div>

              <ModalFooter changeModal={changeModal} createEntity={createEntity}/>

            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  )
}

export default Modal;