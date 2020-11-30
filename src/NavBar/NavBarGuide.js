import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Nav,Navbar  } from 'react-bootstrap'



function NavBarGuide() {
    console.log('ssss')
    return (
    <div>
        <Navbar fixed="top">
            <Navbar.Brand href="/" >Trip & Tour</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/MultiStepForm">Create Trip</Nav.Link>
                <Nav.Link href="/SelectTrip">Select Trip</Nav.Link>
                <Nav.Link href="/">Work Schedule</Nav.Link>
                <Nav.Link href="#pricing">Work History</Nav.Link>
            </Nav>
        </Navbar>
    </div>
  );
}

export default NavBarGuide;
