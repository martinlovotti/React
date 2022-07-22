import './App.css';
import './components/Section.css';
import NavBar from './components/NavBar';
import Section from './components/Section';
import product from './components/ItemCount';
import ItemCount from './components/ItemCount';
function App() {
  return (
    <div>
      <NavBar />
      <Section />
      <ItemCount />
    </div>
    
  );
}

export default App;