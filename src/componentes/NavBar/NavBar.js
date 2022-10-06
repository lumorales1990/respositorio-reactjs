import CartWidget from '../CartWidget/CartWidget';
import {NavLink} from 'react-router-dom';
import './NavBar.css';


const Navbar = () => {

    return(
        <div className="container">
            <img className="logo" src="https://cdn-icons-png.flaticon.com/512/68/68292.png" alt="" height="70px" width="70px"/>
        <nav className="nav">
            <div className="nav__1">
                <NavLink className="nav__link1" to="/">INICIO</NavLink>
            </div>
            <ul className="nav__list">
                <li>
                    <NavLink className="nav__link2" to="/producto/pantalones">PANTALONES</NavLink>
                </li>
                <li>
                    <NavLink className="nav__link3" to="/producto/remeras">REMERAS</NavLink>
                </li>
                <li>
                    <NavLink className="nav__link4" to="cart">
                    <CartWidget/>
                    </NavLink>
                </li>
            </ul>
        </nav>
 </div>  
);
}

export default Navbar;