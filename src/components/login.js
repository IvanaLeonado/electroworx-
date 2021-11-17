import React, { Component } from 'react';
import $ from "jquery";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/fontawesome';

class Login extends Component {
  constructor(){
    super();
    this.signinSubmit = this.signinSubmit.bind(this);
    this.valueInputChange = this.valueInputChange.bind(this);
    this.state = {
      email : '',
      password : ''
    }
    
  }

  
  signinSubmit(e){
    var xhttp = new XMLHttpRequest();
    var url = "http://localhost/electroworxservices/src/php/signin_action.php";
    var data = `email=${this.state.email}&password=${this.state.password}`;
    var urlData = url+"?"+data;
    xhttp.open("GET", urlData, true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            var res = JSON.parse(this.responseText);
            if(res["status"] === 200){
                $('#signinForm')[0].reset();
                window.location.replace('/home');
            }else{
                alert(res["message"]);
            }
        }
    };
    e.preventDefault();
  }

  valueInputChange = tags => (event) =>{
    switch(tags)
    {
        case 'email':
            this.setState({email: event.target.value})
            break;
        case 'password':
            this.setState({password: event.target.value})
            break;
        default:
            break;
    }
  }
  
  componentDidMount() {
   console.log("login component did mount");
  }

  componentWillUnmount(){
    console.log("login component will unmount");
  }
  
  render() {
    return (
      <div className="signup-form">
        <form id="signinForm" method="get" onSubmit={this.signinSubmit}>
            
            <div className="row">
                <h1 className="col-xs-6">LOGIN</h1>
                <a href="/index" className="react-icons"><FontAwesomeIcon icon={['fa', 'circle-xmark']} size="3x" fixedWidth/></a>
            </div>
            <hr/>
            <div className="form-group">
                <input type="email" className="form-control" name="email" id="email" placeholder="Email" required="required" value={this.state.email} onChange={this.valueInputChange('email')}/>
            </div>
            <div className="form-group">
                <input type="password" className="form-control" name="password" id="password" placeholder="Password" required="required" value={this.state.password} onChange={this.valueInputChange('password')}/>
            </div>
            <div className="form-group">
                <input type="submit" name="btnsignin" className="btn btn-outline-light btn-lg" value="SIGN IN"/>
            </div>
        </form>
      <div className="hint-text">Don't have an account? <a href="/signup">Sign up here</a></div>
      </div>
    );
  }
}
  
export default Login;