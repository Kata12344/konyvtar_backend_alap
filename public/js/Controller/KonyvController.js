import KonyvekView from "../View/KonyvekView.js";
import KonyvModel from "../Model/KonyvModel.js";
import KonyvekPublicView from "../View/konyvekPublicView.js";

class KonyvController {
    constructor() {
        //console.log("KonyvController");
        const token = $('meta[name="csrf-token"]').attr("content"); 
        const konyvmodel = new KonyvModel(token);
        this.vegpont = "konyvek";
        $("#admin").on("click", ()=>{
            konyvmodel.adatBe(this.vegpont, this.konyvAdatok);
        });

        $("#pub").on("click", ()=>{
            konyvmodel.adatBe(this.vegpont, this.konyvPublicAdatok);
        })
        

        $(window).on("modosit",(event)=>{
            console.log("controllerben módosít", event.detail)
            konyvmodel.adatModosit(this.vegpont,event.detail)
        })
        $(window).on("torol",(event)=>{
            console.log("controllerben töröl", event.detail)
            konyvmodel.adatTorol(this.vegpont, event.detail)
        })
    }

    konyvPublicAdatok(tomb){
        const szuloElem =$("main");
        new KonyvekPublicView(tomb, szuloElem);
    }

    konyvAdatok(tomb) {
        const szuloElem =$("main");
        new KonyvekView(tomb, szuloElem);
        //console.log(tomb);
    }
}

export default KonyvController;