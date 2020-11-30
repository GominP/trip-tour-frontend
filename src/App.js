
import Home from './Home.js';

import React, { Component } from 'react';
import CreateTrip from './Guide/CreateTrip.js'
import MultiStepForm from './Guide/MultiPage/MultiStepForm.js'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Profile from './Customer/Profile.js';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <>
            <Route exact path='/' component={Home} />
            <Route exact path='/CreateTrip' component={CreateTrip} />
            <Route exact path='/MultiStepForm' component={ MultiStepForm } />
            <Route exact path='/Profile' component={Profile}/>
          </>
        </Switch>
      </Router>
    );
  }
}

export default App;
