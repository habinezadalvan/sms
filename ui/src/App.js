import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import DonateLikeButton from './components/common/DonateLikeButton';
import HomePage from './components/Home/HomePage';
import Donate from './components/Donate/Donate';
import Sms from './components/sms/Sms';


export default function App() {
  return (
    <Router>
      <Route path="/" exact component={HomePage}/>
      <Route path="/donate" exact component={Donate}/>
      <Route path="/sms" component={Sms}/>
    </Router>
  )
}
