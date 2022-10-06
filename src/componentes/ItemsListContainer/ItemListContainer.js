import Title from '../Title/title';
import ItemCount from '../ItemCount/ItemCount';

import ProductosList from '../ProductosList/ProductosList';
import React, {useState, useEffect} from 'react';
import  {useParams} from 'react-router-dom';

const productos = [
    {id:1, image: "https://i.pinimg.com/236x/f6/ee/c5/f6eec5056ee56ba7624fc593857ca5bd.jpg", category:"pantalones", title:"PANTALON SASTRERO"},
    {id:2, image: "https://www.distritomoda.com.ar/sites/default/files/styles/producto_interior/public/imagenes/sastre_camel_1648561396.jpg?itok=9DmIL7kR", category:"pantalones", title:"PAMTALON SASTRERO CARAMELO"},
    {id:3, image: "http://d3ugyf2ht6aenh.cloudfront.net/stores/832/020/products/742d3e3c-b2fa-41f3-8fd5-4a72515d8114-7c3b8230af1293672c16449596529756-640-0.jpeg", category:"pantalones", title:"PAMTALON SASTRERO GRIS"},
    {id:4, image: "https://notilook.com.ar/wp-content/uploads/2018/07/top-a-rayas-Caviar-verano-2019.jpg", category:"remeras", title:"REMERA 1"},
    {id:5, image: "https://amjeans.com.ar/wp-content/uploads/2021/09/remera-el-principito2-300x405.jpg", category:"remeras", title:"REMERA 2"},
    {id:6, image: "https://i.pinimg.com/originals/74/c6/22/74c6225517b5477a3875531241a3ee13.jpg", category:"remeras", title:"REMERA 3"},
];



const ItemListContainer = () =>{

    const [data, setData] = useState([]);

    const {productoId} = useParams();

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
               resolve(productos); 
            }, 1000);
        });

        if (productoId){
           getData.then(res => setData(res.filter(producto => producto.category === productoId)))
        }else{
            getData.then(res => setData(res));    
        }
    }, [productoId])

return(
    <>
    <Title/>
    <ProductosList data={data}/>
    <ItemCount initial={1} stock={5} onAdd={onAdd} />
    </>
);
}

export default ItemListContainer;
