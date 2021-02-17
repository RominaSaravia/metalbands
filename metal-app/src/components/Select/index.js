import React from "react";
import "./Select.css"

function Select({
  options = [],
  nombreCampo = "vacio",
  placeholder,
  onChange = () => { },
  value = "",
}) {
  return (
    <select
      id={nombreCampo}
      className="form-control"
      onChange={onChange}
      name={nombreCampo}
      defaultValue={value}
    >
      <option value="">Seleccione {placeholder} </option>
      {options.map(({ _value, tag }, index) => (
        <option
          key={`${placeholder}-${index}-${_value}-${tag}`}
          value={_value}
        >
          {tag}
        </option>
      ))}
    </select>
  )
}

export default Select;