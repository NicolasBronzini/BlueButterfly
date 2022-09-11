import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import carrito from '../assets/carrito.png'
import './style.css';


const Item = ({product}) => {
  return (
  <Card style={{ width: '18rem' }} className='CardOfertas'>
    <Card.Img variant="top" src={product. img} />
    <Card.Body>
      <Card.Title>{product. nombre}</Card.Title>
      <Card.Text>
      {product. descripcion}
      </Card.Text>
      <div className='precio'>
        <Button variant="primary" className='botonCard'> <img src={carrito} width='30px'/></Button>
        <h3>{product. precio}</h3>
      </div>
    </Card.Body>
  </Card>
  )
}

export default Item


