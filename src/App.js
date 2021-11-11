import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <br/>
          <button onClick={this.nextPage}>To Page2 Button</button>
          <br/>
          <a href="/page2">To Page 2 Link</a>
        </header>
      </div>
    );
  }
}

export default App;
