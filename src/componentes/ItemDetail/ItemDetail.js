import  './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';



const ItemDetail = ({data}) => {

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }




    return (
        <div className="container">
            <div className="detail">
                <img className="detail__img" src={data.imge} alt=""/>
                <div className="content">
                    <h1>{data.title}</h1>
                    <ItemCount initial={1} stock={5} onAdd={onAdd}/>
                </div>
            </div>

        </div>
    )
}

export default ItemDetail;