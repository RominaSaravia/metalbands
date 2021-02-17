import React from "react";
import "./Input.css"

function Input({
  type = "text", 
  nombreCampo, 
  placeholder, 
  onInput= ()=>{},
  value="",
  }) {
  return(                      
  <input
    type={type}
    id={nombreCampo}
    name={nombreCampo}
    className="form-control"
    placeholder={placeholder}
    onInput={onInput}
    defaultValue={value}
  />
  );
}

export default Input;