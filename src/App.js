
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Componentes/Cart/Cart';
import Navbar from './Componentes/NavBar/NavBar';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';




function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/producto/:productoId' element={<ItemListContainer/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/detalle/detalleId' element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
    </>
   );
}

export default App;