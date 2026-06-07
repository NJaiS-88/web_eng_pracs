import './App.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import Products from './components/Products';
import Home from './components/Home';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/products' element={<Products></Products>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
