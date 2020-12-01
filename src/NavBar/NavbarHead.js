import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Nav,Navbar  } from 'react-bootstrap'





function NavbarHead() {


    return (
    <div >
        <Navbar fixed="top">
            <Navbar.Brand href="/">Trip & Tour</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/CreateTrip">Test</Nav.Link>
            <   Nav.Link href="/">Pricing</Nav.Link>
            </Nav>
        </Navbar>
    </div>
  );
}

export default NavbarHead;
