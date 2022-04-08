import './App.css';
// import Footer from './Components/Footer';
import { Navbar } from './Components/Navbar';
import {HomeAll} from './Components/HomeAll'
import { Routes, Route } from 'react-router-dom';
import { Tshirts } from './Components/Tshirts';
import { Wishlist } from './Components/Wishlist';
import { Profile } from './Components/Profile';
import { useSelector } from "react-redux";
import { Bag } from './Components/Bag';

function App() {
  const isAuth = useSelector((state) => state.isAuth)
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={ <HomeAll/> } />
        <Route path='/men-tshirt' element={ <Tshirts/> } />
        <Route path='/wishlist' element={ isAuth ? <Wishlist/> : <Profile/> } />
        <Route path='/profile' element={ <Profile/> } />
        <Route path='/bag' element={ isAuth ? <Bag/> : <Profile/> } />
      </Routes>
    </div>
  );
}

export default App;
