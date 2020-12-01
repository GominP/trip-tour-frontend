import ReactDOM from 'react-dom'
import NavBarGuide from '../NavBar/NavBarGuide.js'
import Select from 'react-select'
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

const CreateTrip = ({ }) => {
    const url = "http://192.168.102.22:3030/api"
    const axios = require('axios');

    // TabState
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

    //Province
    const [provinceOption, setProvinceOption] = useState([]);

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

    //Upload Img
    const { Dragger } = Upload;
    const [file, setFile] = React.useState(null)
    const fileHandler = (e) => {
        setFile(e.target.files[0])
    }
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
                                    <Form>
                                        <Form.Row>

                                            <Form.Label column lg={4}>
                                                <FontAwesomeIcon icon={faSignature} style={{ marginRight: 10 }} />
                                                     Name Trip
                                            </Form.Label>
                                            <Col>
                                                <Form.Control className="w-50" type="text" placeholder="Normal text" value={data.name} onChange={(e) => createTrip(e,'name')} required  />
                                            </Col>
                                        </Form.Row>
                                        <br />
                                        <Form.Row>
                                            <Form.Label column lg={4}>
                                                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: 10 }} />
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
                                        
                                        <br />
                                        <Form.Row>
                                            <Form.Label column lg={4}>
                                                <FontAwesomeIcon icon={faInfoCircle} style={{ marginRight: 10 }} />
                                                    Detail
                                                </Form.Label>
                                            <Col>
                                                <Form.Control className="w-50" as="textarea" rows={5} type="text" placeholder="Normal text"  value={data.detail} onChange={(e) => createTrip(e,'detail')}required />
                                            </Col>
                                        </Form.Row>
                                        <br />
                                        <Form.Row>
                                            <Form.Label column lg={4}>
                                                <FontAwesomeIcon icon={faHiking} style={{ marginRight: 10 }} />
                                                    Main activities
                                                </Form.Label>
                                            <Col>
                                                <Form.Control className="w-50" as="select" onChange={(e) => createTrip(e,'tag')} required>
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

                                                <Form.Control className="w-50" type="number" placeholder="1000" value={data.price} onChange={(e) => createTrip(e,'price')} required />
                                            </Col>
                                        </Form.Row>
                                        <br />
                                        <Form.Row>
                                            <Form.Label column lg={4}>
                                                Meet up Location
                                            </Form.Label>
                                            <Col>
                                                <Form.Control className="w-50"  type="text" placeholder="BTS" value={data.meeting_point} onChange={(e) => createTrip(e,'meeting_point')} required />
                                            </Col>
                                        </Form.Row>
                                        <br />
                                        <Form.Row>
                                            <Form.Label column lg={4}>
                                                Travel Time
                                            </Form.Label>
                                            <Col>
                                                <Form.Row>
                                                    <TimePicker  style={{ marginLeft: 5}} value={timeStart} onChange={timeStartChange} />
                                                    <Form.Label column>Time Start</Form.Label>
                                                </Form.Row>
                                                <br />
                                                <Form.Row>
                                                    <TimePicker  style={{ marginLeft: 5}} value={timeEnd} onChange={timeEndChange} />
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
                                                <p className="ant-upload-drag-icon"><InboxOutlined /></p>
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
                                    <Button style={{ marginLeft: '80%' }} onClick={()=> postCreateTrip()} >Submit</Button>

                                </Tab.Pane>

                            </Tab.Content>
                          
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
            {/* <Button onClick={() => showData()} >Show Data</Button> */}
        </div>

    );
};

export default CreateTrip;
