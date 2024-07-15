import './App.css';
import image from './shopping.jpg';
import man from './man.jpg';
import { GroceryList } from './GroceryList';


function App() {
  return (
    <div className='app'>
      <div className="container">
        <img src={ image } alt="shopping" width='230px' />  
      </div>
      <div className="container">
        <h1>Grocery list</h1>
      </div>
      <GroceryList />
      <div className="container">
        <img src={ man } alt='shopping man' width='200px'/> 
      </div>
    </div>
  );
}

export default App;
