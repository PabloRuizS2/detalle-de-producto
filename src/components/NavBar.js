import React, {useState} from 'react';
import { Container, Nav, Navbar, NavDropdown, Alert } from 'react-bootstrap';
import { faHome, faAddressBook, faSoap, faSprayCan, faTooth, faMedkit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartWidget from './CartWidget';


const NavBar = () => {

  const [seccion, setSeccion] = useState('Inicio');

  return (<div>
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">
       <CartWidget />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/"><FontAwesomeIcon icon={faHome} /> Inicio</Nav.Link>
        <NavDropdown title="Categorias" id="basic-nav-dropdown">
          <NavDropdown.Item onClick={ () => setSeccion('Categoria > Celulares') }><FontAwesomeIcon icon="fa-solid fa-mobile-notch" /> Celulares</NavDropdown.Item>
          <NavDropdown.Item onClick={ () => setSeccion('Categoria > Cargadores') }><FontAwesomeIcon icon="fa-solid fa-bolt" /> Cargadores</NavDropdown.Item>
          <NavDropdown.Item onClick={ () => setSeccion('Categoria > Auriculares') }><FontAwesomeIcon icon="fa-solid fa-headphones" /> Auriculares</NavDropdown.Item>
          <NavDropdown.Item onClick={ () => setSeccion('Categoria > Fundas') }><FontAwesomeIcon icon="fa-solid fa-bolt" /> Fundas</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link onClick={ () => setSeccion('Contáctenos') }><FontAwesomeIcon icon={faAddressBook} /> Contáctenos</Nav.Link>        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<Alert variant="info" id="info-seccion">{ seccion }</Alert>
  </div>);
};

export default NavBar;