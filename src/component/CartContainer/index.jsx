import React, { useContext } from 'react';
import ItemCart from '../ItemCart';
import { Shop } from '../Context/CartContext';
import CartTotals from '../CartTotals'
import './style.css';
import { Link } from 'react-router-dom';
const CartContainer = () => {


  const {cart, clearCart} = useContext(Shop);

  const productsInCart = [];

  cart.forEach(item => {
    productsInCart.push(item);
  });

  console.log(productsInCart)


  return (
    <>
    <div  className='container' >
      <section>
      {!cart.length 
        ? <div className="noneProducts">
            <p>No hay productos en el carrito</p>
            <Link to="/"><button>Volver al catalogo</button></Link>
          </div>

        : cart.map(product => {
          return <ItemCart key={product.id} product={product}/>
        })}
        <button onClick={clearCart} className='btnClear'> Clear</button>
        <CartTotals/>
      </section>
      
      
    </div>
    </>

  )
}

export default CartContainer;