console.log("wololooooo");
const http = require('http'); // importa el módulo http
const port = 3000; // defino el puerto 

// creamos la funcion que maneja los pedidos
const handle = (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/javascript' // tengo que especificar el tipo de dato de la respuesta.
    });
    res.end('<h1>Hola Mundo</h1>'); //envia el mensaje
};

// creamos el objeto servidor
const server = http.createServer(handle);

// ponemos el servidor a escuchar pedidos
server.listen(port, err => {
    if (err) {
        return console.log('explotó algo al poner el server a la escucha', err)
    }

    console.log(`el servidor esta a la escucha en el puerto ${port}`)
});