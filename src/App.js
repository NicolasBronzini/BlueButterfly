import { Routes,Route,BrowserRouter,} from "react-router-dom";
import './style.css';
import NavBar from './component/navbar';
import NotFound from './component/NotFound';
import Cart from "./component/CartContainer";
import CartContext from './component/Context/CartContext';
import ItemListContainer from './component/container/ItemListContainer';
import ItemDetailContainer from './component/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";



function App() {
  return (
  <CartContext>
    <BrowserRouter>
      <NavBar/>
     
       <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element ={<ItemListContainer/>}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
        <Route path='*' element={<NotFound></NotFound>}/>
       </Routes>
        <div  className='NosotrosContainer' id='nosotros'>
          <h1>Un poco sobre nosotros</h1>
          <div>
          <p> Somos una empresa de venta de productos de la mejor calidad y con el mejor precio que podes encontrar. Nuestra idea de negocio es que no necesites mas nada que nuestra pagina para poder comprar todo lo que ncecesitas. <br>
          </br> Por eso vendemos todo tipo de producto y de cualquier tipo de categoria. Tanto ropa de hombre, como mujer. A su vez tenemos electronicos y joyas. No te lo podes perder </p>
          <img src='./component/assets/logo.png'></img>
          </div>
        </div>
    </BrowserRouter>
  </CartContext>
       
  );
}

export default App;