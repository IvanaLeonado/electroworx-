import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import Page2 from './components/page2Component.js';
import Login from './components/login.js';
import Home from './components/home.js';
import Signup from './components/signup.js';

ReactDOM.render(
  <div>
    <Router>
      <div>
        <Route exact path='/' component={Login} />
        {/*<Route path='/page2' component={Page2} />*/}
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/home' component={Home} />
      </div>
    </Router>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
