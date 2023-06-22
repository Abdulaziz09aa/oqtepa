import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './router/home/Home';
import About from "./router/about/About"
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Contact from './router/contact/Contact'


function App() {

  

  return (
    <div className="App">
       <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Routes>
      <Footer/>  
    </div>
  );
}

export default App;
