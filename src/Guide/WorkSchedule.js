

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
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
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
