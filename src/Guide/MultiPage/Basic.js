import React from "react";
import NavBarGuide from '../../NavBar/NavBarGuide.js'

import { Container, Col, Row, Carousel, Card, Form, Button, Nav } from 'react-bootstrap'

const Basic = ({ setForm, formData, navigation }) => {
    const { firstName, lastName, nickName } = formData;

    const { next } = navigation;

    return (

        <div>
        <NavBarGuide />
        <div>
            <Container style={{ marginTop: 80 }}>
                <Row>
                    <Col sm={3}>
                        <Row>
                            <Nav.Link>
                                Basic
                            </Nav.Link>
                        </Row>
                        <Row style={{ marginTop: 50 }}>
                            <Nav.Link href="#disabled" disabled>
                                Photo Gallery
                            </Nav.Link>
                        </Row>
        
                    </Col>
                    <Col sm={9}>
                        <Form>
                            <Form.Row>
                                <Form.Label column lg={4}>
                                    Name Trip
                                </Form.Label>
                                <Col>
                                    <Form.Control className="w-50" type="text" placeholder="Normal text" />
                                </Col>
                            </Form.Row>
                            <br />
                            <Form.Row>
                                <Form.Label column lg={4}>
                                    Province
                                </Form.Label>
                                <Col>
                                    <Form.Control className="w-50" type="text" placeholder="Normal text" />
                                </Col>
                            </Form.Row>
                            <br />
                            <Form.Row>
                                <Form.Label column lg={4}>
                                    Detail
                                </Form.Label>
                                <Col>
                                    <Form.Control className="w-50" as="textarea" rows={5} type="text" placeholder="Normal text" />
                                </Col>
                            </Form.Row>
                            <br />
                            <Form.Row>
                                <Form.Label column lg={4}>
                                    Main activities
                                </Form.Label>
                                <Col>
                                    <Form.Control className="w-50" type="text" placeholder="Normal text" />
                                </Col>
                            </Form.Row>
                            <br />
                            <Form.Row>
                                <Form.Label column lg={4}>
                                    Price
                                </Form.Label>
                                <Col>
                                    <Form.Control className="w-50" type="text" placeholder="Normal text" />
                                </Col>
                            </Form.Row>
                            <br />
                            <Form.Row>
                                <Form.Label column lg={4}>
                                    Maximum travelers
                                </Form.Label>
                                <Col>
                                    <Form.Control className="w-50" type="text" placeholder="Normal text" />
                                </Col>
                            </Form.Row>
                        </Form>
                        <div>
                            <Button onClick={next}> Next </Button>
                        </div>

                    </Col>
                </Row>
                <Row>

                </Row>
            </Container>
        </div>
    </div>
 
    );
};

export default Basic;
