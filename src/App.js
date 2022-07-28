import './App.css';
import './components/Carousel.css';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import ItemListContainer from './components/ItemListContainer';
/* import product from './components/ItemList';
import ItemCount from './components/ItemList'; */
function App() {
  return (
    <div>
      <NavBar />
      <Carousel />
      <ItemListContainer/>
    </div>
    
  );
}

export default App;