import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import carrito from '../assets/carrito.png'

import './style.css';


const Item = ({product}) => {
  return (
  <Card  className='CardOfertas'>
    <Card.Img variant="top" src={product.image} />
    <Card.Body  className='Cardbody'>
      <Card.Title>{product. title}</Card.Title>
      <Card.Text>
      {product. description}
      </Card.Text>
      <div className='precio'>
        <Button variant="primary" className='botonCard'> <img src={carrito} width='30px'/></Button>
        <h3>{product. price}</h3>
      </div>
    </Card.Body>
  </Card>
  )
}

export default Item


