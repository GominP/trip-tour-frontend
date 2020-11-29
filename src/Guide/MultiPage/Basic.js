import React from "react";
import NavBarGuide from '../../NavBar/NavBarGuide.js'

import { Container, Col, Row, Carousel, Card, Form, Button } from 'react-bootstrap'

const Basic = ({ setForm, formData, navigation }) => {
    const { firstName, lastName, nickName } = formData;

    const { next } = navigation;

    return (
        <div>
            <NavBarGuide />
            <div>
                <Container style={{ marginTop: 80 }}>
                    <Row>
                        <Col sm={3}>Basic</Col>
                        <Col sm={9}>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="firstName" value={firstName} onChange={setForm} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="text" name="lastName" value={lastName} onChange={setForm} />
                                </Form.Group>
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
