import Storage from "./storage.js";
import List from "./list.js";

export default class Add {
    constructor() {
        // CREAR OBJETOS
        this.storage = new Storage();
        this.list = new List();
        // CONSEGUIR ELEMENTO del DOM a utilizar
        this.title_fiel = document.querySelector("#title");
        this.description_fiel = document.querySelector("#description");
        this.save_btn = document.querySelector("#save");
    }
    peliSave() {
        this.save_btn.onclick = (e) => {
            e.preventDefault();
            // CONSEGUIR DATOS ACTUALIZADO DEL localStorage
            let pelis = this.storage.getData();
            let lastId = this.storage.getLastId();
            console.log(pelis, lastId);
            // DATOS A GUARDAR
            let title = this.title_fiel.value;
            let description = this.description_fiel.value;

            // PEQUEÑA VALIDACION
            if (title != "" || description != "") {

                // CREAR OBJETO A GUARDAR
                let peli = {
                    id: lastId++,
                    title,// asi o asignando es igual ya que toma el valor que contenga
                    description: description
                };
                // AÑADIR AL Array DE OBJETOS
                pelis.push(peli);

                // GUARDAR EN EL LOCALSTORAGE
                //localStorage.setItem('pelis', JSON.stringify(peli));
                this.storage.save(pelis); //hace lo mismo de linea de arriba

                // ACTUALIZAR EL LISTADO
                //this.list.addToList(peli, pelis);
                this.list.show(pelis);


            } else {
                alert("Introduce bien los datos en el formulario");
            }

            console.log("acabas de enviar el formulario = ", title, description);
            return false;
        }
    }
}