

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarGuide from '../NavBar/NavBarGuide.js';
import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { useParams } from 'react-router-dom';

import { Container, Col, Row, Carousel, Card, Form, Button } from 'react-bootstrap';


function ChooseJob() {
    const params = useParams();



  return (
    <div>
      <NavBarGuide />
       <Container>
        <Row className="justify-content-md-center">
            <div style={{ marginTop: 80}}>
                <Col>
                </Col>
            
         

            </div>
        
   
 
         </Row>
       </Container>
    </div>
  );
}

export default ChooseJob;
