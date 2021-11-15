import React, { Component } from 'react';

class Component3 extends Component {
  constructor(){
    super();
    this.state = {
        sampleString : "Component 3"
    }
  }
  
  componentDidMount() {
    var movieList;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://ghibliapi.herokuapp.com/films", true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        
        if(this.readyState === 4 && this.status === 200 && this.statusText === "OK"){
            movieList = JSON.parse(this.responseText);
            for(var e of movieList){
                console.log(e);
            }
        }
    };
  }

  componentWillUnmount(){

  }
  
  render() {
    return (
        <div>
          <center>
            <h2>{this.state.sampleString}</h2>
          </center>
        </div>
    );
  }
}
  
export default Component3;