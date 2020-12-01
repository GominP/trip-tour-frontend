

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarGuide from '../NavBar/NavBarGuide.js'
import React, { useEffect, useState } from "react";
import Select from 'react-select'
import { useSelect } from 'react-select-search';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { Container, Col, Row, Carousel, Card, Form, Button } from 'react-bootstrap'


function WorkSchedule() {

  const disabledDates = [new Date(2020, 10, 29), new Date(2020, 10, 27), new Date(2020, 10, 24)]




  return (
    <div>
<<<<<<< HEAD
=======
      <NavBarGuide />
>>>>>>> fix merge
      <Container style={{ marginTop: 80 }}>
        <Row className="justify-content-md-center">
          <Col sm={4}>
            <Calendar
              selectRange={true}
              tileDisabled={({ date }) => {
                for (const disabledDate of disabledDates) {
                  if (
                    disabledDate.getDate() === date.getDate() &&
                    disabledDate.getMonth() === date.getMonth()
                  ) {
                    return true;
                  }
                }
                return false;
              }}
            />
          </Col>
          <Col sm={8}>
            
          </Col>



        </Row>
      </Container>
    </div>
  );
}

export default WorkSchedule;
