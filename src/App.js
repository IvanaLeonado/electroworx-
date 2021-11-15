//import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Page2 from './components/page2Component.js';
import Login from './components/login.js';
import Home from './components/home.js';
import Signup from './components/signup.js';
import Index from './components/index.js';

class App extends Component {
  constructor(){
    super();
    this.nextPage = this.nextPage.bind(this);
  }

  nextPage(){
    this.props.history.push('/page2');
  }

  render() {
    return (    
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' component={Index} />
            <Route path='/index' component={Index} />
            <Route path='/page2Components' component={Page2} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/home' component={Home} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
