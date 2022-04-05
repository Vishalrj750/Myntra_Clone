import './App.css';
import Footer from './Components/Footer';
import { Navbar } from './Components/Navbar';
import {HomeAll} from './Components/HomeAll'

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeAll />

      <Footer/>
    </div>
  );
}

export default App;
