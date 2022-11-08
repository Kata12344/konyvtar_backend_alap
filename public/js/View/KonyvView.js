class KonyvView {
    #elem;
    constructor(elem, szuloElem) {
        // console.log("KonyvView");
        this.#elem=elem;
        //console.log(elem);
        szuloElem.append(`<tr>
                <td>${elem.id}</td>
                <td>${elem.cim}</td>
                <td>${elem.szerzo}</td>
                <td>${elem.kep}</td>
                <td>${elem.ar} Ft</td>
                <td><button id="mod${elem.id}">Módosít</button></td>
                <td><button id="del${elem.id}">Töröl</button></td>
            </tr>`)

    this.sorElem = szuloElem.children("tr:last-child");
    console.log(this.sorElem)
        
    //gombok eseménykezelői 
    this.cimElem = $(``)
    this.modositElem =$(`#mod${elem.id}`);
    this.torolElem =$(`#del${elem.id}`);

    this.modositElem.on("click",()=>{
        console.log("Módosít a View-ban")
        this.#elem.cim = "Bármi"
        this.kattintastrigger("modosit");

    });

    this.torolElem.on("click", ()=>{
        console.log("Töröl a Viewban")
        this.kattintastrigger("torol");
    });
    }
   
  
    kattintastrigger(esemenyNeve){
        //console.log("Módosít a triggerben")
        //const esemeny = new CustomEvent(esemenyNeve,{detail:this.#elem.id})
        
        const esemeny = new CustomEvent(esemenyNeve,{detail:this.#elem})
        window.dispatchEvent(esemeny);
        //console.log("Töröl")
        //window.dispatchEvent(esemeny2);
    }
   

}

export default KonyvView;