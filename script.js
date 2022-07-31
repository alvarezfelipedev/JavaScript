// El objeto es una estructura que sirve para guardar valores que tienen un criterio en común. Ej: autos, galletitas, casas, etc.

// class Auto -> sirve para crear objetos de una manera mas simple y clara, primera letra en mayusc.
// constructor -> El método constructor es un metodo especial para crear e inicializar un objeto creado a partir de una clase.

// Creacion de un objeto con nombre Auto, que tiene en comun estos criterios: modelo, marca, anio, puntuacion, id.

class Auto {

    constructor(modelo, marca, anio, puntuacion, id) {
        this.modelo = modelo;
        this.marca = marca;
        this.anio = parseInt(anio);
        this.puntuacion = parseInt(puntuacion);
        this.id = id;
    }

    asignarId(array) {
        this.id = array.length;
    }

    puntaje(puntuacion) {
        this.puntuacion = puntuacion;
    }


}


// new -> llama a la clase contructora Auto y crea un nuevo auto
const autos = [
    new Auto('500', 'Fiat', 2017, 6, 1),
    new Auto('Strada Working', 'Fiat', 2018, 8, 2)
]

console.log(autos);


//Pedir que se ingresen modelos de autos nuevos y sumarlos al array.
let continuar = true;

while (continuar) {
    let ingreso = prompt('Ingresá los datos del auto: modelo, marca, año y un puntaje del 1 al 10, separados por una barra diagonal (/). Ingresa X para finalizar');

    if (ingreso.toUpperCase() == 'X') {
        continuar = false;
        break;
    }

    let datos = ingreso.split('/');
    const auto = new Auto(datos[0], datos[1], datos[2], datos[3]);

    autos.push(auto);

    auto.asignarId(autos);

    console.log(autos)
}


//Ordenar el array de acuerdo a lo que se elija.
let criterio = prompt('Elegí el criterio deseado:\n1 - Marca (A a Z) \n2 - Marca (Z a A)\n3 - Mejor a peor puntuacion \n4 - Fecha de salida (Más viejo a más nuevo)');

function ordenar(criterio, array) {
    let arrayOrdenado = array.slice(0);


    switch (criterio) {
        case '1':
            let nombreAscendente = arrayOrdenado.sort((a, b) => a.marca.localeCompare(b.marca));
            return nombreAscendente;
        case '2':
            let nombreDescendente = arrayOrdenado.sort((a, b) => b.marca.localeCompare(a.marca));
            return nombreDescendente;
        case '3':
            return arrayOrdenado.sort((a, b) => b.puntuacion - a.puntuacion);
        case '4':
            return arrayOrdenado.sort((a, b) => a.anio - b.anio);
        default:
            alert('Criterio incorrecto');
            break;
    }
}

//Fin de ordenar el array de acuerdo a lo que se elija.

function crearStringResultado(array) {
    let info = '';

    array.forEach(elemento => {
        info += 'Modelo: ' + elemento.modelo + '\nMarca: ' + elemento.marca + '\nAño de salida: ' + elemento.anio + '\nPuntuacion: ' + elemento.puntuacion + ' puntos.\n\n'
    })

    return info;
}

//Fin de crear el string con los resultados.

alert(crearStringResultado(ordenar(criterio, autos)));


//Filtrar modelos de acuerdo a la marca.

let marcaElegida = prompt('Escribí el nombre de la marca para mostrarte sus modelos');

const filtrado = autos.filter((auto) => auto.marca.toLowerCase().includes(marcaElegida.toLowerCase()))

//Mostrar modelos de autos filtrado de acuerdo a la marca del auto.

if (filtrado.length == 0) {
    alert('Ese modelo no existe. Probá otra vez');
} else {
    const imprimible = filtrado.map((auto) => auto.modelo);
    alert('Los modelos que existen, de acuerdo con la busqueda realizada, son:\n- ' + imprimible.join('\n- '));
}
