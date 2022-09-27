
import Container from 'react-bootstrap/Container';
import carrito from '../assets/carrito.png'
import count from '../ItemCount/ItemCount'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './style.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


function OffcanvasExample() {

  return (
    <>
      {[false,].map((expand) => (
        <Navbar key={expand}  expand={expand} className="mb-3 barra">
          <Container fluid >
            <Navbar.Brand href="/" className='titulo'>BlueButterfly</Navbar.Brand>
            <div>
              <div className='botones'>
              <button className='carrito'>{count}<img src={carrito} alt='carrit de compras'/></button>        
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}  className='boton_1'/>
              </div>
               <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              >
                <Offcanvas.Header closeButton className='links-barra'>
                 <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                 BlueButterfly
                 </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='links-barra'>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href='/'>Home</Nav.Link>
                    <NavDropdown
                    title="Categoria"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item > <Link to="/category/men's clothing"> men`s clothing</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/category/women's clothing"> Women`s clothing</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/category/electronics"> Electronics</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/category/jewelery"> Jewlery</Link></NavDropdown.Item>

                  </NavDropdown>
                   
                  </Nav>
                  
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </div>
           
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;