import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './style.css';

function OffcanvasExample() {
  return (
    <>
      {[false,].map((expand) => (
        <Navbar key={expand}  expand={expand} className="mb-3 barra">
          <Container fluid >
            <Navbar.Brand href="#" className='titulo'>BlueButterfly</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}  className='boton_1'/>
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
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Productos</Nav.Link>
                  <Nav.Link href="#action2">Nosotros</Nav.Link>
                  <Nav.Link href="#action2">Contacto</Nav.Link>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;