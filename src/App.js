 
import './App.css';
import Home from './components/home/Home'
import { Routes,Route } from 'react-router-dom';


import ProductCart from './components/cart/ProductCart';
import BuyProduct from './buy/BuyProduct';

function App() {
  return (
     
    <>
     
    <Routes>
    <Route path='/' element={<Home/>}/>
   <Route path='/home' element={<Home/>}/>
   <Route path='/cart' element={<ProductCart/>}/>
  <Route path='/buy' element={<BuyProduct/>}/>
    </Routes>
    </>
  );
}

export default App;
