import './App.css';
// import Footer from './Components/Footer';
import { Navbar } from './Components/Navbar';
import {HomeAll} from './Components/HomeAll'
import { Routes, Route } from 'react-router-dom';
import { Tshirts } from './Components/Tshirts';

function App() {
  return (
    <div className="App">
      <Navbar />
<<<<<<< HEAD
      <Routes>
        <Route path='/' element={ <HomeAll/> } />
        <Route path='/men-tshirt' element={ <Tshirts/> } />
      </Routes>
=======
      <br />
      <br />
      <br />
      <br />
      <br />
      
      
    
      <HomeAll />

      <Footer/>

>>>>>>> 7dd856920fb26a7742ec2815d4b114b21f396ac9
    </div>
  );
}

export default App;
