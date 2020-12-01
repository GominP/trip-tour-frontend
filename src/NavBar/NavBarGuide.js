import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Nav,Navbar  } from 'react-bootstrap'

const handleOnLogout = (e) => {
    localStorage.removeItem('token')
    window.location.href = '/'
}

function NavBarGuide() {
    return (
    <div>
        <Navbar bg="rgba(0,0,0,0.4)" variant="dark" fixed="top" bg="dark">
            <Navbar.Brand href="/" >Trip & Tour</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/CreateTrip">Create Trip</Nav.Link>
                <Nav.Link href="/SelectTrip">Select Trip</Nav.Link>
                <Nav.Link href="/WorkSchedule">Work Schedule</Nav.Link>
                <Nav.Link href="#pricing">Work History</Nav.Link>
            </Nav>
            <Nav className="justify-content-end">
                <Nav.Link onClick={handleOnLogout}>Logout</Nav.Link>
            </Nav>
        </Navbar>
    </div>
  );
}

export default NavBarGuide;
