export default class Storage {
    constructor() {
        this.id = 1;

    }
    getData() {
        //let pelis = JSON.parse(localStorage.getItem('pelis')); //parse sirve par convertirlo a un objeto de javascrip
        let pelisJson = localStorage.getItem("pelis");
        // console.log(pelisJson);
        let parseJson = JSON.parse(pelisJson);
        // console.log(parseJson);
        let pelis = ((pelisJson != undefined) || (pelisJson != null)) ? parseJson : null;
        //console.log(pelis);
        if (pelis === null || pelis.length < 1) {
            pelis = [
                {
                    id: 0,
                    title: "Desarrollo web",
                    description: "JorgeJimenez.com"
                }
            ]
            this.id = 1;
        } else {

            this.id = (pelis[(pelis.length - 1)].id) + 1;
        }
        return pelis;

    }
    // sacar el id guardado
    getLastId() {
        return this.id;

    }

    save(data) {
        localStorage.setItem('pelis', JSON.stringify(data));

    }

}