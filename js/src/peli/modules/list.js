import deleteOfList from "./delete.js";
import editOfList from "./edit.js";
export default class List {
    constructor() {
        // SELECCIONAR ELEMENTOS DEL DOM A USAR
        this.content = document.querySelector("#content");
    }
    peliTemplate(peli) {
        return `<article class="peli-item" id="peli-${peli.id}">
            <h3 class="title">${peli.title}</h3>
            <p class="description">${peli.description}</p>
            <button class="edit" data-id="${peli.id}">Editar</button>
            <button class="delete" data-id="${peli.id}">Borrar</button>
        </article>
        `;

    }
    /*addToList(peli, lisOfPeli) {
        // PLANTILLA DE PELICULA A AGG
        let peli_html = this.peliTemplate(peli);
        // AÑADIR LA PELICULA AL CONTENIDO EN EL DOM
        this.content.innerHTML += peli_html;

        // MOSTRAR LISTADO DE PELICULAS
        this.show(lisOfPeli);

    }*/

    show(pelis) {
        // VACIAR EL DOM DEL CONTENEDOR PRINCIPAL
        this.content.innerHTML = "";

        // RECORRER Y MOSTRAR TODOS LOS OBJETTOS/PELICULAS DEL localStorage
        pelis.forEach(peli => {
            this.content.innerHTML += this.peliTemplate(peli);


        });

        // FUNCIONALIDAD BOTONES DE BORRADO 
        deleteOfList();

        // FUNCIONALIDAD BOTONES DE EDICION
        editOfList();


    }

}