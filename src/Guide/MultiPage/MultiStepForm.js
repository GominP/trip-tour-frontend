

import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBarGuide from '../NavBar/NavBarGuide.js'
import React, { useEffect, useState } from "react";
import Select from 'react-select'
import { useForm, useStep } from "react-hooks-helper";

import { Container, Col, Row, Carousel, Card, Form, Button } from 'react-bootstrap'

import Basic from './Basic.js'
import Detail from './Detail.js'



  const steps = [
    { id: "basic" },
    { id: "detail" }
  ];

  const defaultData = {
    firstName: "Jane",
    lastName: "Doe",
    nickName: "Jan",
    address: "200 South Main St",
    city: "Anytown",
    state: "CA",
    zip: "90505",
    email: "email@domain.com",
    phone: "+61 4252 454 332"
  };

  const MultiStepForm = () => {
    const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({ initialStep: 0, steps });
    const { id } = step;
  
    const props = { formData, setForm, navigation };
  
    switch (id) {
      case "basic":
        return <Basic {...props} />;
      case "detail":
        return <Detail {...props} />;
      default:
        return null;
    }


  };

  
  export default MultiStepForm;

  