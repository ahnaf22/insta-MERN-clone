/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import the screens
import Home from './components/screens/Home';
import Profile from './components/screens/Profile';
import Login from './components/screens/Login';
import Signup from './components/screens/Signup';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/login' exact>
          <Login />
        </Route>
        <Route path='/profile' exact>
          <Profile />
        </Route>
        <Route path='/signup' exact>
          <Signup />
        </Route>
      </Router>
    </div>
  );
}

export default App;
