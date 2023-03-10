//file import

//library import
import { Routes, Route } from 'react-router-dom';

//CSS import
import './App.css';

//components import

//pages import
import Landingpage from './pages/Landingpage';
import Beerlist from './pages/Beerlist';
import Beerdetail from './pages/Beerdetail';
import RandomBeerPage from './pages/RandomBeerPage';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Landingpage/>}/>
          <Route path='/beers' element={<Beerlist/>}/>
          <Route path='/beers/:beerId' element={<Beerdetail/>}/>
          <Route path='/beers/random' element={<RandomBeerPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
