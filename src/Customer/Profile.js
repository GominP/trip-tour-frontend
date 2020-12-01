import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import {  Col, Row, Form} from 'react-bootstrap'
import NavbarHead from '../NavBar/NavbarHead.js';
import Nav from 'react-bootstrap/Nav'
import slide1 from '../img/h1.jpg';
import ReactRoundedImage from "react-rounded-image";
import { Tab } from 'react-bootstrap'
import '../Customer/CustomerCss/profile.css';
import { Link } from 'react-router-dom';

function Profile() {

    const url = "http://192.168.102.22:3030/api"
    const axios = require('axios');


    //Booking
    const [bookings, setBookings] = useState([])


    //Post-Trip
    const [postTrips, setPostTrips] = useState([])



    useEffect(() => {
    //Get bookings
    //     axios.get(url + '/province').then(res => {
    //         console.log(res.data);
    //         const booking = res.data.map((d)=> d.name)
    //         setBookings(booking)
    // })

    //Get Post-Trip 
    //     axios.get(url + '/province').then(res => {
    //         console.log(res.data);
    //         const postTrip = res.data.map((d)=> d.name)
    //         setPostTrips(postTrip)
    // })
        
    }, [])

    return (
        <div>
            <NavbarHead></NavbarHead>
            <Row>
                <Col sm={4} >
                    <Form style={{ marginTop: 80, marginLeft: 25, marginRight: 25 }}>
                        <Form.Row style={{ marginLeft: 25}}>
                            <ReactRoundedImage image={slide1} roundedSize="0" imageWidth="110" imageHeight="110" />
                            <Form style={{ marginLeft: 25, marginRight: 25 }}>
                                <Form.Label>Names      </Form.Label>
                                <Form.Label>since 11/20</Form.Label>
                            </Form>
                        </Form.Row>
                        <Form.Group>
                            <a href="/EditProfile" class="btn btn-primary btn-lg btn-block" role="button" aria-disabled="true" style={{ marginTop: 30 }}>Edit Profile</a>
                        </Form.Group>
                    </Form>
                </Col>

                <Col sm={8} style={{ marginTop: 80, height: "100vh", backgroundColor: "#ECECEC" }}>
                    <Form style={{ marginTop: 20, marginLeft: 50 }}>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                            <Form.Row>
                                <Nav variant="pills" className="flex-row">
                                    <Nav.Item>
                                        <b><Nav.Link eventKey="first" style={{ fontSize: "18px" }}>Booking</Nav.Link></b>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <b><Nav.Link eventKey="second" style={{ fontSize: "18px" }}>Post-Trip</Nav.Link></b>
                                    </Nav.Item>
                                </Nav>
                            </Form.Row>
                            <Form.Row>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Form>
                                            <Link to="../MainPage/DetailTrip">

                                                <div className="ImageCard">
                                                    <div className="Image" />
                                                    <div className="TitleDetailCard">
                                                        <h2>City</h2>
                                                        Detail, Time, Name Guide

                                                    </div>
                                                    <div style={{ marginTop: "160px", marginLeft: "300px" }}>
                                                        <a>Show Detail</a>
                                                    </div>

                                                </div>
                                            </Link>
                                        
                                        </Form>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        request Trip
                                        </Tab.Pane>
                                </Tab.Content>
                            </Form.Row>
                        </Tab.Container>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default Profile;
