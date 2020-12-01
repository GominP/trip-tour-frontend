import ReactDOM from 'react-dom'
import NavBarGuide from '../NavBar/NavBarGuide.js'
import Select from 'react-select'
<<<<<<< HEAD
import moment from 'moment';
import axios from "axios";
import 'antd/dist/antd.css';
import { TimePicker } from 'antd';
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faHiking, faInfoCircle, faMapMarkerAlt, faSignature } from "@fortawesome/free-solid-svg-icons";
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { Container, Col, Row, Form, Button, Nav, Tab, Image, Carousel } from 'react-bootstrap'

const CreateTrip = () => {
    const url = "http://192.168.102.22:3030/api"

    // TabState
    const [stateTab, setStatTab] = useState("first");
    const [stateTab2, setStatTab2] = useState("second");
=======
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

>>>>>>> fix merge
    const handleNextTab = () => {
        setStatTab("second");
        setStatTab2("first");
    }
<<<<<<< HEAD
=======

>>>>>>> fix merge
    const handlePreviousTab = () => {
        setStatTab("first");
        setStatTab2("second");
    }

<<<<<<< HEAD
    //Province
    const [provinceOption, setProvinceOption] = useState([]);
=======


    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
>>>>>>> fix merge

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

<<<<<<< HEAD
    //Upload Img
    const { Dragger } = Upload;
    const [file, setFile] = React.useState(null)
    const fileHandler = (e) => {
        setFile(e.target.files[0])
    }
=======
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


>>>>>>> fix merge
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

<<<<<<< HEAD


    const [data, setData] = useState({
        name: '',
        province: 'Bangkok',
        address: '',
        detail: '',
        tag: 'Art & Craft Workshops',
        price: '',
        meeting_point: '',


    })
    const createTrip = (e,key) => {
        setData({
            ...data,
            [key]:e.target.value
        
        })
    }



    //Set Time
    const [timeStart, setTimeStart] = useState("");
    const [timeEnd, setTimeEnd] = useState("");

    const timeStartChange = (time,timeString) => {
        setTimeStart(time);
      };
    const timeEndChange = (time, timeString) => {
        setTimeEnd(time);
    }


    // const showData = () => {
    //     console.log('test on change: ' + data.nameTrip + 
    //     data.province + 
    //     data.address + 'and' +
    //     data.detail + 'and' +
    //     data.activity + 'and' +
    //     data.price + 'and' +
    //     data.meetUp + 'and' +
    //     moment(timeStart).format("LT") + 'and' + 
    //     moment(timeEnd).format("LT"));
    // } 

    //Post Method
    
    

    const postCreateTrip = () => {

        console.log(data);

        axios({
            method: 'get',
            url: url + '/province/name/' + data.province
        }).then((res) => {
            const provinceId = res.data[0]._id
            setData({
                ...data,
                start_time: timeStart,
                end_time: timeEnd,
                province_id: provinceId
            })
            console.log(data);

            axios.post(url + '/trip', data)
            .then( res => {
                console.log(res);
                // window.location.href= "/"
            })
     
        })
     
        
    }

    useEffect( () => {

        //Get Province
        axios.get(url + '/province').then(res => {
                console.log(res.data);
                const provinces = res.data.map((d)=> d.name)
                setProvinceOption(provinces)
        })


        }, [])


    return (

        <div>
=======
    return (

        <div>
            <NavBarGuide />
>>>>>>> fix merge
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
<<<<<<< HEAD
                                    <Form>
=======
                                    <Form  noValidate validated={validated} onSubmit={handleSubmit}>
>>>>>>> fix merge
                                        <Form.Row>

                                            <Form.Label column lg={4}>
                                                <FontAwesomeIcon icon={faSignature} style={{ marginRight: 10 }} />
<<<<<<< HEAD
                                                     Name Trip
                                            </Form.Label>
                                            <Col>
                                                <Form.Control className="w-50" type="text" placeholder="Normal text" value={data.name} onChange={(e) => createTrip(e,'name')} required  />
=======
                                        Name Trip
                                            </Form.Label>
                                            <Col>
                                                <Form.Control className="w-50" type="text" placeholder="Normal text" required/>
>>>>>>> fix merge
                                            </Col>
                                        </Form.Row>
                                        <br />
                                        <Form.Row>
                                            <Form.Label column lg={4}>
                                                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: 10 }} />
<<<<<<< HEAD
                                                Province
                                            </Form.Label>
                                            <Col>
                                                <Form.Control className="w-50" as="select" value={data.province} onChange={(e) => createTrip(e,'province')} required  >                                                    
                                                    {provinceOption.map((act) => {
                                                        return <option>{act} </option>
                                                    })}
                                                </Form.Control>
                                            </Col>
                                        </Form.Row>
                                        <br />
                                        <Form.Row>
                                            <Form.Label column lg={4}>
                                                <FontAwesomeIcon icon={faInfoCircle} style={{ marginRight: 10 }} />
                                                    Address
                                                </Form.Label>
                                            <Col>
                                                <Form.Control className="w-50"  type="text" placeholder="Address"  value={data.address} onChange={(e) => createTrip(e,'address')}required />
                                            </Col>
                                        </Form.Row>
                                        
=======

                                        Province
                                    </Form.Label>
                                            <Col>
                                                <Select className="w-50" options={options} required />

                                            </Col>
                                        </Form.Row>
>>>>>>> fix merge
                                        <br />
                                        <Form.Row>
                                            <Form.Label column lg={4}>
                                                <FontAwesomeIcon icon={faInfoCircle} style={{ marginRight: 10 }} />
<<<<<<< HEAD
                                                    Detail
                                                </Form.Label>
                                            <Col>
                                                <Form.Control className="w-50" as="textarea" rows={5} type="text" placeholder="Normal text"  value={data.detail} onChange={(e) => createTrip(e,'detail')}required />
=======

                                        Detail
                                    </Form.Label>
                                            <Col>
                                                <Form.Control className="w-50" as="textarea" rows={5} type="text" placeholder="Normal text" required/>
>>>>>>> fix merge
                                            </Col>
                                        </Form.Row>
                                        <br />
                                        <Form.Row>
                                            <Form.Label column lg={4}>
                                                <FontAwesomeIcon icon={faHiking} style={{ marginRight: 10 }} />
<<<<<<< HEAD
                                                    Main activities
                                                </Form.Label>
                                            <Col>
                                                <Form.Control className="w-50" as="select" onChange={(e) => createTrip(e,'tag')} required>
=======
                                        Main activities
                                    </Form.Label>
                                            <Col>
                                                <Form.Control className="w-50" as="select"  required>
>>>>>>> fix merge
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
<<<<<<< HEAD
                                            </Form.Label>
                                            <Col>

                                                <Form.Control className="w-50" type="number" placeholder="1000" value={data.price} onChange={(e) => createTrip(e,'price')} required />
                                            </Col>
=======
                                    </Form.Label>
                                            <Col>

                                                <Form.Control className="w-50" type="number" placeholder="1000" required />

                                    </Col>
>>>>>>> fix merge
                                        </Form.Row>
                                        <br />
                                        <Form.Row>
                                            <Form.Label column lg={4}>
                                                Meet up Time
<<<<<<< HEAD
                                            </Form.Label>
                                            <Col>
                                                <Form.Control className="w-50"  type="text" placeholder="BTS" value={data.meeting_point} onChange={(e) => createTrip(e,'meeting_point')} required />
=======
                                    </Form.Label>
                                            <Col>
                                                <TimePicker defaultValue={moment('00:00', format)} format={format} />
>>>>>>> fix merge
                                            </Col>
                                        </Form.Row>
                                        <br />
                                        <Form.Row>
                                            <Form.Label column lg={4}>
                                                Travel Time
                                            </Form.Label>
                                            <Col>
                                                <Form.Row>
<<<<<<< HEAD
                                                    <TimePicker  style={{ marginLeft: 5}} value={timeStart} onChange={timeStartChange} />
=======
                                                    <TimePicker defaultValue={moment('00:00', format)} format={format} />
>>>>>>> fix merge
                                                    <Form.Label column>Time Start</Form.Label>
                                                </Form.Row>
                                                <br />
                                                <Form.Row>
<<<<<<< HEAD
                                                    <TimePicker  style={{ marginLeft: 5}} value={timeEnd} onChange={timeEndChange} />
=======
                                                    <TimePicker defaultValue={moment('00:00', format)} format={format} />
>>>>>>> fix merge
                                                    <Form.Label column>Time End</Form.Label>
                                                </Form.Row>
                                            </Col>
                                        </Form.Row>
                                    </Form>
                                    <Button onClick={() => handleNextTab()} style={{ marginTop: 20, marginLeft: '60%' }}>Next</Button>
                                </Tab.Pane>

<<<<<<< HEAD
                                <Tab.Pane eventKey={stateTab2}>
                                    
                                    <Form>
                                        <div>
                                            <Dragger {...props}>
                                                <p className="ant-upload-drag-icon"><InboxOutlined /></p>
=======

                                <Tab.Pane eventKey={stateTab2}>
                                    <Form>
                                        <div>
                                            <Dragger {...props}>
                                                <p className="ant-upload-drag-icon">
                                                    <InboxOutlined />
                                                </p>
>>>>>>> fix merge
                                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                                <p className="ant-upload-hint">
                                                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                                                    band files
<<<<<<< HEAD
                                                </p>
=======
                                        </p>
>>>>>>> fix merge
                                            </Dragger>
                                            <Image src={file ? URL.createObjectURL(file) : null} alt={file ? file.name : null} />
                                        </div>
                                    </Form>
                                    <Button onClick={() => handlePreviousTab()}>Previous</Button>
<<<<<<< HEAD
                                    <Button style={{ marginLeft: '80%' }} onClick={()=> postCreateTrip()} >Submit</Button>

                                </Tab.Pane>

                            </Tab.Content>
                          
=======
                                    <Button style={{  marginLeft: '80%'}}>Submit</Button>


                                </Tab.Pane>
                            </Tab.Content>
                            <Container >

                                
                            </Container>

>>>>>>> fix merge
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
<<<<<<< HEAD
            {/* <Button onClick={() => showData()} >Show Data</Button> */}
=======
>>>>>>> fix merge
        </div>

    );
};

export default CreateTrip;
