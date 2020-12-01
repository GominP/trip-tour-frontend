import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Nav, Navbar, Modal, Form, Tabs, Tab } from 'react-bootstrap'


function NavbarHead(props) {

    const handleOnLogout = (e) => {
        localStorage.removeItem('token')
        window.location.href = '/'
    }

    const url = 'http://192.168.102.22:3030/api'
    const license_type = [
        'SILVER',
        'GOLD',
        'PINK',
        'BULE',
        'GREEN',
        'RED',
        'ORANGE',
        'YELLOW',
        'PURPLE',
        'BROWN'
    ]

    const [showLogin, setShowLogin] = useState(false);
    const [show, setShow] = useState(false);
    const [loginData, setLogin] = useState({})
    const [data, setData] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        confirm_password: '',
        citizen_id: '',
        license_id: '',
        type: 'SILVER',
        bankaccount_number: '',
        phone_number: '',
        birth_date: '',
        selfie_img: null
    }) 
    const [tab, setTab] = useState('traveler');

    const [validated, setValidated] = useState(false);

    const [alertMessage, setAlert] = useState('');


    const handleClose = () => {
        setValidated(false);
        setShow(false);
    }

    const handleLoginClose = () => {
        setShowLogin(false);
    }

    const handleLoginShow = () => setShowLogin(true)
    const handleShow = () => setShow(true);

    const handleLoginInputChange = (e, key) => {
        setLogin({
            ...loginData,
            [key]: e.target.value
        })
    }

    const handleInputChange = (e, key) => {
        if (key === "selfie_img") {
            setData({
                ...data,
                [key]: e.target.files[0]
            })
        } else {
            setData({
                ...data,
                [key]: e.target.value
            })
        }
    }

    const handleTapChange = (t) => {
        setTab(t)
        setData({
            fname: '',
            lname: '',
            email: '',
            password: '',
            confirm_password: '',
            citizen_id: '',
            license_id: '',
            type: 'SILVER',
            bankaccount_number: '',
            phone_number: '',
            birth_date: '',
            selfie_img: null
        })
        setValidated(false)
    }

    const onLoginSubmit = (e) => {
        e.preventDefault()
        console.log(loginData);
        axios({
            method: 'post',
            url: url + '/login',
            headers: {}, 
            data: {
              ...loginData // This is the body part
            }
        })
        .then(function (response) {
            //handle success
            console.log(response);
            if (response.status === 200) {
                console.log(response.data);
                localStorage.setItem('token', response.data)
                window.location.href = '/'
            } 
        })
        .catch(function (response) {
            //handle error
            console.log(response);
            console.log('asa');
            setAlert('Incorrect email or password.')
        });
    }

    const onUserSubmit = async (e) => {
        e.preventDefault()
        const form = e.currentTarget
        if (form.checkValidity() === false) {
            e.stopPropagation()
        } else {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...data,
                })
            };
            const res = await fetch(url + '/user', requestOptions)
            if (res.status === 201) {
                console.log(res.status);
                window.location.href = '/'
            } else {
                //error
            }
        }
        setValidated(true)

    }

    const onGuideSubmit = async (e) => {
        e.preventDefault()
        const form = e.currentTarget
        if (form.checkValidity() === false) {
            e.stopPropagation()
        } else {
            console.log(data);
            let bodyFormData = new FormData();
            const keys = Object.keys(data)
            keys.map((k) => {
                bodyFormData.append(k, data[k])
                return console.log(k + "-" + data[k]);
            })

            axios({
                method: 'post',
                url: url + '/user/guide',
                data: bodyFormData,
                headers: { 'Content-Type': 'multipart/form-data' }
            })
            .then(function (response) {
                //handle success
                console.log(response);
                if (response.status === 201) {
                    window.location.href = '/'
                }
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
        }
        setValidated(true)
    }

    return (
    <div className="App">
        <Navbar bg="rgba(0,0,0,0.4)" variant="dark" bg="dark" fixed="top" >
            <Navbar.Brand href="/">Trip & Tour</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/CreateTrip">Test</Nav.Link>
                <Nav.Link href="/Profile">Customer</Nav.Link>
            </Nav>
            {props.isLogin ? 
            <Nav className="justify-content-end">
                <Nav.Link onClick={handleOnLogout}>Logout</Nav.Link>
            </Nav>
            :
            <Nav className="justify-content-end">
                <Nav.Link onClick={handleLoginShow}>Login</Nav.Link>
                <Nav.Link onClick={handleShow}>Register</Nav.Link>  
            </Nav>
            }
        </Navbar>

        <Modal show={showLogin} onHide={handleLoginClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form style={{  display: 'flex', flexDirection: 'column',justifyContent: 'center' }} 
                        onSubmit={onLoginSubmit}>
                        <Form.Group>
                            <Form.Control type="email" placeholder="Email" value={loginData.email} onChange={e=>handleLoginInputChange(e, 'email')} required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="password" placeholder="Password" value={loginData.password} onChange={e=>handleLoginInputChange(e, 'password')} required/>
                            <Form.Text className="text-muted alert-danger">
                                {alertMessage}
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>

                    </Form>

                </Modal.Body>

            </Modal>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Register</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Tabs
                id="controlled-tab-example"
                activeKey={tab}
                onSelect={(t) => handleTapChange(t)}
                >
                <Tab eventKey="traveler" title="Traveler">
                <Container style={{ marginTop: 20, }}>
                <Form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', }} 
                    onSubmit={onUserSubmit} noValidate validated={validated}>
                    <Row>
                    <Col>
                        <Form.Group>
                            <Form.Control type="text" placeholder="First Name" value={data.fname} onChange={e => handleInputChange(e, "fname")} required/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Last Name" value={data.lname} onChange={e => handleInputChange(e, "lname")} required/>
                        </Form.Group>
                    </Col>
                    </Row>
                    <Form.Group>
                        <Form.Control type="email" placeholder="Email" value={data.email} onChange={e => handleInputChange(e, "email")} required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="password" placeholder="Password" value={data.password} onChange={e => handleInputChange(e, "password")} required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="password" placeholder="Confirm Password" value={data.confirm_password} onChange={e => handleInputChange(e, "confirm_password")} required/>
                    </Form.Group>
                    <Row>
                    <Col>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Phone Number" value={data.phone_number} onChange={e => handleInputChange(e, "phone_number")} required/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Control type="date" value={data.birth_date} onChange={e => handleInputChange(e, "birth_date")} required/>
                            <Form.Text className="text-muted">
                                Date of Birth
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    </Row>
                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                </Form>
                </Container>
                </Tab>
                <Tab eventKey="guide" title="Guide">
                <Container style={{ marginTop: 20, }}>
                <Form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', }}
                            onSubmit={onGuideSubmit} noValidate validated={validated} enctype="multipart/form-data">
                    <Row>
                    <Col>
                        <Form.Group>
                            <Form.Control type="text" placeholder="First Name" value={data.fname} onChange={e => handleInputChange(e, "fname")} required/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Last Name" value={data.lname} onChange={e => handleInputChange(e, "lname")} required/>
                        </Form.Group>
                    </Col>
                    </Row>
                    <Form.Group>
                        <Form.Control type="email" placeholder="Email" value={data.email} onChange={e => handleInputChange(e, "email")} required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="password" placeholder="Password" value={data.password} onChange={e => handleInputChange(e, "password")} required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="password" placeholder="Confirm Password" value={data.confirm_password} onChange={e => handleInputChange(e, "confirm_password")} required/>
                    </Form.Group>

                    <Form.Group>
                        <Form.File label={data.selfie_img ? data.selfie_img.name : 'ID Card with Selfie'} onChange={e => handleInputChange(e, "selfie_img")} required custom/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Citizen ID" value={data.citizen_id} onChange={e => handleInputChange(e, "citizen_id")} required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Guide License number" value={data.license_id} onChange={e => handleInputChange(e, "license_id")} required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control as="select" onChange={e => handleInputChange(e, "type")} required>
                        {license_type.map((t) => {
                            return <option value={t}>{t}</option>
                        })}
                        </Form.Control>
                        <Form.Text className="text-muted">
                            TYPE OF GUIDE LICENSE
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Bank account number" value={data.bankaccount_number} onChange={e => handleInputChange(e, "bankaccount_number")} required/>
                    </Form.Group>
                    <Row>
                    <Col>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Phone Number" value={data.phone_number} onChange={e => handleInputChange(e, "phone_number")} required/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Control type="date" onChange={e => handleInputChange(e, "birth_date")} required/>
                            <Form.Text className="text-muted">
                                Date of Birth
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    </Row>
                {/* <Form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', }}
                            action="http://192.168.102.22:3030/api/user/guide" method="post" noValidate enctype="multipart/form-data">
                    <Row>
                    <Col>
                        <Form.Group>
                            <Form.Control type="text" placeholder="First Name" name="fname" required/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Last Name" name="lname" required/>
                        </Form.Group>
                    </Col>
                    </Row>
                    <Form.Group>
                        <Form.Control type="email" placeholder="Email" name="email" required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="password" placeholder="Password" name="password" required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="password" placeholder="Confirm Password" name="confirm_password" required/>
                    </Form.Group>

                    <Form.Group>
                        <Form.File label="ID Card with Selfie" name="selfie_img" required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Citizen ID" name="citizen_id" required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Guide License number" name="license_id" required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control as="select" name="type" required>
                        {license_type.map((t) => {
                            return <option value={t}>{t}</option>
                        })}
                        </Form.Control>
                        <Form.Text className="text-muted">
                            TYPE OF GUIDE LICENSE
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Bank account number" name="bankaccount_number" required/>
                    </Form.Group>
                    <Row>
                    <Col>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Phone Number" name="phone_number" required/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Control type="date" name="birth_date" required/>
                            <Form.Text className="text-muted">
                                Date of Birth
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    </Row> */}
                    <Button variant="primary" type="submit">
                        Submit
                    </Button> 
                </Form> 
                </Container>
                </Tab>
            </Tabs>
            </Modal.Body>
            {/* <Modal.Footer>
            <form action="http://192.168.102.22:3030/api/img" method="post" enctype="multipart/form-data">
                <input type="file" name="avatar" />
                <button type="submit">s</button>
            </form>
            </Modal.Footer> */}
        </Modal>
    </div>
  );
}

export default NavbarHead;
