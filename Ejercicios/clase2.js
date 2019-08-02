const { agregarCliente, eliminarCliente, modificarCliente, listaCliente: listita_Clientes } = require("./modulos/funcionesExtra");


agregarCliente("Fran");
agregarCliente("Juan");
agregarCliente("Jessi");
console.log("\n\n");
console.log(`Listado original: ${listita_Clientes}`);
console.log("\n\n");
eliminarCliente("Fran");
console.log(`cliente eliminado: ${listita_Clientes}`);
console.log("\n\n");
modificarCliente("Juan", "Mateo");
console.log(`cliente modificado ${listita_Clientes}`);