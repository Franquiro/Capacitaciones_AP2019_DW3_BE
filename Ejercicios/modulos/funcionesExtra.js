
function agregarCliente(nombre="indefinido", clientes){
    clientes.push(nombre);
    console.log(`Cliente ${nombre} ingresado con éxito`);
    return;
}

const eliminarCliente = (c,l)=>l.filter(e=>e!=c);
const modificarCliente=(n,nN,l)=>l.map(c=>c==n?nN:c);

module.exports = {agregarCliente,eliminarCliente,modificarCliente};