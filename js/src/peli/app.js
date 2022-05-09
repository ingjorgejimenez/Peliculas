import Add from './modules/add.js';
import List from './modules/list.js';
import Storage from './modules/storage.js';
import search from './modules/search.js';
//const pelisSave = new Add();
export default class App {
    constructor() {
        // INICIALIZAR PROPIEDADES
        this.add = new Add();
        this.list = new List();
        this.storage = new Storage();
    }
    load() {
        // AÑADIR PELICULAS
        //pelisSave.peliSave();
        this.add.peliSave();

        // CONSEGUIR ARRAY OBJETOS localStorage
        const pelis = this.storage.getData();

        // LISTAR PELICULAS
        this.list.show(pelis);

        // BUSCAR PELICULAS
        search();
        console.log("la aplicacion de pelicula a sido inicializada");
    }

}