import React from 'react'
import BotonCount from '../ItemCount/ItemCount'
import './style.css';
const ItemListContainer=({greeting}) => {
  return (
    <div className='h1_principal'>
        <h1>{greeting}</h1>
        <BotonCount/>
    </div>
  )
}

export default ItemListContainer