import './App.css';
// import Footer from './Components/Footer';
import { Navbar } from './Components/Navbar';
import {HomeAll} from './Components/HomeAll'
import { Routes, Route } from 'react-router-dom';
import { Tshirts } from './Components/Tshirts';
import { Wishlist } from './Components/Wishlist';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={ <HomeAll/> } />
        <Route path='/men-tshirt' element={ <Tshirts/> } />
        <Route path='/wishlist' element={ <Wishlist/> } />
      </Routes>
    </div>
  );
}

export default App;
