console.log("JS-02 funciones");

/*
 Las funciones permiten organizar, reutilizar y 
 estructurar el código. Su propósito principal es:

- Modularidad: Dividir un programa en piezas lógicas 
  más pequeñas y manejables.
- Reutilización de código: Reducir la duplicación de 
  código al reutilizar funciones.
- Legibilidad: Hacer que el código sea más claro y fácil de entender.
- Mantenimiento: Facilitar actualizaciones o modificaciones 
  al concentrar la lógica en un solo lugar.
- Abstracción: Ocultar detalles internos y expone 
  solo lo necesario para trabajar con ellas

  Recomendaciones para el uso de las funciones:

- Nombre descriptivo: Debe indicar claramente lo que hace.
  Se recomienda comenzar con un verbo
- Parámetros: Debe tener cero o más parámetros, separados por coma.
  Se recomienda no tener más de 3 parámetros.
- Seguir el principo SOLID, sobre el principio de responsabilidad única.
  (Single Responsibility Principle).
- Evitar efectos secundarios: Una función no debe modificar variables externas.

*/

// =======================================================================

/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
----------- Funciones declaradas --------------
(function declaration, function statement)
Una característica de las funciones declaradas es que tien hoisting.

sintaxis:
function nombreFuncionCamelCase ( parámetros ){
    //cuerpo de la función
    instrucciones;
}

hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.

*/
function saludar(nombre){
  console.log("Que te gustaria de regalo de cumpleaños " + nombre)
}

saludar("Paulo");


/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.

sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/

const darRegalo = function (nombre, regalo){
  console.log(`Felicidades ${nombre}, te traje un ${regalo}`);
};

darRegalo("Paulo", "Sopa Nisin");



/*
 Realizar una función declarada que sume dos números 
 y retorne el resultado.*/
 
 function suma(num1, num2){
  return console.log(`La suma de ${num1} + ${num2} = ${num1 + num2}`);
 }
 suma(5,3);
/*
 Realizar una función expresada que reste dos números 
 y retorne el resultado.
*/

const resta = function (valor1, valor2){
  return console.log(`La resta de ${valor1} - ${valor2} = ${valor1 - valor2}`);
};

resta(8,3);

/*
 ------------ Funciones autoinvocadas -----------------------
             (selft-invoking functions)
Funciones que se autoinvocan, se pueden definir con funciones anónimas.

sintaxis:
   ( function (parámetros ){} )( argumentos );

*/

(function setUp(data){
  console.log(`Configuración inicial de la aplicación`);
  console.log(`Valor de data ${data}`);
})(18);




/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una solo instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palabra return

sintaxis:
    const nombreVariable = (parametros) => instrucción;

    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }
*/

// Realizar una función declarada que calcule al área de un triángulo
// al función debe retornar el resultado.
// Área = (b*a)/2

function areaDeTriangulo(base, altura){
  return (base * altura)/2;
}
console.log(`Resultado usando una función declara: ${areaDeTriangulo(15,8)}`);

//función expresada
const areaTriangulo = function (base,altura){
 return (base * altura)/2;
}
console.log(`El resultado usando una funcion expresada: ${areaTriangulo(15,8)}`);

//arrow function
const calculaArea3 = (base, altura) => base*altura/2;

console.log(`Resultado usando arrow function: ${calculaArea3(15,8)}`);


// ¿Qué sucede si uso console.log como retorno?
const imprimirArea = (base, altura) => console.log(calculaArea3(base, altura));
imprimirArea(12, 20);

const calcularAreaCirculo = radio => Math.PI * radio ** 2;

const imprimirAreaCirculo = (radio) => {
  document.getElementById("areaCirculo").innerText = calcularAreaCirculo(radio).toFixed(2);
};
imprimirAreaCirculo(5);


const saludarPersona = (nombre) => console.log(`Hola ${nombre}, ya nos vamos a descansar`);

saludarPersona("Perla");

/*
 ------------ Parámetros por defecto -----------------------
             (default parameters)
Inicializa un parámetro de la función, si no se envía el argumento cuando se invoca

*/


console.log(parseInt(`5`)); // 5 (base)


/*
 ------------ Funciones de Callback -----------------------
 Es una función(definida, expresada, arrow, anónima) que se pasa 
 a otra función como argumento.
 Se pasa en el argumento como referencia ( sin parentesis).
 */

 const imprimirMensaje = ( fncCallBack ) => fncCallBack("Hola Ch54");
                                            // 18("Hola Ch54");
                                            // "patito"("Hola Ch54");
                                            // console.log("Hola Ch54");
                                            // undefined("Hola Ch54");

 // imprimirMensaje( 18 ); // fncCallBack is not a function
 // imprimirMensaje( "Patito" ); // fncCallBack is not a function
 imprimirMensaje( console.log ); // "Hola Ch54"
 // imprimirMensaje( console.log("Luis") ); //  fncCallBack is not a function
 // imprimirMensaje( undefined ); //  fncCallBack is not a function

