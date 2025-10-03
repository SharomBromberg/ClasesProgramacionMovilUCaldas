//Las funciones tipadas en TypeScript nos permiten definir los tipos de datos que una función puede recibir como argumentos y el tipo de dato que devuelve,
// lo que ayuda a prevenir errores y mejorar la legibilidad del código.
//Explicación:
// 1. Función con Tipos Específicos: Se define una función que recibe dos parámetros de tipo number y devuelve un valor de tipo number.
function sumar(a: number, b: number): number {
    return a + b;
}
let resultado: number = sumar(5, 10); // resultado es de tipo number y vale 15
// 2. Función con Parámetros Opcionales: Se muestra cómo definir un parámetro opcional en una función utilizando el símbolo ?. 
function saludar(nombre: string, saludo?: string): string {
    if (saludo) {
        return `${saludo}, ${nombre}!`;
    } else {
        return `Hola, ${nombre}!`;
    }
}
let mensaje1: string = saludar("Ana"); // mensaje1 es "Hola, Ana!"
console.log(mensaje1);
let mensaje2: string = saludar("Ana", "Buenos días"); // mensaje2 es "Buenos días, Ana!"
console.log(mensaje2);
// 3. Función con Parámetros por Defecto: Se define un parámetro con un valor por defecto.
function multiplicar(a: number, b: number = 2): number {
    return a * b;
}
let producto1: number = multiplicar(5); // producto1 es 10, ya que b toma el valor por defecto 2
console.log(producto1);
let producto2: number = multiplicar(5, 3); // producto2 es 15
console.log(producto2);
// 4. Función Anónima Tipada: Se muestra cómo definir una función anónima con tipos específicos.
let dividir: (x: number, y: number) => number = function (x: number, y: number): number {
    return x / y;
}
let cociente: number = dividir(10, 2); // cociente es 5
console.log(cociente);

//Conclusión: El uso de funciones tipadas en TypeScript mejora la seguridad y la claridad del código
//Una característica importante de TypeScript es su capacidad para definir tipos de datos estáticos, lo que ayuda a prevenir errores comunes
// en tiempo de ejecución y facilita la colaboración en equipos de desarrollo. 