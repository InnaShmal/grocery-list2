import './App.css';
import image_one from './top-image.webp';
import image_two from './bottom-image.webp';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className='app'>
      <div className="container">
      <img src= {image_one} width='200px' alt='grocery'/>
      </div>
      <div className="container">
      <h1>Grocery List</h1>
      </div>
      <GroceryList/>
      <div className="container">
      <img src = {image_two} width='200px' alt='man'/>
      </div>
      
    </div>
  );
}

export default App;
