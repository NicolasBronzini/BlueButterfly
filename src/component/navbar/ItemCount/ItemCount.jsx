import './style.css';
import carrito from '../../assets/carrito.png'
import { useState } from 'react';



function BotonCount() {
    let [cantidad, setCantidad] = useState(0);  
let eventoClick = (e) => {
  setCantidad(cantidad + 1)
}
let eventoClick2 = (e) => {
    if( cantidad > 0){
        setCantidad(cantidad - 1)
    }
    
    else  {
       cantidad = 0
    }
}  
  return (
    <>
        <div className='BotonCount'>
            <button className='carrito'>{cantidad}<img src={carrito}/> </button>
            <div className='Contador'>
                <button  onClick={eventoClick}>+</button> <button  onClick={eventoClick2}>-</button>
            </div>    
        </div>
    </>
  );
}

export default BotonCount;

 