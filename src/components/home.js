import React, { Component } from 'react';

class Home extends Component {
  constructor(){
    super();
    this.signoutClick = this.signoutClick.bind(this);
    this.tick = this.tick.bind(this);
    this.state = { date: new Date() };
  }

  signoutClick(){
    var xhttp = new XMLHttpRequest();
    var url = "http://localhost/electroworxservices/src/php/signout_action.php";
    xhttp.open("GET", url, true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            var res = JSON.parse(this.responseText);
            if(res["status"] === 200){
                window.location.replace('/login'); //replaces the current location
                //window.location = '../public/index.php'; //navigates to another location
            }
        }
    };
  } 

  tick() {
    this.setState({date: new Date()});
  }
  
  componentDidMount() {
    console.log("home page component did mount");
    setInterval(this.tick, 1000);
  }
 
  componentWillUnmount(){
    console.log("home page component will unmount");
  }
  
  render() {
    return (
        <div>
          <center>
            <h1>Hello!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            <button name="btnsignout" className="btn btn-danger btn-lg" onClick={this.signoutClick}>Sign Out</button>
          </center>
        </div>
    );
  }
}
  
export default Home;