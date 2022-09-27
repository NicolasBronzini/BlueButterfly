import React from 'react'
import { useContext } from 'react';
import { Shop } from '../Context/CartContext';
import  './style.css';
import { FaTimes } from "react-icons/fa";
const ItemCart = ({product}) => {

  const {removeItem} = useContext(Shop);
  
  return (
    <div className="cartContainer">
      <img className='img-cart' src={product.image} alt=""/>
      <dl className="titulo-cart">
        <dt>{product.title}</dt>
      </dl>
      <dl className="precio">
        <dt>{product.price}$</dt>
      </dl>
      <dl className="cantidad">
        <dt>{product.quantity}</dt>
      </dl>
      <dl>
        <button onClick={removeItem} className='btn-quitar'><FaTimes /></button>
      </dl>
    </div>
  )
}

export default ItemCart;