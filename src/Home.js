import slide1 from './img/h1.jpg';
import slide2 from './img/h2.jpg';
import slide3 from './img/h3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import {Container,Col,Row,Carousel,Card} from 'react-bootstrap'

import ACard from './Card/ACard'
import './Card/ACard.css'

function Home() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

  return (
    <div >
        <div>
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
        </div>
        <div>
            <div className="horizontal-scroll-wrapper">
                <div className="card">
                    <ACard />
                </div>
                <div className="card">
                    <ACard />
                </div>
                <div className="card">
                    <ACard />
                </div>
                <div className="card">
                    <ACard />
                </div>
                <div className="card">
                    <ACard />
                </div>
                <div className="card">
                    <ACard />
                </div>
                <div className="card">
                    <ACard />
                </div>
                <div className="card">
                    <ACard />
                </div>
                <div className="card">
                    <ACard />
                </div>
                <div className="card">
                    <ACard />
                </div>
            </div>
            
        </div>
        <div>
            {/* <Container >
                <Row>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={slide1} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={slide2} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={slide3} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                
                    </Col>
                </Row>
            </Container> */}
        </div>
    </div>
  );
}

export default Home;
