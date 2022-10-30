import './Productos.css';

import { Link } from 'react-router-dom';

const Productos = ({info}) => {
    return(
        <Link to={`/detalle/${info.id}`} className="productos">
            <img src={info.image} alt="" />
            <p>{info.title}</p>
        </Link>
    )
}

export default Productos;