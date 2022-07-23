import './App.css';
import './components/Carousel.css';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import product from './components/ItemCount';
import ItemCount from './components/ItemCount';
function App() {
  return (
    <div>
      <NavBar />
      <Carousel />
      <ItemCount />
    </div>
    
  );
}

export default App;