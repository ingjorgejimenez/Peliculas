import Storage from "./storage.js";
import List from "./list.js";
export default function () {
    //crear objetos
    const storage = new Storage();
    const list = new List();
    //Datos de las peliculas disponibles
    let pelis_stored = storage.getData();
    let pelis_viewed = document.querySelectorAll("#content .peli-item");
    //recorrer peliculas mostradas
    pelis_viewed.forEach(peli => {
        console.log(peli.id);
        // let selector = "#" + peli.id + " .delete";
        //CAPTURAR EL BOTTON
        let delete_btn = peli.querySelector('.delete');
        //APLICAR UN EVENTO DE CLICK
        delete_btn.onclick = function () { /*para que sirva el this se deba agg la funcion clasica y no de flecha */
            //CONSEGUIR ID DE LA PELI QUE QUIERO BORRAR
            const peli_id = this.getAttribute('data-id');
            //FILTAR EL ARRAY PARA QUE ELIMENE LA QUE BORRE
            const new_pelis_stored = pelis_stored.filter((peli) => peli.id !== parseInt(peli_id));
            //ACTUALIZAR EL LOCAL STORAGE
            storage.save(new_pelis_stored);
            //VOLVER A MOSTRAR LISTADO ACTUALZADO
            list.show(new_pelis_stored);
        }
    })

}