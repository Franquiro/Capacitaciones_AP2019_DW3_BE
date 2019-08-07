function buscarListado(id = null) {
    const tabla = document.querySelector('#actores tbody');
    let url;
    if (id) {
        url = `http://localhost:3000/actores/${id}`;
    }
    else {
        url = `http://localhost:3000/actores`;
    }
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(actores => {
            console.log(actores);
            tabla.innerHTML = `
        <tr>
            <th> id</th>
            <th>Nombre</th>
            <th>Apellido</th>
        </tr>`;


            if (id) {
                tabla.innerHTML += `
                <tr>
                    <td>${actores.id}</td>
                    <td>${actores.nombre}</td>
                    <td>${actores.apellido}</td>
                </tr>`;
            } else {
                actores.forEach(actor => {
                    tabla.innerHTML += `
                <tr>
                    <td>${actor.id}</td>
                    <td>${actor.nombre}</td>
                    <td>${actor.apellido}</td>
                </tr>`;
                });
            }

        });
}
buscarListado(5);

const form = document.getElementById("crearActor");
form.onsubmit = function (e) {
    e.preventDefault();

    const nuevo = {
        nombre: document.querySelector('input[name="nombre"]').value,
        apellido: document.querySelector('input[name="apellido"]').value
    }

    fetch('http://localhost:3000/actores', {
        method: 'post',
        body: JSON.stringify(nuevo),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {
            const tabla = document.querySelector('#actores tbody');
            tabla.innerHTML += `
            <tr>
                <td>${data.id}</td>
                <td>${data.nombre}</td>
                <td>${data.apellido}</td>
            </tr>`;
        });
}
    // const buscarListado = (id = null) => {

    //     if (id != null) {
    //         const url = 'http://localhost:3000/actores/:id';
    //     }
    //     else {
    //         const url = 'http://localhost:3000/actores';
    //     }

    //     fetch(url)
    //         .then(res => res.json())
    //         .then(actores => {
    //             console.log(actores);



    //             const tabla = document.querySelector('#actores tbody');
    //             tabla.innerHTML = `
    //         <tr>
    //             <th> id</th>
    //             <th>Nombre</th>
    //             <th>Apellido</th>
    //         </tr>`;
    //             actores.forEach(actor => {
    //                 tabla.innerHTML += `
    //             <tr>
    //                 <td>${actor.id}</td>
    //                 <td>${actor.nombre}</td>
    //                 <td>${actor.apellido}</td>
    //             </tr>`;
    //             });



    //         });
    // }

    // buscarListado();