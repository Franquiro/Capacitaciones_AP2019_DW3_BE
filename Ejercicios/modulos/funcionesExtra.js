const listaCliente=[];
// function agregarCliente(nombre="indefinido", clientes){
//     clientes.push(nombre);
//     console.log(`Cliente ${nombre} ingresado con éxito`);
//     return;
// }
const agregarCliente = nombre =>listaCliente.push(nombre);
// const eliminarCliente = (c)=>listaCliente.filter(e=>e!=c);
const eliminarCliente = c =>{
    const i = listaCliente.indexOf(c);
    listaCliente.splice(i,1);
}
// const modificarCliente=(n,nN,l)=>l.map(c=>c==n?nN:c);
const modificarCliente = (n,nN)=>{
    const i = listaCliente.indexOf(n);
    if(i>=0) listaCliente[i] = nN;
}


module.exports = {agregarCliente,eliminarCliente,modificarCliente,listaCliente};