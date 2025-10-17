//Las funciones de flecha en TypeScript nos permiten escribir funciones de manera 
// más concisa y clara,
// utilizando una sintaxis más corta que las funciones tradicionales.
// Explicación: 
// 1. Función de Flecha Básica: Se define una función de flecha que recibe dos parámetros y devuelve su suma.
let sumar = (a: number, b: number): number => a + b;
let resultado: number = sumar(5, 10); // resultado es de tipo number y vale 15
console.log(`Resultado de sumar: ${resultado}`);
// 2. Función de Flecha con Cuerpo de Función: Si la función tiene más de una línea, se utiliza un bloque de código.
let saludar = (nombre: string): string => {
    let saludo: string = `Hola, ${nombre}!`;
    return saludo;
}

let mensaje: string = saludar("Ana"); // mensaje es "Hola, Ana!"
console.log(mensaje);
// 3. Función de Flecha sin Parámetros: Se muestra cómo definir una función de flecha sin parámetros.
let obtenerFechaActual = (): Date => new Date();
let fechaActual: Date = obtenerFechaActual();
console.log(`Fecha Actual: ${fechaActual}`);
// 4. Función de Flecha con Parámetro Único: Si la función tiene un solo parámetro, se pueden omitir los paréntesis.
let cuadrado = (x: number): number => x * x;
let resultadoCuadrado: number = cuadrado(4); // resultadoCuadrado es 16
console.log(`Resultado del cuadrado: ${resultadoCuadrado}`);
// 5. Función de Flecha como Callback: Se utiliza una función de flecha como callback en un método de array.
let nums: number[] = [1, 2, 3, 4, 5];
let numerosDoblados: number[] = nums.map(n => n * 2);
console.log(`Números Doblados: ${numerosDoblados}`);
//Conclusión: El uso de funciones de flecha en TypeScript mejora la legibilidad y concisión del código,
//es comunmente utilizado en desarrollo de aplicaciones moviles con frameworks como React Native y ionic,
// facilitando el desarrollo y mantenimiento de nuestras aplicaciones.