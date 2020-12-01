

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarGuide from '../NavBar/NavBarGuide.js'
import React, { useEffect, useState } from "react";
import Select from 'react-select'
import { useSelect } from 'react-select-search';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { Container, Col, Row, Card, Table, Button } from 'react-bootstrap'


function WorkSchedule() {

  const disabledDates = [new Date(2020, 10, 29), new Date(2020, 10, 27), new Date(2020, 10, 24)]




  return (
    <div>
      <NavBarGuide />
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
            <Card body style={{ textAlign: 'center'}}>
              <Card.Title >
                Work Detail
              </Card.Title>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Trip Name</th>
                    <th >Province</th>
                    <th >Date</th>
  
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td width="10%">1</td>
                    <td width="30%">Mark</td>
                    <td >จังหวัด</td>
                    <td >เวลา</td>

              
                  </tr>
                </tbody>
              </Table>

            </Card>

          </Col>



        </Row>
      </Container>
    </div>
  );
}

export default WorkSchedule;
