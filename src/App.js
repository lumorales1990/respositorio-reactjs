import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className='App'>
        <Navbar/>   
        <ItemListContainer>
          <h2>Bienvenidos a Mendoza Argentina.</h2>
          <p>
            Un lugar para descansar y disfrutar tus vacaciones.
          </p>
          <img className='imagen' src="https://i.ytimg.com/vi/anXGaAcYXsE/maxresdefault.jpg"  height="40%" width="40%">
          </img>
        </ItemListContainer>
    </div>
      
  );
}

export default App;
