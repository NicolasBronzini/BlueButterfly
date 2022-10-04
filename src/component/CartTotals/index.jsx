import React from 'react';
import { useContext } from 'react';
import { Shop } from '../Context/CartContext';
import generateOrder from '../../services/generateOrder';
import './style.css';
import { collection, addDoc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import { doc, updateDoc } from "firebase/firestore";
import { useState } from 'react';
import { CircularProgress } from '@mui/material';

const CartTotals = () => {

  const {totalPrice, cart} = useContext(Shop);
  const [loading, setLoading] = useState(false);

  //funcion para generar la orden
  const handleBuy = async () => {
    setLoading(true)
    const total = totalPrice();
    const order = generateOrder("David","david@gmail.com", 623521428, cart, total);
    console.log(order);

    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "orders"), order);

    //con esta parte actualizamos el documento, en este caso el stock
    cart.forEach(async (productInCart) => {
      //primero se accede a la referencia del producto
      const productModified = doc(db, "products", productInCart.id);
      //A continuacion llamamos al Snapshot desde firebase
      const productSnap = await getDoc(productModified);

      // actualizamos el stock del producto con productSnap.data().stock
      await updateDoc(productModified, {
        stock: productSnap.data().stock - productInCart.quantity
      });
    });
    setLoading(false);
    alert(`Gracias por su compra. Pedido generado con ID: ${docRef.id}`);

  }

  return (
    <aside className='ContainerTotal'>
      <p>total: {totalPrice().toFixed(2)}$ </p>
      {loading ? <CircularProgress/> 
      :<button onClick={handleBuy}>Comprar</button>}
    </aside>
  )
}

export default CartTotals