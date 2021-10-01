const url = 'http://localhost:3000/clientes';

// Almacenar un registro nuevo en la base de datos
export const nuevoRegistro = async cliente => {
    
    try {
        await fetch(url, {
            method: 'POST', 
            body: JSON.stringify(cliente),
            headers:{
              'Content-Type': 'application/json' 
            }
        });
        console.log('Peticion Post realizada con exito')
    } catch (error) {
        console.log(error)
    }
    console.log(cliente)
}

// Editar un registro
export const editarRegistro = async cliente => {
    try {
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT', 
            body: JSON.stringify(cliente),
            headers:{
              'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.log(error);
    }
}

// Obtener los registros de la base de datos
export const obtenerRegistro = async () => {

    try {
        
        const resultado = await fetch(url);
        const clientes = await resultado.json();

        return clientes;

    } catch (error) {
        console.log(error)
    }
}

// Elimina un registro de la base de datos
export const eliminarRegistros = async id => {

    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE',
        });

    } catch (error) {
        console.log(error)
    }
}