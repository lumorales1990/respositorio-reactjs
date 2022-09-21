
import CartWidget from "./CartWidget";

const Navbar = () => {
   return(
      <nav className="bg-gray-600 py-4 relative">
       <div>
       <CartWidget/>
           <div>
               <a href="#" className="text-white lg:mr-7">Inicio</a>
               <a href="#" className="text-white lg:mr-7">Servicios</a>
               <a href="#" className="text-white lg:mr-7">Nosotros</a>
               <a href="#" className="text-white lg:mr-7">Contacto</a>
            </div>
       </div>
      </nav> 
   )
};

export default Navbar;
