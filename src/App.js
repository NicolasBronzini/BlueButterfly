import './style.css';
import NavBar from './component/navbar';

import ItemListContainer from './component/container/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './component/ItemDetailContainer';

import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";


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
       </Routes>

    </BrowserRouter>
       
  );
}

export default App;