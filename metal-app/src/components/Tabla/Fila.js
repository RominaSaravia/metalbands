import React from 'react';
import ActionButton from '../ActionButton';
import './Fila.css';

const checkField = ({ entidad, col}) => {
  if(typeof entidad[col] === "object"){
    return 'objeto'
  }
  return entidad[col]
}

function Filas( {
  index,
  entidad,
  editEntity=()=>{}, 
  deleteEntidad=()=>{}, 
  columnas = []
}) {
  return(
  <tr className="row" >
  <th scope="row" >{index}</th>
  {columnas.map((col, _index)=> (
      <td key={`col-${col}-${_index}`} > {checkField({entidad,col})} </td>

  )) }

  <td className="actionRow">
    <div className="btn-group" role="group" aria-label="Basic example">
      <ActionButton type="editar" onClick={editEntity} index={index} />
      <ActionButton type="eliminar" onClick={(e)=>deleteEntidad(e,index)} />

    </div>
  </td>
</tr>

)}

export default Filas;