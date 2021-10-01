import { validarFormulario, mostrarAlerta } from './funciones.js';
import { nuevoRegistro } from './API.js';



// Validar Formulario
export function validarCliente(e) {

    e.preventDefault();
    
        // Contenedor del formulario
        const contenedorForm = document.querySelector('.c-form');

        // Creamos un id nuevo y único
        let id = Date.now();

        // Valores del formulario
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        document.querySelector('#idCliente').value = id;


        // Objeto del cliente
        const cliente = {
            nombre,
            email,
            telefono,
            empresa,
            id
        }

        // if (validarFormulario(cliente)) {
        //     mostrarAlerta('Todos los campos son obligatorios');
        //     return;
        // }

        nuevoRegistro(cliente);
        contenedorForm.classList.remove('active');

}