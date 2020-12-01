import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import Select from 'react-select'
import { Container, Col, Row, Carousel, Card, Form, Button, FormGroup, useAccordionToggle } from 'react-bootstrap'
import slide1 from '../img/h1.jpg';
import slide2 from '../img/h2.jpg';
import slide3 from '../img/h3.jpg';
import ReactRoundedImage from "react-rounded-image";
import { Tab, Tabs, TabContainer, TabPane } from 'react-bootstrap'
import '../MainPage/MainPageCss/detailtrip.css'
import  NavBarHead from '../NavBar/NavbarHead.js'
import location from '../img/location.png'
import staricon from '../img/star-icon.png'
import StarRating from 'react-star-ratings';

function DetailTrip(){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    const cardImg = [
        { img: slide1},
        { img: slide2},
        { img: slide3}
    
    ];

  return (
    <div >
        <NavBarHead variant="light"></NavBarHead>
        <div className='SlideShow'>
            <Container >
                <Row className=""  >
                    <Col sm={8}>
                        <Row>
                            <Card style={{ width: '40rem'}}>
                                <Carousel activeIndex={index} onSelect={handleSelect}>
                                    {
                                    cardImg.map(i => {
                                        return (
                                        <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={i.img}>
                                        </img>
                                        </Carousel.Item>
                                        )
                                    })
                                    }                
                                </Carousel>
                                <Card.Body>
                                    <div>
                                        <h3>Street Food Tour in Bangkok Chinatown</h3>
                                    </div>
                                    <Form.Row>
                                        
                                        <img src={location} className="LocationImage"></img>
                                        <Form.Label column="sm">Bangkok</Form.Label>
                                    </Form.Row>
                                    <Form.Row style={{ marginLeft: "1.5%"}}>
                                        <StarRating starDimension="15px"
                                        starSpacing ="0px"
                                        rating={4.3}
                                        starRatedColor="#FABD02"
                                        ></StarRating>
                                        <Form.Label column="sm"></Form.Label>
                                    </Form.Row>

                                </Card.Body>
                            </Card>                
                        </Row>
                    </Col>

                    <Col sm={4}>
                        <Row>
                    
                        </Row>
                    </Col>

                </Row>
            </Container>
        </div>
        

    </div>
  );
}
export default DetailTrip;