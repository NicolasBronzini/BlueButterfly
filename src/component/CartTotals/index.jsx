import React from 'react';
import { useContext } from 'react';
import { Shop } from '../context/CartContext';
import 'stylecss';

const CartTotals = () => {

  const {totalPrice} = useContext(Shop);

  return (
    <aside className={styles.cartTotals}>
      <p>total: {totalPrice().toFixed(2)}€</p>
    </aside>
  )
}

export default CartTotals