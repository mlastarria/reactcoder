import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './components/CartWidget';
import Cart from './components/Cart';


function App(){

  return(

    <div className="App">

      <BrowserRouter>

      <NavBar />
      <div className='container'>
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/categoria' element={<ItemListContainer />}/>
        <Route path='/categoria/:categoria' element={<ItemListContainer />}/>
        <Route path='/item/:id' element={<ItemDetailContainer />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      
      </div>


      </BrowserRouter>  
    
      
    </div>
    
  );

}
 
export default App;
