class KonyvModel {
    #konyvekTomb = [];

    constructor(token) {
        this.token =token;
        console.log("KonyvModel");
    }

   /*  adatModosit(adat){
        console.log("modell modosit",adat)
    }
    adatTorol(adat){
        console.log("modell töröl", adat)
    } */

    adatBe(vegpont, myCallBack) {
        fetch(vegpont, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                this.#konyvekTomb = data;
                console.log(this.#konyvekTomb);
                myCallBack(this.#konyvekTomb);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    adatUj(vegpont, adat) {
        fetch(vegpont, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "X-CSRF-TOKEN": this.token,
            },
            body: JSON.stringify(adat),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Új adat:'+ data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    adatModosit(vegpont, adat) {
        console.log(adat);
        console.log("MÓDOSÍT" + vegpont);
        vegpont += "/" + adat.id;
        fetch(vegpont, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "X-CSRF-TOKEN": this.token,
            },
            body: JSON.stringify(adat),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('MÓDOSÍTOTTAM'+ data.updatedAt);
                
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    adatTorol(vegpont, adat) {
        console.log("TÖRÖLTEM: ");
        console.log(adat);
        vegpont += "/" + adat.id;
        console.log(vegpont);
        fetch(vegpont, {
            method: 'DELETE',
            headers: {
                "X-CSRF-TOKEN": this.token,
            },
            body: JSON.stringify(adat),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('SIKERES TÖRLÉS');
                
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

export default KonyvModel;