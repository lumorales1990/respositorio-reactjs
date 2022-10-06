


import ItemDetail from '../ItemDetail/ItemDetail';
import React, {useEffect, useState} from 'react';


const producto = 
    {id: 1, imge: "https://i.pinimg.com/236x/f6/ee/c5/f6eec5056ee56ba7624fc593857ca5bd.jpg", category:"pantalones", title:"PANTALON SASTRERO"};

const ItemDetailContainer = () => {

    const [data, setData] = useState({});
    
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
               resolve(producto); 
            }, 1000);
        });
        getData.then(res => setData(res));
    }, [])
    
    return(
        <ItemDetail data={data}/>
    );
} 

export default ItemDetailContainer;


