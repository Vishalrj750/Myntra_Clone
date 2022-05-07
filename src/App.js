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
import { Checkout } from './Components/Checkout';
import { Thankyou } from './Components/Thankyou';
import {Login} from './Components/Login'
import {Register} from './Components/Register'
import { PaymentPage } from './Components/PaymentPage';
import { RegisterTry } from './Components/RegisterTry';
import { LoginTry } from './Components/LoginTry';



function App() {
  const isAuth = useSelector((state) => state.isAuth)
  
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path='/' element={ <HomeAll/> } />
        <Route path='/men-tshirt' element={ <Tshirts/> } />
        <Route path='/wishlist' element={ isAuth ? <Wishlist/> : <LoginTry/> } />
        <Route path='/profile' element={ <LoginTry/> } />
        <Route path='/register' element={ <Register/> } />
        <Route path='/bag' element={ isAuth ? <Bag/> : <LoginTry/> } />
        <Route path='/payment' element={ <PaymentPage/> } />
        <Route path='/thankyou' element={ <Thankyou/> } />
      </Routes>
    </div>
  );
}

export default App;
