class KosarModell{
    #kosarTomb = []
    
    constructor(){
        this.#kosarTomb = [];
        

    }

    kosarba(elem){
        console.log(elem)
        this.#kosarTomb.push(elem)
    }

    getKosarTomb(){
        return this.#kosarTomb;
    }

    getVegosszeg(){
        var vegosszeg = 0;
        this.#kosarTomb.forEach(tomb => {
            vegosszeg += tomb.ar
        });
        return vegosszeg
    }
}

export default KosarModell;