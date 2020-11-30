import React from "react";
import NavBarGuide from '../../NavBar/NavBarGuide.js'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'


import { Container, Col, Row, Carousel, Card, Form, Button, Nav, Image  } from 'react-bootstrap'

import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const Detail = ({ setForm, formData, navigation }) => {
    // const { firstName, lastName, nickName } = formData;

    const { previous, next } = navigation;

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
              console.log();
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };

    

    return (
        <div>
            <NavBarGuide />
            <div>
                <Container style={{ marginTop: 80 }}>
                    <Row>
                        <Col sm={3}>
                            <Row>
                                <Nav.Link href="#disabled" disabled>
                                    Basic
                                 </Nav.Link>
                            </Row>
                            <Row style={{ marginTop: 50 }}>
                                <Nav.Link >
                                    Photo Gallery
                                 </Nav.Link>
                            </Row>
                        </Col>
                        <Col sm={9}>
                            <Form>
                                {/* <Form.Group>
                                    <Form.Label>Test</Form.Label>
                                    <Form.Control type="text" name="firstName" value={firstName} onChange={setForm} />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Test</Form.Label>
                                    <Form.Control type="text" name="lastName" value={lastName} onChange={setForm} />
                                </Form.Group> */}
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
                                    <Image  src={file ? URL.createObjectURL(file) : null} alt={file ? file.name : null} />
                                    {/* <Form.File type="file" onChange={fileHandler} /> */}
                                </div>
                            </Form>
                            <div>
                                <Button onClick={previous}> Previous </Button>

                                <Button > Submit </Button>
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

export default Detail;
