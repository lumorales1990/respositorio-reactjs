class Product{
    constructor(title, description, precio, thubmail, code, sotck) {
        this.title = title;
        this.description = description;
        this.precio = precio;
        this.thubmail = thubmail;
        this.code = code;
        this.sotck = sotck;
    }


    detalles() {
        return(
        this.title &&
        this.description &&
        this.precio &&
        this.thubmail &&
        this.code &&
        this.sotck 
        );
    }
}

class ProductManager{
    constructor() {
        this.id = 0;
        this.lista = [];
    }

    addProduct = function (ropa) {
        if (!this.seEncuentra(ropa.code) && ropa.detalles()) {
            this.id = this.id + 1;
            this.lista.push(ropa);
        }else console.log(`La ropa ${ropa.title} se ingreso en el stock correctamente`);
    };


    getProductById = function (id) {
    return this.lista[id] || (`Not Found`)
};

seEncuentra(code) {
    return this.getProductByCode(code) != undefined;
}

getProductByCode = function (code){
    return this.lista.find((element) => element.code == code);
};

getProducts = function (){
    return this.lista;
   };
}


const p1 = new Product('remera', 'con lentejuelas', 2500, 'url imagen', 'codigo7', 50); 
const p2 = new Product('pantalon', 'acampanado', 15000, 'url imagen', 'codigo10', 100);
const p3 = new Product('campera', 'de jean', 25000, 'url imagen', 'codigo20', 200);
const p4 = new Product('saco', 'de lana', 35000, 'url imagen', 'codigo25', 300);


const tr = new ProductManager();

tr.addProduct(p1);
tr.addProduct(p2);
tr.addProduct(p3);
tr.addProduct(p4);


console.log(tr.getProducts(3));

console.log(tr.getProductById());



