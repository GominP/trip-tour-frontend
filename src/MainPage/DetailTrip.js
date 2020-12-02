import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import Select from 'react-select'
import { Container, Col, Row, Carousel, Card, Form, Button, FormGroup, Modal, useAccordionToggle, Nav } from 'react-bootstrap'
import slide1 from '../img/h1.jpg';
import slide2 from '../img/h2.jpg';
import slide3 from '../img/h3.jpg';
import GuideIcon from '../img/GuideIcon.png';
import ReactRoundedImage from "react-rounded-image";
import { Tab, Tabs, TabContainer, TabPane } from 'react-bootstrap'
import '../MainPage/MainPageCss/detailtrip.css'
import  NavBarHead from '../NavBar/NavbarHead.js'
import location from '../img/location.png'
import StarRating from 'react-star-ratings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faHiking, faInfoCircle, faHamburger, faMale, faSignature, faClock } from "@fortawesome/free-solid-svg-icons";

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

    const [showGuide, setShowGuide] = useState(false);
    const handleGuideShow = () => setShowGuide(true)
    const handleGuideClose = () => {
        setShowGuide(false);
    }




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
                                    <Form.Row >
                                        <img src={location} className="LocationImage"></img>
                                        <Form.Label column="sm">Bangkok</Form.Label>
                                    </Form.Row>
                                    <Form.Row style={{ marginLeft: "1.5%",marginTop:"2%"}}>
                                        <StarRating starDimension="15px"
                                        starSpacing ="0px"
                                        rating={4.3}
                                        starRatedColor="#FABD02"
                                        ></StarRating>
                                        <Form.Label column="sm" className="RatingScore">4.3/5</Form.Label>
                                        <Col>
                                            <Button size="sm" className="ButtonReview" style={{backgroundColor:"green"}}>Review</Button>
                                        </Col>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form as={Col}>
                                            <div className="FontAweBack">
                                                <div >
                                                    <FontAwesomeIcon icon={faHamburger} size="4x"  className="Icon"></FontAwesomeIcon>
                                                    <div>
                                                        <b style={{marginLeft:"10px"}}>Food&Drink</b>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </Form>
                                        <Form as={Col}>
                                            {/* <FontAwesomeIcon icon={faHiking}  className="HkIcon" style={{ marginRight: 10 }}></FontAwesomeIcon> */}
                                            <div className="FontAweBack2">
                                                <div>
                                                    <FontAwesomeIcon icon={faClock} size="4x" className="Icon"></FontAwesomeIcon>
                                                    <div style={{marginLeft:"22px"}}>
                                                        <b >Duration</b>
                                                        <p style={{marginTop:"-5px", marginLeft:"10px", fontSize:"10px"}}>4 Hours</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </Form>
                                    </Form.Row>
                                    <Form.Row style={{ marginLeft: "1.5%",marginTop:"2%"}}>
                                        <div>
                                            <h3>Description....</h3>
                                            <p>nfdsogknvdfokvfdn</p>
                                        </div>
                                    </Form.Row>

                                </Card.Body>
                            </Card>                
                        </Row>
                    </Col>
                    {/* Add if (isCustomer && Home(Customer)) */}
                    <Col sm={4}>
                        <Row>
                            <Form className="CardBeforeBook">
                                <Card style={{ width: '28rem'}}>
                                    <Card.Header style={{backgroundColor:"#FFFFFF", marginLeft:"30px"}}>Date to travel</Card.Header>
                                    <Card.Body>
                                        <Form.Row style={{marginLeft:"30px"}}>
                                            <h5>People</h5>
                                            <div className="GroupBtnPeople">
                                                <Button variant="outline-primary" size="sm" className="BtnPeople">-</Button>
                                                <Form.Label>  qty</Form.Label>
                                                <Button variant="outline-primary" size="sm" className="BtnPeople">+</Button>
                                            </div>
                                        </Form.Row>
                                        <Form.Row>
                                            <Button onClick={handleGuideShow} size="sm">
                                                <img src={GuideIcon} style={{backgroundColor:"#FFFFFF", borderRadius:"100%", width:"20px", marginRight:"10px"}}/>
                                                Select Guide
                                            </Button>
                                        </Form.Row>
                                        <hr></hr>
                                        <div style={{marginTop:"20px", marginLeft:"30px"}}>
                                            THB 999 * qty(people) = THB
                                        </div>
                                        <div style={{marginTop:"15px", marginLeft:"30px"}}>รวม + ค่าธรรมเนียม + ภาษี = THB</div>
                                        <hr></hr>
                                        <div style={{marginTop:"15px", marginLeft:"30px"}}>Total ...... THB</div>
                                        <div style={{marginTop:"15px" }} >
                                            <Button style={{backgroundColor:"#80c904", border:"none"}} block>Instant Book</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Form>
                        </Row>
                        <Row>
                            <Form className="CardAfterBook">
                                <Card style={{ width: '28rem'}}>
                                    <Card.Header style={{backgroundColor:"#FFFFFF",marginLeft:"30px"}}>Date to travel</Card.Header>
                                    <Card.Body>
                                        <Form.Row style={{marginLeft:"30px",marginLeft:"30px"}}>
                                            <FontAwesomeIcon icon={faMale} size="lg" style={{marginRight:"10px"}}/>
                                            <h5>People</h5>
                                            <div style={{marginLeft:"160px", fontSize:"15px"}}> 5 </div>
                                            <div style={{marginLeft:"30px", fontSize:"15px"}}> peoples</div>
                                        </Form.Row>
                                            <hr></hr>
                                            <div style={{marginTop:"20px", marginLeft:"30px"}}>
                                                THB 999 * qty(people) = THB
                                            </div>
                                            <div style={{marginTop:"15px", marginLeft:"30px"}}>รวม + ค่าธรรมเนียม + ภาษี = THB</div>
                                            <hr></hr>
                                            <div style={{marginTop:"15px",marginLeft:"30px"}}>Total ...... THB</div>
                                            <div style={{marginTop:"15px"}}>
                                                <Button style={{backgroundColor:"#2EF429", border:"none"}}block>Instant Book</Button>
                                            </div>
                                    </Card.Body>
                                </Card>
                            </Form>
                        </Row>
                    </Col>

                </Row>
            </Container>
        </div>
        <Modal show={showGuide} onHide={handleGuideClose}>
            <h2 style={{textAlign:"center",marginTop:"20px"}}>Select Guide</h2>
            <Modal.Body>
                <div className="horizontal-scroll-wrapper">
                    <div className="card">
                        dfngkldkl;fgm
                    </div>
                    <div className="card">
                        dsgadsgsg
                    </div>
                    <div className="card">
                        dsgasdgsdg
                    </div>
                </div>
            </Modal.Body>

        </Modal>
        

    </div>
  );
}
export default DetailTrip;