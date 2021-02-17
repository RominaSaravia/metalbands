const API_URL = "";


export const listarEntidad = async ({ 
  entidad = 'bands', 
  search = "" , 
  columnas=[],
  bandas = "",
  artistas = "",
}) => {
  try {
    let url = `${API_URL}/${entidad}`;
    if((search.length > 0 && columnas.length > 0) || bandas || artistas) {
      let queryString = "?";
      for (let col of columnas) {
        queryString += `${col}=${search}&`;

      }
      url += queryString;
    }

    const response = await fetch(url);
    const datos = await response.json()
    return datos;

  } catch (error) {
    console.log({ error });

  }

}

export const crearEditarEntidad = async ({
  entidad = 'bands',
  objeto = {} ,
  method = "POST",
  idObjeto = null
}) => {
  try {
    let url = null;
    if (method === "PUT" && (idObjeto || idObjeto === 0) ) {
      url = `${API_URL}/${entidad}/${idObjeto}`;

    } else if (method === "POST") {
      url = `${API_URL}/${entidad}`;

    }

    if(!url) {
      throw new Error('No cumple criterios de envio');
    }

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(objeto),
      mode: "cors",
    });
    
    const datos = await response.json()
    console.log(response)
    return datos;

  } catch (error) {
    console.log({ error });

  }

}

export const deleteEntidad = async ({
   entidad = "bands",
   idObjeto = null 
  }) => {
  try {

    if (idObjeto || idObjeto === 0){
      const response = await fetch(`${API_URL}/${entidad}/${idObjeto}`, 
      {method:"DELETE",
    });
      const datos = await response.json()
      return datos;

    }
    throw new Error('idObjeto null/undefined')

  } catch (error) {
    console.log( error );

  }

}

export const getOne = async ({ entidad = 'bands', idObjeto = null }) => {
  if(idObjeto === null || !entidad) {
    return{};
  }
  try {
    const response = await fetch(`${API_URL}/${entidad}/${idObjeto}`);
    const datos = await response.json()
    return datos;

  } catch (error) {
    console.log({ error });

  }

}