import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Nav,Form,FormControl,Navbar,NavDropdown  } from 'react-bootstrap'





function NavbarHead() {
    return (
    <div className="App">
        <Navbar bg="rgba(0,0,0,0.4)" variant="dark" fixed="top" >
            <Navbar.Brand href="/">Trip & Tour</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/MultiStepForm">Test</Nav.Link>
            <   Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </Navbar>
    </div>
  );
}

export default NavbarHead;
