import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return(
        <div className="container">
        <nav className="nav">
            <div className="nav__1">
                <NavLink className="nav__link1" to="/">INICIO</NavLink>
            </div>
            <ul className="nav__list">
                <li>
                    <NavLink className="nav__link1" to="/remeras/REMERAS">REMERAS</NavLink>
                </li>
                <li>
                    <NavLink className="nav__link1" to="/pantalones/PANTALONES">PANTALONES</NavLink>
                </li>
                <li>
                    <NavLink className="nav__link1" to="cart"></NavLink>
                    <CartWidget/>
                </li>
            </ul>
        </nav>
 </div>  
);
}

export default Navbar;