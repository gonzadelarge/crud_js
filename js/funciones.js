import { eliminarRegistros } from './API.js';
import { validarCliente } from './nuevoRegistro.js';
import { edicionCliente } from './editarRegistro.js';

export function validarFormulario(cliente) {
    return !Object.values(cliente).every( input => input !== '');
}

document.addEventListener('DOMContentLoaded', () => {

    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarSubmit)

});

function validarSubmit(e) {
    e.preventDefault()
    if (e.target[5].value === 'Guardar nuevo cliente') {
        validarCliente(e);
    } else {
        edicionCliente(e)
    }

    
}


export function eliminarRegistro(id) {

        const clienteID = id;
        const yes = document.querySelector('#yes');
        const no = document.querySelector('#no');
        const alerta = document.querySelector('.c-alerta');

        alerta.classList.add('active');

        if (yes) {
                yes.addEventListener('click', () => {
                    alerta.classList.remove('active');
                    eliminarRegistros(clienteID);
                    return;
                })
            no.addEventListener('click', () => {
                alerta.classList.remove('active');
            })
        }


}


export function mostrarAlerta(mensaje) {

    const formulario = document.querySelector('#formulario');
    const divMensaje = document.createElement('div');
    divMensaje.classList.add('mensaje-error');
    divMensaje.innerHTML = `
        <p>${mensaje}</p>
    `;
    formulario.appendChild(divMensaje)

    setTimeout(() => {
        divMensaje.remove();
    }, 3000);
}