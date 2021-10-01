import { validarFormulario, mostrarAlerta } from './funciones.js';
import { editarRegistro } from './API.js';

export function saveClient(id) {
    console.log(id)
}


export function edicionCliente(e) {

    e.preventDefault();

    // Contenedor del formulario
    const contenedorForm = document.querySelector('.c-form');


    // Valores del formulario
    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const telefono = document.querySelector('#telefono').value;
    const empresa = document.querySelector('#empresa').value;
    const idValue = document.querySelector('#idCliente').value;


    // Objeto del cliente
    const cliente = {
        nombre,
        email,
        telefono,
        empresa,
        id: idValue
    }

    if (validarFormulario(cliente)) {
        mostrarAlerta('Todos los campos son obligatorios');
        return;
    }

    editarRegistro(cliente);
    contenedorForm.classList.remove('active');

}