//Las variables y tipos en TypeScript nos permten definir el tipo de dato que una variable puede almacenar, 
// lo que ayuda a prevenir errores y mejorar la legibilidad del código.

//TypeScript consiste en tipado estricto, lo que significa que cada variable debe tener un tipo de dato definido, vamos a entender como se trabaja con este lenguaje
//basandonos en buenas practicas, que proporcionen seguridad y claridad al código, para la creación de aplicaciones robustas y mantenibles en el tiempo.

//Explicación:
// 1. Declaración de Variables con Tipos Específicos: Se declaran variables con tipos específicos 
// como string, number y boolean.
let nombre: string = "Ana";
console.log(`Nombre: ${nombre}`);
let edad: number = 20;
let activo: boolean = true;
console.log(`Nombre: ${nombre}, Edad: ${edad}, Activo: ${activo}`);
// 2. Arreglos y Tuplas: Se muestra cómo definir arreglos (listas) y
//  tuplas (listas con tipos específicos en posiciones específicas).
let lista: number[] = [1, 2, 3, 4, 5];
console.log(`Lista: ${lista}`);
// Definición de una tupla que contiene un string y un number
let tupla: [string, number] = ["Ana", 20];
console.log(`Tupla: ${tupla[0]}, ${tupla[1]}`);
// 3. Enumeraciones (Enums): Se define una enumeración para representar un 
// conjunto de valores constantes.
enum Color { Rojo, Verde, Azul } //aqui los valores por defecto son 0, 1, 2, respectivamente 
console.log(`Color Rojo: ${Color.Rojo}, Color Verde: ${Color.Verde}, Color Azul: ${Color.Azul}`);
// Si queremos asignar valores específicos a los miembros de la enumeración, podemos hacerlo así:
enum ColorConValores { Rojo = 1, Verde = 2, Azul = 4 } //aqui los valores son 1, 2, 4 respectivamente
console.log(ColorConValores);
console.log(`Color Rojo: ${ColorConValores.Rojo}, Color Verde: ${ColorConValores.Verde}, Color Azul: ${ColorConValores.Azul}`);
let colorFavorito: Color = Color.Verde; //Aquí creamos la variable colorFavorito y 
// le asignamos el valor Color.Verde, que corresponde al valor 1 en la enumeración Color.
console.log(`Color Favorito: ${colorFavorito}`); // Muestra "Color Favorito: 1"

// 4. Tipo Any: Se utiliza el tipo any para permitir que una variable pueda contener cualquier tipo de dato, 
// aunque esto debe usarse con precaución. El uso de any se considera una mala práctica en TypeScript, ya que
//  puede llevar a errores en tiempo de ejecución y a la pérdida de las ventajas que ofrece el sistema de tipos 
// de TypeScript.
let cualquierTipo: any = "Hola";
console.log(`Cualquier Tipo: ${cualquierTipo}`);
cualquierTipo = 25; // Ahora puede ser un número 
console.log(`Cualquier Tipo: ${cualquierTipo}`);
cualquierTipo = true; // Ahora puede ser un booleano
console.log(`Cualquier Tipo: ${cualquierTipo}`);

//Conclusión: El uso de variables y tipos en TypeScript mejora la seguridad y la claridad del código,
// facilitando el desarrollo y mantenimiento de aplicaciones robustas.
// TypeScript es un superconjunto de JavaScript que añade tipado estático opcional y
// otras características avanzadas al lenguaje,
// lo que ayuda a los desarrolladores a escribir código más seguro y fácil de mantener.
// Sin embargo, el uso del tipo any debe ser minimizado para aprovechar al máximo las ventajas del sistema de tipos de TypeScript.

