

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarGuide from '../NavBar/NavBarGuide.js';
import React, { useEffect, useState } from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useParams } from 'react-router-dom';
import moment from 'moment';


import slide1 from '../img/h1.jpg';
import slide2 from '../img/h2.jpg';
import slide3 from '../img/h3.jpg';



import { Container, Col, Row, Carousel, Card, Form, Button } from 'react-bootstrap';


function ChooseJob() {
  const params = useParams();


  //Carousel
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const cardImg = [
    { img: slide1},
    { img: slide2},
    { img: slide3}

];

  //Date
  const [valueDate, setValueDate] = useState(new Date());
  const disabledDates = [new Date(2020,10,29),new Date(2020,10,27),new Date(2020,10,24)]

  const saveDate = () =>{
    console.log(valueDate);
  
  }



  return (
    <div>
      <NavBarGuide />
      <Container style={{ marginTop: 80}}>
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

                  <Card.Text>
                  <dl class="row">
                    <dt class="col-sm-3">Name Trip</dt>
                    <dd class="col-sm-9">A description list is perfect for defining terms.</dd>

                    <dt class="col-sm-3">Detail</dt>
                    <dd class="col-sm-9">
                      <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
                      <p>Donec id elit non mi porta gravida at eget metus.</p>
                    </dd>

                    <dt class="col-sm-3">Province</dt>
                    <dd class="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

                    <dt class="col-sm-3 text-truncate">Main activities</dt>
                    <dd class="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

                    <dt class="col-sm-3">Price</dt>
                    <dd class="col-sm-9">
                      <dl class="row">
                        <dd class="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
                      </dl>
                    </dd>
                    <dt class="col-sm-3 text-truncate">Maximum travelers</dt>
                    <dd class="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

                  </dl>
                  </Card.Text>
                </Card.Body>
            </Card> 
                
                  
                                
              </Row>
              <Row style={{ marginTop: 50 }}>
              
                  Photo Gallery
                    
              </Row>
            </Col>
            <Col sm={4}>
                <Row>
                <Calendar
                  onChange={setValueDate}
                  value={valueDate}                
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

                </Row>
                <Row className="justify-content-center" style={{ marginTop: 40}}>
                  <Button onClick={()=> saveDate()}> Save Change</Button>

                </Row>



            </Col>

        </Row>
      </Container>
    </div>
  );
}

export default ChooseJob;
