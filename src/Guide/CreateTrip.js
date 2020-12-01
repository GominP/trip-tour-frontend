import ReactDOM from 'react-dom'
import NavBarGuide from '../NavBar/NavBarGuide.js'
import Select from 'react-select'
import { TimePicker } from 'antd';
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faHiking, faHome, faInfo, faInfoCircle, faMapMarked, faMapMarkedAlt, faMapMarkerAlt, faSignature } from "@fortawesome/free-solid-svg-icons";


import moment from 'moment';
import 'antd/dist/antd.css';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { Container, Col, Row, Form, Button, Nav, Tab, Image, Carousel } from 'react-bootstrap'
import { faHandshake } from '@fortawesome/free-regular-svg-icons';

const CreateTrip = ({ }) => {

    const format = 'HH:mm';
    const [stateTab, setStatTab] = useState("first");
    const [stateTab2, setStatTab2] = useState("second");

    const handleNextTab = () => {
        setStatTab("second");
        setStatTab2("first");
    }

    const handlePreviousTab = () => {
        setStatTab("first");
        setStatTab2("second");
    }



    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    const activities = [
        { value: 'Art & Craft Workshops', label: 'Art & Craft Workshops' },
        { value: 'Cooking', label: 'Cooking' },
        { value: 'Fitness & Wellness', label: 'Fitness & Wellness' },
        { value: 'Food & Drink', label: 'Food & Drink' },
        { value: 'Fun & Adventure', label: 'Fun & Adventure' },
        { value: 'History & Culture', label: 'History & Culture' },
        { value: 'Local Life', label: 'Local Life' },
        { value: 'Local Ride', label: 'Local Ride' },
        { value: 'Nature', label: 'Nature' },
        { value: 'Night Activities', label: 'Night Activities' },
        { value: 'Shopping', label: 'Shopping' },

    ]

    const { Dragger } = Upload;

    const [file, setFile] = React.useState(null)

    const fileHandler = (e) => {
        setFile(e.target.files[0])
    }

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };


    const props = {
        name: 'file',
        multiple: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                console.log(info.file);
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    return (

        <div>
            <NavBarGuide />
            <Container style={{ marginTop: 80 }}>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey={stateTab} >Basic</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey={stateTab2}>Photo Gallery</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey={stateTab}>
                                    <Form  noValidate validated={validated} onSubmit={handleSubmit}>
                                        <Form.Row>

                                            <Form.Label column lg={4}>
                                                <FontAwesomeIcon icon={faSignature} style={{ marginRight: 10 }} />
                                        Name Trip
                                            </Form.Label>
                                            <Col>
                                                <Form.Control className="w-50" type="text" placeholder="Normal text" required/>
                                            </Col>
                                        </Form.Row>
                                        <br />
                                        <Form.Row>
                                            <Form.Label column lg={4}>
                                                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: 10 }} />

                                        Province
                                    </Form.Label>
                                            <Col>
                                                <Select className="w-50" options={options} required />

                                            </Col>
                                        </Form.Row>
                                        <br />
                                        <Form.Row>
                                            <Form.Label column lg={4}>
                                                <FontAwesomeIcon icon={faInfoCircle} style={{ marginRight: 10 }} />

                                        Detail
                                    </Form.Label>
                                            <Col>
                                                <Form.Control className="w-50" as="textarea" rows={5} type="text" placeholder="Normal text" required/>
                                            </Col>
                                        </Form.Row>
                                        <br />
                                        <Form.Row>
                                            <Form.Label column lg={4}>
                                                <FontAwesomeIcon icon={faHiking} style={{ marginRight: 10 }} />
                                        Main activities
                                    </Form.Label>
                                            <Col>
                                                <Form.Control className="w-50" as="select"  required>
                                                    {activities.map(act => {
                                                        return <option>{act.label} </option>
                                                    })}
                                                </Form.Control>
                                            </Col>
                                        </Form.Row>
                                        <br />
                                        <Form.Row>
                                            <Form.Label column lg={4}>
                                                <FontAwesomeIcon icon={faDollarSign} style={{ marginRight: 10 }} />
                                        Price
                                    </Form.Label>
                                            <Col>

                                                <Form.Control className="w-50" type="number" placeholder="1000" required />

                                    </Col>
                                        </Form.Row>
                                        <br />
                                        <Form.Row>
                                            <Form.Label column lg={4}>
                                                Meet up Time
                                    </Form.Label>
                                            <Col>
                                                <TimePicker defaultValue={moment('00:00', format)} format={format} />
                                            </Col>
                                        </Form.Row>
                                        <br />
                                        <Form.Row>
                                            <Form.Label column lg={4}>
                                                Travel Time
                                            </Form.Label>
                                            <Col>
                                                <Form.Row>
                                                    <TimePicker defaultValue={moment('00:00', format)} format={format} />
                                                    <Form.Label column>Time Start</Form.Label>
                                                </Form.Row>
                                                <br />
                                                <Form.Row>
                                                    <TimePicker defaultValue={moment('00:00', format)} format={format} />
                                                    <Form.Label column>Time End</Form.Label>
                                                </Form.Row>
                                            </Col>
                                        </Form.Row>
                                    </Form>
                                    <Button onClick={() => handleNextTab()} style={{ marginTop: 20, marginLeft: '60%' }}>Next</Button>
                                </Tab.Pane>


                                <Tab.Pane eventKey={stateTab2}>
                                    <Form>
                                        <div>
                                            <Dragger {...props}>
                                                <p className="ant-upload-drag-icon">
                                                    <InboxOutlined />
                                                </p>
                                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                                <p className="ant-upload-hint">
                                                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                                                    band files
                                        </p>
                                            </Dragger>
                                            <Image src={file ? URL.createObjectURL(file) : null} alt={file ? file.name : null} />
                                        </div>
                                    </Form>
                                    <Button onClick={() => handlePreviousTab()}>Previous</Button>
                                    <Button style={{  marginLeft: '80%'}}>Submit</Button>


                                </Tab.Pane>
                            </Tab.Content>
                            <Container >

                                
                            </Container>

                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </div>

    );
};

export default CreateTrip;
