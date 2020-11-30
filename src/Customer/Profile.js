import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import Select from 'react-select'
import { useSelect } from 'react-select-search';
import { Container, Col, Row, Carousel, Card, Form, Button, FormGroup, useAccordionToggle } from 'react-bootstrap'
import NavbarHead from '../NavBar/NavbarHead.js';
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import slide1 from '../img/h1.jpg';
import ReactRoundedImage from "react-rounded-image";
import { Tab, Tabs, TabContainer, TabPane } from 'react-bootstrap'


function Profile() {

    // const [color, setColor] = useState("btn btn-secondary")
    const [isRequest, setIsRequest] = useState(true)

    return (
        <div>
            <NavbarHead></NavbarHead>
                <Row>
                    <Col sm={4} style={{}}>
                        <Form style={{ marginTop: 80, marginLeft:25, marginRight:25}}>
                            <Form.Row>
                                <ReactRoundedImage image={slide1} roundedSize="0" imageWidth="110" imageHeight="110" />
                                <Form style={{ marginLeft:25, marginRight:25}}>
                                    <Form.Label>Names      </Form.Label>
                                    <Form.Label>since 11/20</Form.Label>
                                </Form>
                            </Form.Row>
                            <Form.Group>
                                <a href="/editProfile" class="btn btn-primary btn-lg btn-block" role="button" aria-disabled="true" style={{marginTop:30}}>edit Profile</a>
                            </Form.Group>
                        </Form>
                    </Col>

                    <Col sm={8} style={{ marginTop:80, height: "100vh", backgroundColor: "#ECECEC" }}>
                        <Form style={{ marginTop: 20, marginLeft: 50 }}>
                            <Form.Row>
                                <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                                    <Nav variant="pills" className="flex-row">
                                        <Nav.Item>
                                            <b><Nav.Link eventKey="second" style={{fontSize:"24px" }}>Request</Nav.Link></b>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <b><Nav.Link eventKey="first" style={{fontSize:"24px" }}>Booking</Nav.Link></b>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <b><Nav.Link eventKey="Second" style={{fontSize:"24px" }}>Post-Trip</Nav.Link></b>
                                        </Nav.Item>
                                    </Nav>
                                </Tab.Container>
                                {/* <button type="button" class={ isRequest ? "btn btn-light" : "btn btn-primary" } onClick ={ () => setIsRequest(!isRequest) }>Request</button>
                            <button type="button" class="btn btn-primary">Booking</button>
                            <button type="button" class="btn btn-secondary" >Post-Trip</button> */}

                            </Form.Row>
                        </Form>
                    </Col>


                </Row>
            {/* </Container> */}


        </div>
    );
}

export default Profile;
