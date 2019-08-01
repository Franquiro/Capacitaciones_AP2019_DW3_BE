const {agregarCliente,eliminarCliente,modificarCliente} = require("./modulos/funcionesExtra");
let listita_Clientes = [];

agregarCliente("Fran",listita_Clientes);
agregarCliente("Juan",listita_Clientes);
agregarCliente("Jessi",listita_Clientes);
console.log("\n\n\n");
console.log(`Listado original: ${listita_Clientes}`);
console.log("\n\n\n");
listita_Clientes= eliminarCliente("Fran",listita_Clientes);
console.log(`cliente eliminado: ${listita_Clientes}`);
console.log("\n\n\n");
listita_Clientes = modificarCliente("Juan","Mateo",listita_Clientes);
console.log(`cliente modificado ${listita_Clientes}`);