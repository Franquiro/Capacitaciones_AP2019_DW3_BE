const {saludar:saludito,gritar} = require("./saludo.js");/*El require importa todo lo que exportaste del modulo
pero aun asi hay que guardarlo en algun lado.
en este caso, guardo toda la funcion en "saludito" y uso esa funcion.*/

// abrir node y escribir código
// node -e "//codigo"
// abriendo archivos

/*
for(let i = 0 ; i<5 ; i++){
    console.log(i);
}*/

// VARIABLES PREDEFINIDAS GLOBALES
console.log(__dirname);     // almacena el directorio raiz del primer modulo
console.log(__filename);    // almacena la ruta completa del archivo
// console.log(process);       // información del proceso que se ejecuta.

console.log(process.cwd()); // devuelve el directorio del modulo.
// console.log(process.env.PATH); 
// process.env me habla de las variables de entorno
console.log(process.env.API_TOKEN); // cuando se va a llamar, se declara la variable de entorno y luego se llama al js.
/* en windows, SET API_TOKEN=abc
en linux, directamente API_TOKEN=abc */

console.log(process.argv); //argument values. puedo llamar al archivo y luego pasarle parametros separados por espacios.


// tres tipos de modulos
/*
    Módulos propios de node, ya vienen preinstalados
    Módulos de npm. librerías de terceros (cajas negras).
    Módulos propios.
*/

saludito("fran");
gritar('FRAN');