export const solicitar = async (url) =>{
    //console.log(`${url}/${id}`);
    const respuesta = await fetch(url)

    if(!respuesta.ok){
       throw new Error(`Error en la solicitud ${respuesta.status}`);                                                    
    }
    return await respuesta.json()
    //return data;
}