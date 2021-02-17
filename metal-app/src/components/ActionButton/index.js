import React from 'react'
import classNames from 'classnames'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit} from '@fortawesome/free-solid-svg-icons'
import './ActionButton.css'

function ActionButton ( {type, onClick=()=>{}, index = "" } ) {
  return (
  <button type="button" className={classNames("btn", 
  {"btn-info": type === "editar",
   "btn-danger": type === "eliminar"
   })}
   onClick={(e)=>onClick(e, index)}
   >

  { type === "editar" && <FontAwesomeIcon icon={faEdit} /> }
  { type === "eliminar" && <FontAwesomeIcon icon={faTrashAlt} /> }

  </button>

  )}

export default ActionButton;