import KosarModell from "../Model/kosarModell.js";
import KosarView from "../View/kosarView.js";

class KosarController{
    #elem;
    constructor(elem){
        this.#elem=elem;
        const kosarmodell = new KosarModell();

        $("#kosaram").on("click", ()=>{
            $('main').empty();
            console.log(kosarmodell.getKosarTomb())
            this.kosarAdatok(kosarmodell.getKosarTomb(), kosarmodell.getVegosszeg());
            
        });

        $(window).on("kosarba", (event)=>{
            //console.log(event.detail)
            kosarmodell.kosarba(event.detail);
        })
    }

    kosarAdatok(tomb, vegosszeg){
        const szuloElem = $("main");
        new KosarView(tomb, szuloElem, vegosszeg)
    }
}

export default KosarController;