import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import carrito from '../assets/carrito.png'
import './style.css';
import licuadora from '../assets/licuadora.jpg'

function BasicExample() {
  

  return (
    <Card style={{ width: '18rem' }} className='CardOfertas'>
      <Card.Img variant="top" src={licuadora} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className='precio'>
          <Button variant="primary" className='botonCard'> <img src={carrito} width='30px'/></Button>
          <h3>2000$</h3>
        </div>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;