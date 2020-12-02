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
                <Nav.Link href="/VerifyGuide">Verify Guide</Nav.Link>
                {/* <Nav.Link href="/VerifyTrip">Verify Trip</Nav.Link> */}
            </Nav>
            <Nav className="justify-content-end">
                <Nav.Link onClick={handleOnLogout}>Logout</Nav.Link>
            </Nav>
        </Navbar>
    </div>
  );
}

export default NavBarGuide;
