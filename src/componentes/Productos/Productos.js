 import './Productos.css';

const Productos = ({info}) => {
    return(

        <a href="" className="producto">
            <img src={info.image} alt=""/>
            <p>{info.title}</p>
        </a>
    );
}

export default Productos;