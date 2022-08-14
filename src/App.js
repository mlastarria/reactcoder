import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext'

function App() {

  return (
    <CartContextProvider>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <div className='container-fluid'>
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/categoria' element={<ItemListContainer />} />
              <Route path='/categoria/:categoria' element={<ItemListContainer />} />
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </CartContextProvider>
  );
}

export default App;
