import React, { useContext } from 'react';
import ItemCart from '../ItemCart';
import { Shop } from '../Context/CartContext';
import './style.css';

const CartContainer = () => {


  const {cart, removeItem, clearCart} = useContext(Shop);

  const productsInCart = [];

  cart.forEach(item => {
    productsInCart.push(item);
  });

  console.log(productsInCart)


  return (
    <>
    <div  className='container' >
      <section>
        {cart.map(product => {
          return <ItemCart key={product.id} product={product}/>
        })}
      </section>
      <aside >

      </aside>
    </div>
    </>

  )
}

export default CartContainer;