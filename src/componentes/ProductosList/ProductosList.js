import Productos from '../Productos/Productos';

const ProductosList = ({data = [] }) => {
    return(
        data.map(producto => <Productos key={producto.id} info={producto}/>)
    );
}

export default ProductosList;