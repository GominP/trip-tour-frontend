
import Home from './Home.js';

import React, { Component } from 'react';
import CreateTrip from './Guide/CreateTrip.js'
import SelectTrip from './Guide/SelectTrip.js'
import ChooseJob from './Guide/ChooseJob.js'


import MultiStepForm from './Guide/MultiPage/MultiStepForm.js'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Detail from './Guide/MultiPage/Detail.js';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <>
            <Route exact path='/' component={Home} />
            <Route exact path='/MultiStepForm' component={MultiStepForm} />
            <Route exact path='/SelectTrip' component={ SelectTrip } />
            <Route exact path='/ChooseJob/:id' component={ ChooseJob } />
          </>
        </Switch>
      </Router>
    );
  }
}

export default App;
