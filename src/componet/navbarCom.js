import {Navbar, Nav, Container} from 'react-bootstrap';
import React from "react";
import {} from "react-router-dom";
function navbarcom() {
  return (
    
    <Navbar bg="light" expand="lg" >
        <Container>
        <Navbar.Brand href="#">Windows R</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" style={{'flex-grow': 'revert'}}>
            <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', float:'right' }}
            navbarScroll
            >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Cart</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        
  );
}

export default navbarcom;
