import React from 'react';
import "./MsgAlert.css";

function MsgAlert( {alertSwitch = () => {}} ) {
  return (
    <div className="alert alert-danger alert-dismissible" role="alert">
    <strong>Oops!</strong> Algo hicimos mal, vuelve a intentar
  <button 
  type="button" 
  className="close" 
  data-dismiss="alert" 
  aria-label="close"
  onClick = {alertSwitch}
  >

    <span aria-hidden="true">&times;</span>
  </button>
  </div>
  )
}




export default MsgAlert;