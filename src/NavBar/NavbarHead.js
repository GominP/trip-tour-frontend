import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Nav,Navbar  } from 'react-bootstrap'





function NavbarHead() {


    return (
    <div className="App">
        <Navbar bg="rgba(0,0,0,0.4)"  fixed="top" >
            <Navbar.Brand href="/">Trip & Tour</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/CreateTrip">Test to Guide</Nav.Link>
                <Nav.Link href="/Profile">Customer</Nav.Link>
            </Nav>
        </Navbar>
    </div>
  );
}

export default NavbarHead;