const enviarParrafo = (mensaje) => {
  const saluda = "Hola, buen día";
   const referencia = document.getElementById("saludo-callback");
   referencia.innerHTML = `${saluda} ${mensaje}`;
}

imprimirMensaje(enviarParrafo );

// usando la función imprimirMensaje, enviar un callback para que
 // imprima con alert

 //imprimirMensaje(alert);

 /*
  Realizar una función que sume dos numeros y que imprima
  el resultado.
   - inicialmente se imprimirá en la consola
   - es posible que se te pida imprimir en el dom
   - es posible que se te pida imprimir en un alert
*/

const sumarDosNumeros = ( a, b) => a  + b;

/* const sumarEImprimir = ( a, b , opcion = "consola") => {
   const resultado = sumarDosNumeros(a, b);
   const mensaje = `La suma de ${a} + ${b} es: ${resultado}`;
    //imprimir en consola
   if( opcion === "consola") console.log(mensaje);
   else if (opcion === "parrafo") document.getElementById("resultado-sumatoria").innerText = mensaje;
   else if (opcion === "h2")document.getElementById("resultadoh2-sumatoria").innerText = mensaje;
   else alert(mensaje)
} */

   const sumarEImprimir = ( a, b , imprimir = console.log) => {
   const resultado = sumarDosNumeros(a, b);
   const mensaje = `La suma de ${a} + ${b} es: ${resultado}`;
   imprimir(mensaje)
}
sumarEImprimir( 10, 14); // se imprimr en consola 

const imprimirEnDOMParagraph = (mensaje) =>{
  const refParagraph = document.getElementById("resultado-sumatoria");
  refParagraph.innerText = mensaje;
}

const imprimirEnDOMH2 = (mensaje) =>{
  const refParagraph = document.getElementById("resultadoh2-sumatoria");
  refParagraph.innerText = mensaje;
}

sumarEImprimir( 10, 14, imprimirEnDOMParagraph); // se imprime en paragraph

sumarEImprimir( 10, 14, imprimirEnDOMH2); // se imprime en h2

//sumarEImprimir(10,14, alert);



// -------------- Recursividad ---------------------
/*
  Una función recursiva es una función que se llama así misma durante su ejecución.

  Se utilizan en algoritmos y soluciones que se basan en la división y conquista
  como cálculos matemáticos, recorrido de estructura de datos y algoritmos de búsqueda
  y ordenamiento.

  Patrón:
    function nombreFuncionRecursiva( parametro  ){
        if( condicionParo){
            return expresión;
        }
        else {
            // llamada recursiva
            nombreFuncionRecursiva( nuevoParametro );
        }
    }
*/

// Calcular el factorial de un número
// factorial de 5: 5 * 4 * 3 * 2 * 1;
function factorialConCicloFor( numero ) {
    let factorial = 1;
    for (let i=0; i < numero; i++) {
      factorial *= (numero - i); // factorial = factorial * (numero - i);
      console.log(`i: ${i}, factorial: ${factorial}, numero: ${numero - i}` );
    }
    return factorial;
}
console.log(`El factorial de 5 es: ${factorialConCicloFor(5)}`); // 120


// Calcular el factorial de un número
// factorial de 5: 5 * 4 * 3 * 2 * 1;
function factorialConCicloFor( numero ) {
    let factorial = 1;
    for (let i=0; i < numero; i++) {
      factorial *= (numero - i); 
      console.log(`i: ${i}, factorial: ${factorial}, numero: ${numero - i}` );
    }
    return factorial;
}
console.log(`El factorial de 5 es: ${factorialConCicloFor(5)}`); // 120

/*
    parámetro   recursividad(n-1)   returnFnc
     5              5-1 = 4            120
     4              4-1 = 3            24
     3              3-1 = 2            6       
     2              2-1 = 1            2         
     1               ----              1
  
*/

/*
 Generar una función recursiva que muestre en consola un saludo
 donde se indique el número saludo deseado.
  ej: saludar 10 veces
  Saludo 1
  Saludo 2
  Saludo 3
  Saludo 4
  Saludo 5
  Saludo 6
   ....
  Saludo 10
*/

function saludoConRecursividad( numeroSaludos){
  if(numeroSaludos <= 0) return numeroSaludos;
  const result = saludoConRecursividad(numeroSaludos - 1 ) ;
  console.log(`Saludo ${numeroSaludos}`);
  
}
console.log( saludoConRecursividad(10));