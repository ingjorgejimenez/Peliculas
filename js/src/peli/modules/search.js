import Storage from "./storage.js";
import List from "./list.js";

export default function () {
    //crear los objetos
    const storage = new Storage();
    const list = new List();

    //conseguir los datos de las peliculas
    let content = document.querySelector('#content');
    let search_btn = document.querySelector("#search");

    //Aplicar evento al formulario de busqueda
    search_btn.onclick = (e) => {
        e.preventDefault();
        //conseguir el teto introducido en el campo de busqueda
        let wanted = document.querySelector('#search_field').value;
        //coneguir los datos de peliculas actualizados
        let pelis_stored = storage.getData();
        //Aplicar un filtro de peliculas
        const new_pelis = pelis_stored.filter(peli => {
            return peli.title.toLowerCase().includes(wanted.toLowerCase());

        });
        console.log(new_pelis)
        //Mostrar el listado de coincidencias
        if (new_pelis.length <= 0) {
            content.innerHTML = <div><h2>No hay coincidencias</h2></div>
        } else {
            list.show(new_pelis);
        }

        return false;
    };
}