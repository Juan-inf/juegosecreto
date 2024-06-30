/*
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();

*/
/*let listaGenerica =[];
let lenguajeDeprogramacion=['JavaScript', 'C','C++','Kotlin','Python'];
let lenguageDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

lenguageDeProgramacion.push('Java', 'Ruby', 'GoLang');
let lenguagesDeProgramacion = ['JavaScript', 'C','C++','Kotlin','Python','Java', 'Ruby', 'GoLang'];

function mostrarLenguajes() {
    lenguagesDeProgramacion.forEach(function(lenguaje) {
        console.log(lenguaje);
    });
}

// Llamada a la función para mostrar los elementos en la consola
mostrarLenguajes();
*/
/*
///Función que muestra en la consola todos los elementos de la lista lenguagesDeProgramacion en orden inverso:

let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python', 'Java', 'Ruby', 'GoLang'];

function mostrarLenguajesInverso() {
    lenguagesDeProgramacion.slice().reverse().forEach(function(lenguaje) {
        console.log(lenguaje);
    });
}

// Llamada a la función para mostrar los elementos en orden inverso en la consola
mostrarLenguajesInverso();
*/

//Función que calcula el promedio de los elementos en una lista de números:
/*
function calcularPromedio(lista) {
    let suma = lista.reduce((acc, num) => acc + num, 0);
    return suma / lista.length;
}

// Ejemplo de uso
let numeros = [1, 2, 3, 4, 5];
console.log(calcularPromedio(numeros)); // Output: 3
*/
//3.- Función que muestra en la consola el número más grande y el número más pequeño en una lista:
/*
function mostrarMayorYMenor(lista) {
    let mayor = Math.max(...lista);
    let menor = Math.min(...lista);
    console.log("Mayor:", mayor);
    console.log("Menor:", menor);
}

// Ejemplo de uso
let numeros = [1, 2, 3, 4, 5];
mostrarMayorYMenor(numeros); // Output: Mayor: 5, Menor: 1

*/

// 4*.- Función que devuelve la suma de todos los elementos en una lista:

function sumarElementos(lista) {
    return lista.reduce((acc, num) => acc + num, 0);
}

// Ejemplo de uso
let numeros = [1, 2, 3, 4, 5];
console.log(sumarElementos(numeros)); // Output: 15
