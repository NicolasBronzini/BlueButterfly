import React from 'react'
import BotonCount from '../ItemCount/ItemCount'
import './style.css'
const ItemDetail = ({product}) => {
  return (
    <div className='containerDetail'>
        <div>
            <h1>{product.title}</h1>
            <div>
                <img src={product.image} alt="product-detail" className='img-detail'  />
            </div>
        <BotonCount/>
        </div>
        
    </div>
  )
}

export default ItemDetail