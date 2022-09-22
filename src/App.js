import './style.css';
import NavBar from './component/navbar';

import ItemListContainer from './component/container/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './component/ItemDetailContainer';

import React from "react";

import {

  Routes,
  Route,
 
  BrowserRouter,
} from "react-router-dom";
import NotFound from './component/NotFound';


function App() {
  return (
   
    <BrowserRouter>
      <NavBar/>
      {/* <ItemListContainer greeting={"BlueButterfly"}/> */}
      <div className="App"> 
        <ItemDetailContainer/>
       </div>
       <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element ={<ItemListContainer/>}/>
          <Route path='/detail/:productId' element={<ItemListContainer/>}/>
        <Route path='*' element={<NotFound></NotFound>}/>
       </Routes>

    </BrowserRouter>
       
  );
}

export default App;