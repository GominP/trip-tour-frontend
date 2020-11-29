

import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBarGuide from '../NavBar/NavBarGuide.js'
import React, { useEffect, useState } from "react";
import Select from 'react-select'
import { useForm, useStep } from "react-hooks-helper";

import { Container, Col, Row, Carousel, Card, Form, Button } from 'react-bootstrap'

import Basic from './Basic.js'
import Overview from './Overview.js'
import Detail from './Detail.js'
import Submit from './Submit.js'


  const steps = [
    { id: "basic" },
    { id: "detail" },
    { id: "overview" },
    { id: "submit" }
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

  const MultiStepForm = ({ images }) => {
    const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({ initialStep: 0, steps });
    const { id } = step;
  
    const props = { formData, setForm, navigation };
  
    switch (id) {
      case "basic":
        return <Basic {...props} />;
      case "detail":
        return <Detail {...props} />;
      case "overview":
        return <Overview {...props} />;
      case "submit":
        return <Submit {...props} />;
      default:
        return null;
    }
  };

  
  export default MultiStepForm;

  