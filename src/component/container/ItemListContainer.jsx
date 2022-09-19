import React, { useEffect, useState } from 'react'
// import { products } from '../data/productos';
import ItemList from '../ItemList';

import './style.css';
const ItemListContainer=({greeting}) => {

const [productos, setProductos] = useState ([])

useEffect (()=> {
  
  ( async ()=> {
  // let traerProductos = new Promise ((accept , reject )=>{
  //   setTimeout (() => {
  //     accept(products)
  //   }, 2000)
  // })

    try {
      const response = await fetch('https://Fakestoreapi.com/products');
      const productos = await response.json();
      setProductos(productos);
    } catch (error) {
      
    }
  })()
},[])
  console.log (productos)
    return (
      <>
      <div className='h1_principal'>
          <h1>{greeting}</h1>
      
        <div className='cardProductos'>
          <ItemList products={productos} className='itemCard'/>
       </div>
          
      </div>
      </>
    )
  }



export default ItemListContainer