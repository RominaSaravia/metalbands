import React, { useEffect } from "react"
import Input from  "../Input";
import Select from '../Select';


function ComponentField ({
  manageInput = () => { },
  objeto = {},
  nombreCampo = "",
  options = {}
}) {
  //const [options,setOptions] = useState(inicialOptions)

  useEffect( ()=>{ }, [] );

  switch (nombreCampo) {
    case "style":
    case "state":
      return (
        <div className="form-row">
          {options[nombreCampo].length > 0 ? (

            <Select
              nombreCampo={nombreCampo}
              options={options[nombreCampo]}
              onChange={manageInput}
              placeholder={nombreCampo}
              defaultValue={objeto[nombreCampo]}
              selectedValue={objeto[nombreCampo]}
              value={objeto[nombreCampo]}
            />
          ):("cargando")}

        </div>
      );

    case "name":
    case "surname":
      return (
        <div className="form-row">
          <div className="col">
          <Input
            nombreCampo={nombreCampo}
            type="text"
            onInput={manageInput}
            placeholder={nombreCampo}
            value={objeto[nombreCampo]}

          />
          </div>
        </div>
      );
      case "apellido":
        return (
          <div className="form-row">
            <div className="col">
            <Input
              nombreCampo={nombreCampo}
              type="text"
              onInput={manageInput}
              placeholder={nombreCampo}
              value={objeto[nombreCampo]}
  
            />
            </div>
          </div>
        );
    default:
      return false;
  }
}

export default ComponentField;