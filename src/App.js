import { Routes,Route,BrowserRouter,} from "react-router-dom";
import './style.css';
import NavBar from './component/navbar';
import Footer from "./component/footer";
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
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </CartContext>
       
  );
}

export default App;