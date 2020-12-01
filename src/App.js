
import Home from './Home.js';

import React, { useState, useEffect } from 'react';
import axios from 'axios'
import CreateTrip from './Guide/CreateTrip.js'
import SelectTrip from './Guide/SelectTrip.js'
import ChooseJob from './Guide/ChooseJob.js'
import WorkSchedule from './Guide/WorkSchedule.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './Customer/Profile.js';
import EditProfile from './Customer/editProfile.js'
import NavBarHead from './NavBar/NavbarHead.js'
import NavBarGuide from './NavBar/NavBarGuide.js'
import NavBarAdmin from './NavBar/NavBarAdmin.js'
import Detail from './Guide/MultiPage/Detail.js';
import DetailTrip from './MainPage/DetailTrip.js';

const App = () => {
  const [token] = useState(localStorage.getItem('token'))

  const url = 'http://192.168.102.22:3030/api'

  const [role, setRole] = useState('C')
  const [isLogin, setLogin] = useState(false)

  useEffect(() => {
    if(token) {
      axios.get(url + '/user/token/' + token).then((res) => {
        console.log(res.data);
        setRole(res.data.role)
        setLogin(true)
      })
    }
  })

  return (
    <div>
      {role === 'A' ? <NavBarAdmin/> : role === 'G' ? <NavBarGuide/> : <NavBarHead isLogin={isLogin}/>}
      
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
        </>
      </Switch>
    </Router>
    </div>
  );
  
}

export default App;
