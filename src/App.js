
import Home from './Home.js';

import React, { Component } from 'react';
import CreateTrip from './Guide/CreateTrip.js'
import SelectTrip from './Guide/SelectTrip.js'
import ChooseJob from './Guide/ChooseJob.js'
import WorkSchedule from './Guide/WorkSchedule.js'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Profile from './Customer/Profile.js';
import EditProfile from './Customer/EditProfile.js'
import Detail from './Guide/MultiPage/Detail.js';
import DetailTrip from './MainPage/DetailTrip.js';

import Test from './User/test.js'

class App extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem('token')
    if (token === null) {

      
    }
    
  }
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
            <Route exact path='/Profile' component={ Profile } />
            <Route exact path='/EditProfile' component={ EditProfile } />
            <Route exact path='/MainPage/DetailTrip' component={ DetailTrip } />
            <Route exact path='/WorkSchedule' component={ WorkSchedule } />
            

          </>
        </Switch>
      </Router>
    );
  }
}

export default App;
