
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBarGuide from '../NavBar/NavBarGuide.js'
import React, { useEffect, useState } from "react";
import Select from 'react-select'
import { useForm, useStep } from "react-hooks-helper";

import { Container, Col, Row, Carousel, Card, Form, Button } from 'react-bootstrap'

import Basic from './Detail.js'
import Overview from './Overview.js'
import Detail from './Basic.js'
import Submit from './Submit.js'

function getSteps() {
    return ['Information', 'Account'];
  }
  
  export default function StepprtForm() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
  
    const handleNext = () => {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep(prevActiveStep => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
    
    //สำหรับ get Step ตาม index
    function getStepContent(stepIndex) {
      switch (stepIndex) {
        case 0:
          return 'Information Component';
        case 1:
          return 'Account Component';
        default:
          return 'Unknown stepIndex';
      }
    }
  
    return (
      <div>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography>All steps completed</Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              //สำหรับเรียกใช้ function getStepContent(พร้อมส่งindexไป)เพื่อเลือกcomponenet ตาม Switch case
              //ถ้าเอามาจาก material ui อย่าลืมเปลี่ยนจากTypography เป็น div ล่ะ
              <div>{getStepContent(activeStep)}</div>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                >
                  Back
                </Button>
                <Button variant="contained" color="primary" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }