function saludar(nombre){
    console.log(`hola ${nombre}`);
}

/*
EXPORTAR: para que otro archivo pueda tener acceso a
las cosas de este archivo.

"module.exports" permite exportar datos desde el módulo.
por default es un objeto vacío, pero yo puedo asignarle propiedades.
*/
module.exports = {saludar};