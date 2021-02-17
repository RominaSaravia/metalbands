import React from 'react';
import './Header.css';

function Encabezado(props) {
  if (props.columnas.length === 0) return false;
  return (
    <thead className="thead-dark">
      <tr>
        <th scope="col">ID</th>
        {props.columnas.map( (col, index) => (
        <th key={`Titulo-${index}`} scope="col">
          {col}
          </th>
          ))}

        <th scope="col"></th>
      </tr>
    </thead>
  );
}

export default Encabezado;