// Pedido de nombre al usuario
let nombre = prompt("Ingrese su nombre")

// Saludo al usuario + explicacion
alert('Bienvenido/a' + ' ' + nombre + '\nSiga las instrucciones para calcular su Promedio Final.');

// Pedido de la nota del primer trimestre.
let notaUno = parseInt(prompt('Ingrese la nota de su Primer Trimestre.'));
// Pedido de la nota del segundo trimestre.
let notaDos = parseInt(prompt('Ingrese la nota de su Segundo Trimestre.'));
// Pedido de la nota de la evaluación integradora.
let notaTres = parseInt(prompt('Ingrese la nota de la Evaluacion Intregradora.'));

// Suma de las notas ingresadas.
const sumaTotal = (notaUno, notaDos, notaTres) => notaUno + notaDos + notaTres;
// Promedio de la suma total de las notas.
const promedio = (sumaTotal) => sumaTotal / 3

let promedioFinal = promedio( sumaTotal(notaUno, notaDos, notaTres) );

// Devolucion de la nota final al usuario.
alert('Su nota final es ' + promedioFinal)