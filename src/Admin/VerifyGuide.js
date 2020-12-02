import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Row, Col, Table, Form, Button, Image } from 'react-bootstrap'

const VerifyGuide = () => {
   const url = 'http://192.168.102.22:3030/api'

   const [dummy, setDummy] = useState()
   const [guides, setGuides] = useState([])
   const [guideInfos, setGuideInfos] = useState({})
   const [info, setInfo] = useState({})
   const [selectedGuide, setSelectedGuide] = useState(0)

   useEffect(() => {
      axios.get(url + '/user/guide/unverify',{ headers: {Authorization: localStorage.getItem('token')}})
      .then((res) => {
         // console.log(res.data);
         const guideData = {}
         for (let guide of res.data) {
            axios.get(url + '/user/guide/guideInfo/' + guide.guide_id,{ headers: {Authorization: localStorage.getItem('token')}})
            .then((r) => {
               guideData[guide.email] = r.data
               setGuideInfos(guideData)
               setGuides(prevGuides => {
                  for (const prevGuide of prevGuides) {
                     if (guide.email === prevGuide.email) {
                        prevGuide.guideInfo = r.data
                     }
                  }
                  return prevGuides
               })
            })
         }
         setGuides(res.data)
      })
   }, [])

   useEffect(() => {
      setTimeout(() => {
         setDummy(1)
      }, 600);
   })

   const handleOnSubmit = async (e) => {
      e.preventDefault()
      const res = await axios.put(url + '/guide/verify/a/' + ((guides[selectedGuide] && guides[selectedGuide].guideInfo) ? guides[selectedGuide].guideInfo._id : ''))
      if (res.status === 201) {
         window.location.href = "/VerifyGuide"
      }
   }

   return (
      <div >
         <Container style={{ marginTop: 80 }} >
            <Row>
               <Col xs={6}>
               <Table striped bordered hover>
                  <thead>
                     <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>License Type</th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        guides.map((g) => {

                           return (
                              <tr>
                                 <td>{g.fname + ' ' + g.lname}</td>
                                 <td>{g.email}</td>
                                 <td>{g.guideInfo && g.guideInfo.type}</td>
                              </tr>
                           )
                        })
                     }
                  </tbody>
                  </Table>
               </Col>
               <Col>
               <Image src={url + '/img?path=' + ((guides[selectedGuide] && guides[selectedGuide].guideInfo) ? guides[selectedGuide].guideInfo.selfie_img : '')} rounded height='200' style={{marginBottom: 10}}/>
               <Form onSubmit={handleOnSubmit}>

                  <Form.Group>
                     <Form.Label>Email address</Form.Label>
                     <Form.Control disable='true' value={(guides[selectedGuide]) ? guides[selectedGuide].email : ''}/>
                  </Form.Group>
                  <Form.Group>
                     <Form.Label>Name</Form.Label>
                     <Form.Control disable='true' value={((guides[selectedGuide]) ? guides[selectedGuide].fname : '') + ' ' + ((guides[selectedGuide]) ? guides[selectedGuide].lname : '')}/>
                  </Form.Group>

                  <Form.Group>
                     <Form.Label>Citizen Id</Form.Label>
                     <Form.Control disable='true' value={(guides[selectedGuide] && guides[selectedGuide].guideInfo) ? guides[selectedGuide].guideInfo.citizen_id : ''}/>
                  </Form.Group>

                  <Form.Group>
                     <Form.Label>Type</Form.Label>
                     <Form.Control disable='true' value={(guides[selectedGuide] && guides[selectedGuide].guideInfo) ? guides[selectedGuide].guideInfo.type : ''}/>
                  </Form.Group>

                  <Form.Group>
                     <Form.Label>License Id</Form.Label>
                     <Form.Control disable='true' value={(guides[selectedGuide] && guides[selectedGuide].guideInfo) ? guides[selectedGuide].guideInfo.license_id : ''}/>
                  </Form.Group>
                  
                  <Button variant="primary" type="submit">
                     Submit
                  </Button>

                  <Button variant="danger" style={{ marginLeft: 20}}>
                     Remove
                  </Button>
               </Form>
               </Col>
            </Row>
         </Container>
      </div>
   )
}

export default VerifyGuide