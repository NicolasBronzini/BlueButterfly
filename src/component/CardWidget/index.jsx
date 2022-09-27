import React from 'react';
import carrito from '../assets/carrito.png'
import './style.css'

const CartWidget = () => {
  return (
    <>
    <div style={{ position: 'absolute',right: '80px',  top: '5px',}}>
        <img src={carrito} alt="carrito de compras" />
    </div>

    </>
  )
}

export default CartWidget