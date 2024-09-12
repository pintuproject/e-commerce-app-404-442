import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import{Link} from 'react-router-dom'
import './Navbar.css'
 
const Navigationbar=()=> {
  return (
     
  <div className='nav'> 
  <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          <Nav.Link as={Link} to="/home" className="nav-item-custom">Home</Nav.Link>
          <Nav.Link as={Link} to="/cart" className="nav-item-custom">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navigationbar