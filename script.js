// Pedir nombre al usuario:

let nombreUsuario = document.getElementById('nombreUsuario');
let nuevoNombre = prompt('Ingrese su nombre');

nombreUsuario.innerText = nuevoNombre;


// Aviso al usuario de lo que pase:
alert(`${nuevoNombre}, recuerde completar año y puntuacion con números.`
)


// Aviso de que la pagina se cargó:

// let avisoDeCarga = document.querySelector('#contacto');

// document.addEventListener("DOMContentLoaded", () => {
//     avisoDeCarga.innerHTML += 'El documento ya se cargó.'
// })


// Aviso de click en cualquier parte:

// let avisoDeClick = document.querySelector('body');

// document.addEventListener('click', (e) => {
//     e.preventDefault();
//     avisoDeClick.innerHTML += `${nuevoNombre} hiciste click la pagina. `
// })


// Restricciones en el formulario:

const inputAnio = document.querySelector('#inputAnio'),
inputPuntuacion = document.querySelector('#inputPuntuacion');

inputAnio.addEventListener('keypress', (evento) => {
    let codCaracter = evento.charCode;
    if (codCaracter != 0) {
        if (codCaracter < 48 || codCaracter > 57) {
            evento.preventDefault();
            alert('Solo podes usar numeros!');
        }
    }
})

inputPuntuacion.addEventListener('keypress', (evento) => {
    let codCaracter = evento.charCode;
    if (codCaracter != 0) {
        if (codCaracter < 48 || codCaracter > 57) {
            evento.preventDefault();
            alert('Solo podes usar numeros!');
        }
    }
})

