import Storage from "./storage.js";
import List from "./list.js";
export default function () {
    //crear objetos
    const storage = new Storage();
    const list = new List();
    //Datos de las peliculas disponibles
    let pelis_stored = storage.getData();
    let pelis_viewed = document.querySelectorAll(".peli-item");
    //recorrer peliculas
    pelis_viewed.forEach(peli => {
        console.log(peli.id);
        //captura boton
        let edit_btn = peli.querySelector('.edit')
        //aplicar evento al boton
        edit_btn.onclick = function () {
            //conseguir id de la peli que queremos editar
            const peli_id = parseInt(this.getAttribute('data-id'));
            //quitar boton
            edit_btn.remove();
            peli.querySelector(".delete").remove;

            //añadir un trozo de html debajo de los botones
            let peli_edithtml = `
            <div class=edit_form>
                <h3 class="title">Editar pelicula</h3>
                <form>
                    <input type="text" class="edited_title" value="${peli.querySelector(".title").innerHTML}"/>
                    <textarea class="edited_description">${peli.querySelector(".description").innerHTML}</textarea>
                    <input type="submit" class="update" value="Actualizar"/>
                </form>
            </div>
            `;
            peli.innerHTML += peli_edithtml;
            //seleccionar el boton de actualizar
            let update_btn = peli.querySelector(".update");
            //aplicar evento click
            update_btn.onclick = function (e) {
                e.preventDefault();//para que no envie el formulario
                //buscar el indice de la pelicula actualizar
                let index = pelis_stored.findIndex(peli => peli.id === peli_id);
                //guardar objedo dentro del indice
                pelis_stored[index] = {
                    id: peli_id,
                    title: peli.querySelector(".edited_title").value,
                    description: peli.querySelector(".edited_description").value
                };
                console.log(pelis_stored);
                //actualizar el local storage

                storage.save(pelis_stored);

                //volver a mostrar el listado actualizado
                list.show(pelis_stored);
                return false;
            }

        }
    })

}