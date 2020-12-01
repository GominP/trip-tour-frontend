

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarGuide from '../NavBar/NavBarGuide.js'
import React, { useEffect, useState } from "react";

import Select from 'react-select'
import { useSelect } from 'react-select-search';
import { Container, Col, Row, Carousel, CardColumns, CardGroup, Card, Form, Button } from 'react-bootstrap'
import { render } from '@testing-library/react';




function SelectTrip() {
    const cardInfo = [
        { image: "", title: "Bahli", text: " Test" },
        { image: "", title: "Phuket", text: " Test" },
        { image: "", title: "Samutsakhon", text: "Test " },
        { image: "", title: "Koh samui", text: " Test" },
        { image: "", title: "Koh kud", text: "Test " }
    ];

    return (
        <div>
            <Container>
                <Row className="justify-content-md-center">
                    <CardGroup style={{ marginTop: 80 }}>
                        <CardColumns>
                            {
                                cardInfo.map(a => {
                                    return (
                                        <Card>
                                            <Card.Img variant="top" src="holder.js/100px160" />
                                            <Card.Body>
                                                <Card.Title>{a.title}</Card.Title>
                                                <Card.Text>
                                                    {a.text}
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                <Button onClick={() => window.location.href = '/ChooseJob/' + a.title} className="w-100" variant="outline-success">Success</Button>{' '}
                                            </Card.Footer>
                                        </Card>
                                    )
                                })
                            }
                        </CardColumns>
                    </CardGroup>
                </Row>
            </Container>
        </div>
    );
}

export default SelectTrip;
