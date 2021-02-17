import React from 'react';
import Encabezado from './Header';
import Filas from './Fila';
import './Tabla.css'

function Tabla( { 
  entidades = [] , 
  editEntity =()=>{}, 
  deleteEntidad = ()=>{},
  columnas = [],
}) {

  return (
    <table className="table table-stripped table-hover">

      <Encabezado columnas={columnas} />

      <tbody id="lista-bandas">
        {entidades.map((entidad,index)=> (
          <Filas
          key={`fila-${index}`}
          index={entidad._id ? entidad._id : false} 
          entidad={entidad}
          editEntity = {editEntity }
          deleteEntidad = {deleteEntidad}
          columnas = {columnas}
          />

        ))}

      </tbody>
    </table>

   
  )
}

export default Tabla;