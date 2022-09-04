import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './style.css';
import ItemDetailContainer from './components/ItemDetailContainer.js'

const App = () => {
  return (
    <div name="background" class="p-3 mb-2 bg-dark text-white">
    <div className="App">
 <NavBar/>




         <ItemDetailContainer/>

      <header className="App-header">
      </header>
          </div>
      </div>
  );
}

export default App;
