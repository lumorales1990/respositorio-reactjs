import {promises as fs} from "fs"


class ProductManager {
    constructor(){
        this.patch = "./productos.txt"
        this.products = []
    }

    static id = 0

    addProduct = async (title, description, price, imagen, thubmail, code, stock) => {

        ProductManager.id++


        let newProduct = {
            title,
            description,
            price,
            imagen,
            thubmail,
            code,
            stock,
            id: ProductManager.id
        };

        this.products.push(newProduct)


        await fs.writeFile(this.patch, JSON.stringify(this.products));

    
    };

    readProducts = async () => {
        let respuesta = await fs.readFile(this.patch, "utf-8")
        return JSON.parse(respuesta)

    };

    getProducts = async () => {
        let respuestas = await this. readProducts()
        return console.log(respuestas)
    }

    getProductsById = async (id) => {
        let respuesta1 = await this. readProducts();
        if(!respuesta1.find(product => product.id === id)){
            console.log("No hay en Stock")
        }else{
            console.log(respuesta1.find(product => product.id === id))
        }


    }

    deleteProductById = async (id) => {
        let respuesta1 = await this.readProducts();
        let productfilter = respuesta1.filter(products => products.id != id)
        await fs.writeFile(this.patch, JSON.stringify(productfilter));
        console.log("Este Producto que esta buscando no lo tenemos")

    };


    updateProduct = async ({id, ...producto}) => {
        await this.deleteProductById(id);
        let ProductosTotales = await this.readProducts();
        let Modificados = [{ id, ...producto}, ...ProductosTotales];
        await fs.writeFile(this.patch, JSON.stringify(productfilter));
          
    };

}

const productos = new ProductManager();


//productos.addProduct("Titulo P1", "Description P1", 2500, "imagen P1", "codigo7", 50)
//productos.addProduct("Titulo P2", "Description P2", 5000, "imagen P2", "codigo10", 500)*/


//productos.getProducts()

//productos.getProductsById(4)

//productos.deleteProductById(2)



productos.updateProduct({
    title: 'titulo 1',
    description: 'description 1',
    prece: 25000,
    imagen: 'imagen1',
    code: '50',
    stock: 15,
    id: 2
})






