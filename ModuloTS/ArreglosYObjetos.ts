//los arreglos y objetos en TypeScript nos permiten almacenar y organizar datos de manera estructurada,
// facilitando la manipulación y acceso a la información en nuestras aplicaciones.
// Explicación:
// 1. Arreglos Tipados: Se define un arreglo que solo puede contener elementos de tipo number.
let numeros: number[] = [1, 2, 3, 4, 5];
console.log(`Números: ${numeros}`);
// 2. Arreglo con Múltiples Tipos: Se muestra cómo definir un arreglo que puede contener elementos de diferentes tipos utilizando union types.
let mezcla: (number | string | boolean)[] = [1, "dos", true, 4, "cinco", false];
console.log(`Mezcla: ${mezcla}`);
// 3. Objeto con Tipos Específicos: Se define un objeto con propiedades de tipos específicos.
let persona: { nombre: string; edad: number; activo: boolean } = {
    nombre: "Ana",
    edad: 20,
    activo: true
};
console.log(`Persona: Nombre - ${persona.nombre}, Edad - ${persona.edad}, Activo - ${persona.activo}`);
// 4. Arreglo de Objetos: Se muestra cómo definir un arreglo que contiene múltiples objetos con la misma estructura.
let personas: { nombre: string; edad: number; activo: boolean }[] = [
    { nombre: "Ana", edad: 20, activo: true },
    { nombre: "Luis", edad: 25, activo: false },
    { nombre: "María", edad: 30, activo: true }
];
console.log("Personas:");
personas.forEach(p => {
    //foreach es un método de los arreglos en JavaScript que ejecuta una función proporcionada una vez por cada elemento del array, 
    // esto significa que recorre cada elemento del arreglo y ejecuta la función para cada uno de ellos.
    console.log(`Nombre - ${p.nombre}, Edad - ${p.edad}, Activo - ${p.activo}`);
});
// 5. Uso de Interfaces: Se define una interfaz para describir la estructura de un objeto y se utiliza para tipar un arreglo de objetos.
interface IPersona {
    nombre: string;
    edad: number;
    activo: boolean;
}
let empleados: IPersona[] = [
    { nombre: "Carlos", edad: 28, activo: true },
    { nombre: "Sofía", edad: 32, activo: false }
];
console.log("Empleados:");
empleados.forEach(e => {
    console.log(`Nombre - ${e.nombre}, Edad - ${e.edad}, Activo - ${e.activo}`);
}
);
//Conclusión: El uso de arreglos en desarrollo de aplicaciones moviles mejora la organización y manipulación de datos, tener claro el concepto de interfaces, modelos, entidades, etc, nos permite estructurar mejor nuestro código,
// facilitando el desarrollo y mantenimiento de nuestras aplicaciones.

