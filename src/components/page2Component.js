import React, { Component } from 'react';
import Component3 from './nonPageComponent.js';

class Page2 extends Component {
  constructor(){
    super();
    this.state = {
        sampleString : "Page 2"
    }
  }
  
  componentDidMount() {

  }

  componentWillUnmount(){

  }
  
  render() {
    return (
        <div>
          <center>
            <h1>{this.state.sampleString}</h1>
            <Component3/>
          </center>
        </div>
    );
  }
}
  
export default Page2;