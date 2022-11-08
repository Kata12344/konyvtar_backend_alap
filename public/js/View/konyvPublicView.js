class KonyvPublicView{
    #elem;
    constructor(elem, szuloElem){
        this.#elem=elem;
        szuloElem.append(`
        <div class="konyv">
        <p class="cim">${elem.cim}</p>
        <p>${elem.szerzo}</p>
        <img src="${elem.kep}" width="60%" height="50%">
        <p>${elem.ar} Ft</p>
        <button id="kosarba${elem.id}">Kosárba</button>
        </div>`);
        this.elemElem = szuloElem.children("div:last-child");

        this.kosarbaElem=$(`#kosarba${elem.id}`);

        this.kosarbaElem.on("click",()=>{
            //console.log("Kosárba rak a view-ban")
            this.kattintastrigger("kosarba");
        });
    
    }

    kattintastrigger(esemenyNeve){
        //console.log(this.#elem)
        const esemeny = new CustomEvent(esemenyNeve,{detail:this.#elem})
        window.dispatchEvent(esemeny);
    }
}

export default KonyvPublicView;