

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarGuide from '../NavBar/NavBarGuide.js';
import React, { useEffect, useState } from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import Select from 'react-select';
import { useParams } from 'react-router-dom';


import { Container, Col, Row, Carousel, Card, Form, Button } from 'react-bootstrap';


function ChooseJob() {
  const params = useParams();



  return (
    <div>
      <NavBarGuide />
      <Container style={{ marginTop: 80}}>
        <Row className=""  >
            <Col sm={5}>
              <Row>
              <Card style={{ width: '40rem', height: '40rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card> 
                
                  
                                
              </Row>
              <Row style={{ marginTop: 50 }}>
              
                  Photo Gallery
                    
              </Row>
            </Col>

            <Col sm={7}>
                <Calendar />

            </Col>

        </Row>
      </Container>
    </div>
  );
}

export default ChooseJob;
