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
      // AGREGAR EL ARCHIVO CARGADO POR EL USUARIO
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
          <input type="submit" value="Eliminar" class="btn btn-primary btn-block" />
          <input type="submit" value="Favorito" class="btn btn-primary btn-block" />
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
    if (element.name === "delete") {
      element.parentElement.parentElement.remove();
      this.mostrarMensaje("Casa eliminada correctamente!", "success");
    }
  }

  mostrarMensaje(mensaje, claseCSS) {
    const div = document.createElement("div");
    div.className = `alert alert-${claseCSS} mt-2`;
    div.appendChild(document.createTextNode(mensaje));

    // Mostrarlo:
    const contenedor = document.querySelector(".contenedor");
    const contenedorForm = document.querySelector("#contenedor-form");

    // Agregar mensaje:
    contenedor.insertBefore(div, contenedorForm);

    // Eliminar el mensaje, luego de 3 segundos:
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
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
    if (nombre === "" || precioCasa === "" || precioExpensas === "" || m2Totales === "" || m2Cubiertos === "" || numeroDeAmbientes === "" || banios === "") {
      interfazUsuario.mostrarMensaje("Por favor, complete todos los datos", "danger");
    }

    // Guardar la Casa:
    interfazUsuario.agregarCasa(producto);
    interfazUsuario.mostrarMensaje("Casa agregada correctamente!", "success");
    interfazUsuario.reinciarForm();
  });

document.getElementById("listaDeCasa").addEventListener("click", (e) => {
  const interfazUsuario = new Formulario();
  interfazUsuario.deleteProduct(e.target);
  e.preventDefault();
});

// Arreglar que no se pueda agregar sin completar los campos

// Guardar datos cargados por el usuario:

//let nombree = document.getElementById("nombre");
let btnAgregar = document.getElementById('btn-agregar');

btnAgregar.addEventListener('click', () => {
  localStorage.setItem('banios', banios.value);
})


let departamentoNumero3 = {
  propietario: "Renato Augusto",
  edad: 44,
  perro: true,
  gato: false
}

sessionStorage.setItem('departamentoNumero3', JSON.stringify(departamentoNumero3));
console.log(sessionStorage.getItem('departamentoNumero3'));



// Alerta 'Agregado correctamente'
btnAgregar.onclick = () => {
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Agregado!',
    showConfirmButton: false,
    timer: 1500
  })
}

// Alerta 'Error al agregar'
