import { obtenerRegistro } from './API.js';
import { eliminarRegistro } from './funciones.js';

(function () {

    document.addEventListener('DOMContentLoaded', mostrarRegistros);

   async function mostrarRegistros() {

        const clientes = await obtenerRegistro();

        window.localStorage.setItem("clientes", JSON.stringify(clientes));

        clientes.forEach( cliente => {

            const  {nombre, email, empresa, telefono, id } = cliente
    
            // Contenedor donde inster el HTML
            const contenedor = document.querySelector('.c-tabla-principal');
            
            // Elementos HTML creados para insertar
            const divContenido = document.createElement('div');
            const btnToggle = document.createElement('div');
            const btnEliminar = document.createElement('i');
            const btnEdicion = document.createElement('i');
            
            // Contenido principal
            divContenido.setAttribute('id', id)
            divContenido.classList.add('c-contenido-tabla');
        
            divContenido.innerHTML = `
                <div class="contenido-tabla-principal">
                    <h4 class="title">${nombre}</h4>
                </div>
                <div class="d-none">
                    <p>${empresa}</p>
                    <p>${email}</p>
                    <p>${telefono}</p>
                    <div class="c-btn-tabla"></div>
                </div>
            `;
        
            // Botón toggle para la versión móvil
            btnToggle.innerHTML = `<i id="btn-ocultar-form" class="fas fa-folder-minus c-btn-toggle nada"></i>`;
            btnToggle.onclick = function () {
                desplegarEntrada()
            }
        
            // Botón eliminar
            btnEliminar.classList.add('fas', 'fa-trash')
            btnEliminar.onclick = function () {
                eliminarRegistro(id);
            }
        
            // Botón Editar
            btnEdicion.classList.add('fas', 'fa-edit')
            btnEdicion.onclick = function () {
                toggleFormulario(id);
            }
            
            // Insertar el contenido creado en el HTML
        
            divContenido.children[0].appendChild(btnToggle);
            divContenido.children[1].children[3].appendChild(btnEdicion)
            divContenido.children[1].children[3].appendChild(btnEliminar)
            contenedor.appendChild(divContenido)
        
            function desplegarEntrada() {
                divContenido.children[1].classList.toggle('active')
            }
        })
    
    } 
})()