import React from "react";
import NavBarGuide from '../../NavBar/NavBarGuide.js'

import { Container, Col, Row, Carousel, Card, Form, Button, Nav } from 'react-bootstrap'

const Detail = ({ setForm, formData, navigation }) => {
    const { firstName, lastName, nickName } = formData;

    const { previous, next } = navigation;

    return (
        <div>
            <NavBarGuide />
            <div>
                <Container style={{ marginTop: 80 }}>
                    <Row>
                        <Col sm={3}>
                            <Row>
                                <Nav.Link href="#disabled" disabled>
                                    Basic
                                 </Nav.Link>
                            </Row>
                            <Row style={{ marginTop: 50 }}>
                                <Nav.Link >
                                     Photo Gallery
                                 </Nav.Link>
                            </Row>
                        </Col>
                        <Col sm={9}>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Test</Form.Label>
                                    <Form.Control type="text" name="firstName" value={firstName} onChange={setForm} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Test</Form.Label>
                                    <Form.Control type="text" name="lastName" value={lastName} onChange={setForm} />
                                </Form.Group>
                            </Form>
                            <div>
                            <Button onClick={ previous}> Previous </Button>

                                <Button > Submit </Button>
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

export default Detail;
