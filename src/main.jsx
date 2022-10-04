import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import CartContext from "./component/Context/CartContext";


ReactDOM.createRoot(document.getElementById('root')).render(

    <CartContext>
        <App />
    </CartContext>

)