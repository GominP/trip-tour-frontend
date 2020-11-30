
import Home from './Home.js';

import React, { Component } from 'react';
import CreateTrip from './Guide/CreateTrip.js'
import SelectTrip from './Guide/SelectTrip.js'
import ChooseJob from './Guide/ChooseJob.js'
import WorkSchedule from './Guide/WorkSchedule.js'


import Test from './User/test.js'


import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <>
            <Route exact path='/' component={Home} />
            <Route exact path='/CreateTrip' component={CreateTrip} />
            <Route exact path='/SelectTrip' component={ SelectTrip } />
            <Route exact path='/ChooseJob/:id' component={ ChooseJob } />
            <Route exact path='/WorkSchedule' component={ WorkSchedule } />
            

          </>
        </Switch>
      </Router>
    );
  }
}

export default App;
