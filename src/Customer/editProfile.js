import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import Select from 'react-select'
import pictureIcon from '../img/pictureIcon.png'
import { Container, Col, Row, Carousel, Card, Form, Button, FormGroup, useAccordionToggle } from 'react-bootstrap'
import NavbarHead from '../NavBar/NavbarHead.js';
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import slide1 from '../img/h1.jpg';
import ReactRoundedImage from "react-rounded-image";
import { Tab, Tabs, TabContainer, TabPane } from 'react-bootstrap'
import FormImpl from 'react-bootstrap/esm/Form';



function EditProfile(){
    return (
        <div>
            <Container style={{marginTop:80}}>
                <Row>
                    <Tab.Container  defaultActiveKey="first">
                        <Col sm={3} style={{ height: "100vh", backgroundColor: "#ECECEC" }}>
                            <Nav variant="pills" className="flex-column" style={{marginTop:30}}>
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Edit Profile</Nav.Link>
                                </Nav.Item>
                                <Nav.Item style={{marginTop:20}}>
                                    <Nav.Link eventKey="second" >Reset Password</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <div style={{}}>
                                <Tab.Content style={{alignItems:"center"}}>
                                    <Tab.Pane eventKey="first">
                                        <Form.Group style={{}}>
                                            <h1 style={{textAlign:"center"}}>Profile</h1>
                                            <div style={{marginLeft:310}}>
                                                <ReactRoundedImage image={slide1} roundedSize="0" imageWidth="210" imageHeight="210" />
                                            </div>
                                            <div style={{marginTop:"-55px", marginLeft:"460px", position:"absolute"}} >
                                                <ReactRoundedImage style={{height: '300px'}} image={pictureIcon} imageWidth="60" imageHeight="60" roundedColor="#000000" roundedSize="7"  />
                                            </div>
                                        </Form.Group>
                                        <Form>
                                            <Form.Row style={{marginLeft:"80px", marginRight:"60px", marginBottom:"-10px"}}>
                                                <Form.Group as={Col} controlId="formGridName">
                                                    <Form.Label>Name</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter name" />
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridSurname">
                                                    <Form.Label>Surname</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter Surname" />
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row style={{marginLeft:"80px", marginRight:"60px", marginBottom:"-10px"}}>
                                                <Form.Group as={Col} controlId="formGridNickname" >
                                                    <Form.Label>Phone Number</Form.Label>
                                                    <Form.Control  type="text" placeholder="Enter Phone Number" />
                                                </Form.Group>
                                                <Form.Group as={Col} controlId="formGridGender">
                                                    <Form.Label>Birth of Date</Form.Label>
                                                    <Form.Control type="date"></Form.Control>
                                                </Form.Group>
                                            </Form.Row>
                                            
                                            <Form.Row style={{marginLeft:"355px", marginTop:"10px"}}>
                                                <Button>Save Changes</Button>
                                            </Form.Row>
                                        </Form>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Form.Group>
                                                <h2 style={{textAlign:"left", marginTop:"20px", marginLeft:"20px"}}>Reset Password</h2>
                                                <Form style={{marginLeft:"80px", marginRight:"80px"}}>
                                                    <Form.Group as={Col} controlId="formGridNewPassword">
                                                        <Form.Label>New Password</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter New Password" />
                                                    </Form.Group>
                                                    <Form.Group as={Col} controlId="formGridConfirmPassword">
                                                        <Form.Label>Comfirm Password</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter Confirm Password" />
                                                    </Form.Group>
                                                </Form>
                                                <Button type="submit" style={{marginLeft:"300px", marginTop:"20px", width:"30vh"}}>Save</Button>
                                        </Form.Group>
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </Col>
                    </Tab.Container>
                </Row>
            </Container>
        </div>
    );
}
export default EditProfile;