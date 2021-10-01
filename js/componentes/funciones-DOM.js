document.addEventListener('DOMContentLoaded', () => {

    desplegarMenu();
    desplegarEntrada();
    toggleFormulario();
    ocultarAlerta();
    filterClients();
});

// Funcion ocultar Alerta
function ocultarAlerta() {
    const btnAlerta = document.querySelector('#btn-ocultar-alerta');
    const alerta = document.querySelector('.c-alerta');
    btnAlerta.addEventListener('click', () => {
        alerta.classList.remove('active');
    })
}

// Funcion Desplegar Menu en la Versión Móvil
function desplegarMenu() {
    const botonMenu = document.querySelector('#btn-menu');
    const menu = document.querySelector('.c-menu');
    botonMenu.addEventListener('click', () => {
        botonMenu.classList.toggle('active');
        menu.classList.toggle('active');
    })
}

// Funcion Desplegar Entrada en los Registros de la Tabla Versión Móvil
function desplegarEntrada() {

    const contendorPrincipal = document.querySelectorAll('.c-contenido-tabla');
    const botonesOcultar = document.querySelectorAll('.c-btn-toggle');

    contendorPrincipal.forEach(contenedor => {
        contenedor.addEventListener('click', (e) => {
            if (e.target.classList.contains('c-btn-toggle')) {
                const idBoton = contenedor.dataset.id
                const elementoOculto = contenedor.querySelector('.d-none');
                botonesOcultar.forEach(boton => {

                    boton.addEventListener('click', (e) => {
                        e.target.classList.toggle('active');
                        console.log(e.target)
                        if (e.target.dataset.id === idBoton) {
                            elementoOculto.classList.toggle('active');
                        }
                    })
                })
            }
        })
    })
}

// Funcion mostrar/ocultar formulario entrada de datos
function toggleFormulario(id) {

    const formulario = document.querySelector('#formulario');   
    const botonOcultarForm = document.querySelector('#btn-ocultar-form');
    const nuevoRegistro = document.querySelector('#btn-crear-registro')
    const contenedorFormulario = document.querySelector('.c-form');
    const tituloFormulario = document.querySelector('.titulo-formulario h2');
    const botonFormulario = document.querySelector('input[type="submit"]');
    const inputId = document.querySelector('#idCliente');

    if (id === undefined) {

        
        // Llamadas
        nuevoRegistro.addEventListener('click', mostrarOcultar)
        botonOcultarForm.addEventListener('click', mostrarOcultar)

        // Funcion mostrar Formulario para guardar datos
        function mostrarOcultar() {
            formulario.reset();
            contenedorFormulario.classList.toggle('active');
            tituloFormulario.textContent = 'Nuevo cliente';
            botonFormulario.value = 'Guardar nuevo cliente';
            inputId.classList.add('special');
        }

        return;

    } else {
        contenedorFormulario.classList.toggle('active');
        tituloFormulario.textContent = 'Editar cliente';
        botonFormulario.value = 'Guardar edición';
        inputId.classList.toggle('special');

        inputId.value = id;
        cargarDatos(id);

    }
}

function cargarDatos(id) {

    let clienteLocalStorage = JSON.parse(window.localStorage.getItem("clientes"))
    let clienteToEdit = clienteLocalStorage.filter(cliente => cliente.id === id);

    const nombre = document.querySelector('#nombre');
    const email = document.querySelector('#email');
    const telefono = document.querySelector('#telefono');
    const empresa = document.querySelector('#empresa');

    clienteToEdit.forEach(element => {
        nombre.value = element.nombre
        email.value = element.email
        telefono.value = element.telefono
        empresa.value = element.empresa
    })

}

function filterClients() {

    const input = document.getElementById('search');
    const titleClient = document.getElementsByClassName('title');

    input.addEventListener('input', () => {

        for (let i = 0; i < titleClient.length; i++) {

            const title = titleClient[i].textContent.toLocaleLowerCase();
            const clientContainer = titleClient[i].parentNode.parentNode;

            if (!title.includes(input.value.toLowerCase())) {
                clientContainer.classList.add('nada');
            } else {
                clientContainer.classList.remove('nada')
            }
            
        }
    })
}