
import './App.css';
import Navbar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemsListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Cart from './componentes/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>

    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>} /> 
      <Route path='/producto/:productoId' element={<ItemListContainer/>} /> 
      <Route path='/cart' element={<Cart/>} /> 
      <Route path='/detalle' element={<ItemDetailContainer/>} /> 
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
