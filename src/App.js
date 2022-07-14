import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemList from './components/ItemList';

import 'bootstrap/dist/css/bootstrap.min.css';

function App(){

  return(

    <div className="App">
      <NavBar />

      <div className='container'>
      <ItemListContainer />
      <ItemList />
      </div>


      
    </div>
    
  );

}
 
export default App;
