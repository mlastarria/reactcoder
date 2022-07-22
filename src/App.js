import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
// import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){

  return(

    <div className="App">
      <NavBar />

      <div className='container'>
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />
   
      </div>


      
    </div>
    
  );

}
 
export default App;
