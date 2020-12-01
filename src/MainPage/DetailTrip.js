import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import Select from 'react-select'
import { Container, Col, Row, Carousel, Card, Form, Button, FormGroup, useAccordionToggle } from 'react-bootstrap'
import NavbarHead from '../NavBar/NavbarHead.js';
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import slide1 from '../img/h1.jpg';
import slide2 from '../img/h2.jpg';
import slide3 from '../img/h3.jpg';
import ReactRoundedImage from "react-rounded-image";
import { Tab, Tabs, TabContainer, TabPane } from 'react-bootstrap'
import '../MainPage/MainPageCss/detailtrip.css'
import  NavBarHead from '../NavBar/NavbarHead.js'
import location from '../img/location.png'
import staricon from '../img/star-icon.png'

function DetailTrip(){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

  return (
    <div >
        <NavBarHead/>
        <div className='SlideShow'>
            <Container>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img className="d-block w-100" height="600" src={slide1} alt="First slide"/>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                            <img className="d-block w-100" height="600" src={slide2} alt="Second slide"/>
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" height="600" src={slide3} alt="Third slide" />
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
        <div>
             <Container>
                <Row>
                    <Col md={8} className="Topic">
                        <Form.Group as={Col}>
                        <h3>Street Food Tour in Bangkok Chinatown</h3>
                        <div>
                            <img src={location} style={{width:"30px"}}/>
                            <b style={{marginLeft:"20px"}}>Bangkok</b>
                        </div>
                        <div className="ReviewTag">
                            <img src={staricon} style={{width:"30px"}}/>
                        </div>
                        </Form.Group>
                    </Col>
                    
                 
                </Row>
             </Container>
        </div>
        

    </div>
  );
}
export default DetailTrip;