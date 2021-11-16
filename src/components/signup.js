import React, { Component } from 'react';
import $ from "jquery";

class Signup extends Component {
  constructor(){
    super();
    this.signupSubmit = this.signupSubmit.bind(this);
  }

  signupSubmit(e){
    var data = $("#signupForm").serialize();
    console.log(data);
    $.ajax({
        type : 'POST',
        url : 'http://localhost/electroworxservices/src/php/signup_action.php',
        data : data,
        success : function(response) {
            alert(response["message"]);
            if(response["status"] === 200){
                $('#signupForm')[0].reset();
            }
        }
    });
    e.preventDefault();
  }
  
  componentDidMount() {
    console.log("signup component did mount");
  }
 
  componentWillUnmount(){
    console.log("signup component will unmount");
  }
  
  render() {
    return (
        <div className="signup-form">
            <form id="signupForm" method="post" onSubmit={this.signupSubmit}>
                <h1>REGISTER</h1>
                <hr/>
                <div className="form-group">
                    <div className="row">
                        <div className="col-xs-6"><input type="text" className="form-control" name="first_name" id="first_name" placeholder="First Name" required="required"/></div>
                        <div className="col-xs-6"><input type="text" className="form-control" name="last_name" id="last_name" placeholder="Last Name" required="required"/></div>
                    </div>        	
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Email" required="required"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" name="password" id="password" placeholder="Password" required="required"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" name="confirm_password" id="confirm_password" placeholder="Confirm Password" required="required"/>
                </div>        
                <div className="form-group">
                    <input type="submit" className="btn btn-outline-light btn-lg" name="btnsignup" id="btnsignup" value="SIGN UP"/>
                </div>
            </form>
            <div className="hint-text">Already have an account? <a href="/login">Sign in here</a></div>
        </div>
    );
  }
}
  
export default Signup;