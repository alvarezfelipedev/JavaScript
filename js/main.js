// --- AGREGAR CASA EN VENTA MEDIANTE UN FORMULARIO --- //

// Clase Casa:

class Casa {
  constructor(nombre, precioCasa, precioExpensas, m2Totales, m2Cubiertos, numeroDeAmbientes, banios) {
    this.nombre = nombre;
    this.precioCasa = precioCasa;
    this.precioExpensas = precioExpensas;
    this.m2Totales = m2Totales;
    this.m2Cubiertos = m2Cubiertos;
    this.numeroDeAmbientes = numeroDeAmbientes;
    this.banios = banios;
  }
}


// Formulario:

class Formulario {
  agregarCasa(casa) {
    const listaDeCasa = document.getElementById("listaDeCasa");
    const elemento = document.createElement("div");
    elemento.innerHTML =
      // AGREGAR CARD COMPLETADA POR EL USUARIO
      `
    <div class="card" style="width: 18rem;">
        <img src="../assets/img/casaEnVenta1.webp" class="card-img-top" alt=""> 
        <div class="card-body">
          <h5 class="card-title"><strong>${casa.nombre}</strong></h5>
          <p class="card-text">Precio (USD): <strong>${casa.precioCasa}</strong></p>
          <p class="card-text">Precio de expensa (ARS): <strong>${casa.precioExpensas}</strong></p>
          <p class="card-text">M2​ Totales: <strong>${casa.m2Totales}</strong></p>
          <p class="card-text">M2​ Cubiertos: <strong>${casa.m2Cubiertos}</strong></p>
          <p class="card-text">Ambientes: <strong>${casa.numeroDeAmbientes}</strong></p>
          <p class="card-text">Baños: <strong>${casa.banios}</strong></p>
          <input id='btn-eliminar' type="submit" value="Eliminar" class="btn btn-primary btn-block" name="eliminar" />
      </div>
    </div>
        `;
    listaDeCasa.appendChild(elemento);
  }


  // Reiniciar los valores del Input:

  reinciarForm() {
    document.getElementById("casa-form").reset();
  }

  deleteProduct(element) {
    if (element.name === "eliminar") {
      element.parentElement.parentElement.remove();
      this.mostrarMensaje("Casa eliminada correctamente!", "success");
    }
  }
}


// Eventos DOM:
document
  .getElementById("casa-form")
  .addEventListener("submit", function (e) {

    e.preventDefault();

    // Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value,
      precioCasa = document.getElementById("precioCasa").value,
      precioExpensas = document.getElementById("precioExpensas").value,
      m2Totales = document.getElementById("m2Totales").value,
      m2Cubiertos = document.getElementById("m2Cubiertos").value,
      numeroDeAmbientes = document.getElementById("numeroDeAmbientes").value,
      banios = document.getElementById("banios").value

    // Crear un nuevo objeto Casa:
    const producto = new Casa(nombre, precioCasa, precioExpensas, m2Totales, m2Cubiertos, numeroDeAmbientes, banios);

    // Crear una nueva instancia de interfaz de usuario:
    const interfazUsuario = new Formulario();

    // Validar los inputs:
    let btnAgregar = document.getElementById('btn-agregar');

    if (nombre === "" || precioCasa === "" || precioExpensas === "" || m2Totales === "" || m2Cubiertos === "" || numeroDeAmbientes === "" || banios === "") {
      interfazUsuario.mostrarMensaje(btnAgregar.onclick = () => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Comprube que los campos estén completos!',
          showConfirmButton: false,
          timer: 500
        })
      });
      return
    }

    // Guardar la Casa:
    interfazUsuario.agregarCasa(producto);
    interfazUsuario.mostrarMensaje(btnAgregar.onclick = () => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Agregado!',
        showConfirmButton: false,
        timer: 500
      })
    });
    interfazUsuario.reinciarForm();
  });

document.getElementById("listaDeCasa").addEventListener("click", (e) => {
  const interfazUsuario = new Formulario();
  interfazUsuario.deleteProduct(e.target);
  e.preventDefault();
});


// Eliminar card

function eliminarCard() {
  const btnEliminar = document.getElementById('btn-eliminar');
  eliminarCard.remove(btnEliminar);
}


// --- CLIMA, USO DE LA API https://openweathermap.org/ --- //

const key = '5f5023db99fb64793d07605058b72351';

// Fetch:
const fetchDatos = position => {
  const { latitude, longitude } = position.coords;
  fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${key}`)
    .then(response => response.json())
    .then(data => datosDelClima(data));
}

// Obtener Datos del Clima:
const datosDelClima = dato => {
  const climaDatos = {
    location: dato.name,
    description: dato.weather[0].main,
    humidity: dato.main.humidity,
    temperature: Math.floor(dato.main.temp),
    date: getDate(),
  }

  // Imprimir los datos obtenidos por la ubicacion del Usuario:
  Object.keys(climaDatos).forEach(key => {
    contenido(key, climaDatos[key]);
  });

  transicion();
}

// Pasaje de carga a mostrar los datos
const transicion = () => {
  let bloque = document.getElementById('bloque');
  let loader = document.getElementById('cargando');

  // transicion:
  loader.style.display = 'none';
  bloque.style.display = 'flex';
}

// Fecha:
const getDate = () => {
  let date = new Date();
  return `${date.getDate()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}`;
}

const contenido = (element, text) => {
  document.getElementById(element).textContent = text;
}

// Carga de Datos:
const carga = () => {
  navigator.geolocation.getCurrentPosition(fetchDatos)
}

