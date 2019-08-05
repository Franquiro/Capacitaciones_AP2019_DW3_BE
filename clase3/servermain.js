const express = require('express'); // pido el modulo express guardo un objeto gigante llamado express.
const bodyParser = require('body-parser');
console.log("LISTENING...");
const app = express(); //crea el servidor. todavia no hace nada.
const actores = [{
    id: 1,
    nombre: 'Robin',
    apellido: 'Williams'
}, {
    id: 2,
    nombre: 'Bill',
    apellido: 'Murray'
}, {
    id: 3,
    nombre: 'George',
    apellido: 'Clooney'
}];
const peliculas = [{
    id: 1,
    nombre: 'Bicentenial Man',
    id_actor: 1,
    anioDeLanzamiento: 1999
}, {
    id: 2,
    nombre: "Flubber",
    id_actor: 1,
    anioDeLanzamiento: 1994
}];


//body parser. para poder leer los body de los posts
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// creo endpoints de express (rutas)
app.get('/', (req, res) => {
    res.send('<h1>Hola Mundo</h1>');
});

app.get('/actores', (req, res) => {

    res.json(actores);
})
app.get('/peliculas', (req, res) => {
    res.json(peliculas);
});

//obtener la pelicula tal que el id sea 1
/*
app.get('/peliculas/:id=1', (req, res) => {
    res.json(peliculas.filter(e => e.id == 1));
});
*/
app.get('/actores/:id', (req, res) => {
    // req.params es un objeto que tiene todos los parametros que recibe la pagina.
    // se define un parametro con los :
    console.log(req.params);
    const actor = actores.find(a => a.id == req.params.id);
    if (actor)
        res.json(actor);
    else
        res.status(404).send("le pifiaste querido... a tu artista no lo conoce ni la madre."); // si no quiero mandar mensajes, lo termino con .end() en lugar de .send("mensaje")

});

app.post('/actores', (req, res) => {
    console.log(req.body);
    const id = idMayor() + 1;
    const actor = req.body;
    actor.id = id;
    console.log(id);
    actores.push(actor);
    res.send(actor);
});
function idMayor() {
    let mayor = 0;
    actores.forEach(a => { a.id > mayor ? mayor = a.id : '' });
    return mayor;
}
// metodos de http para hacer pedidos

// get -> busca algo
// post -> crea algo
// put -> anexa algo o edita
// delete -> borra algo

// EL NAVEGADOR POR DEFAULT HACE UN GET AL DOMINIO QUE LE ESCRIBA. accion inmutable.

app.listen(3000); // deja el servidor escuchando en el puerto 3000


//RECURSO (informacion guardada en el formato que sea)
    // objeto
    // archivo
    // coleccion (mongoDB)
    // etc
