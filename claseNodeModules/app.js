//incluir el rutas del directorio
const path = require('path'); //se encarga de verificar los patrones de directorios segun sistema operativo.
const fs = require('fs');
const dir = path.join(__dirname, '..', 'Ejercicios'); //arma la direccion segun el OS
console.log(dir);
const ruta_archivo = path.join(__dirname, 'res', 'datos.txt');
// const ruta_imagen = '/home/fran/Pictures/20180129_143432.jpg';
let datos;
fs.readFile(ruta_archivo, (err, data) => {
    // funcion de callback asincrónica recibe err y data, en data guarda los datos del archivo que leo, en err me avisa si falla la lectura.
    console.log('error:');
    console.log(err);
    console.log("data:");
    console.log(data); // todo fruta porque no sabe que tipo de dato tiene. devuelve un buffer
    console.log(data.toString());
    datos = JSON.parse(data.toString());
    console.log(datos);
    // datos.push({ nombre: 'Mateo', apellido: 'Cernaz' });
    // fs.writeFile(ruta_archivo, JSON.stringify(datos), e => console.log(e));
});
datos.push({ nombre: 'Mateo', apellido: 'Cernaz' });

fs.writeFile(ruta_archivo, JSON.stringify(datos), e => { // funciona igual que el write de C, si el archivo existe, lo borra y reescribe
    if (e) {
        console.log('sentate pete.');
    }

});
// fs.readFile(ruta_imagen, (e, d) => {
//     console.log('imagen');
//     console.log(d);
// });