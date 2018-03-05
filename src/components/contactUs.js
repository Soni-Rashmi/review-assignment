import React, { Component } from "react";
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import twitter from "../assets/images/twitter.png";
import facebook from "../assets/images/fb.png";

export default class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message:"",
      ques: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    let value = target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    return(
      <div className="container-fluid container-body">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1 contact-us-card card">
            <div className="row">
              <div className="col-sm-9">
                <h2>Contact us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <form onSubmit={this.handleSubmit}>
                  <div className="row">
                    <FormGroup className="col-sm-6">
                      <ControlLabel className="required-label">NAME:</ControlLabel>
                      <FormControl componentClass="input" name="name" value ={this.state.name} onChange={this.handleInputChange}></FormControl>
                    </FormGroup>
                    <FormGroup className="col-sm-6">
                      <ControlLabel className="required-label">EMAIL :</ControlLabel>
                      <FormControl componentClass="input" type="email" name="email" value ={this.state.email} onChange={this.handleInputChange}></FormControl>
                    </FormGroup>
                  </div>
                  <div className="row">
                    <FormGroup className="col-sm-12">
                      <ControlLabel className="required-label">MESSAGE:</ControlLabel>
                      <FormControl componentClass="textarea" name="message" value ={this.state.comment}  onChange={this.handleInputChange} required></FormControl>
                    </FormGroup>
                  </div>
                  <div className="row">
                    <FormGroup className="col-sm-6">
                      <ControlLabel className="required-label">HOW MUCH IS 1+1 ?:</ControlLabel>
                      <FormControl componentClass="input" name="ques" value ={this.state.ques} onChange={this.handleInputChange}></FormControl>
                    </FormGroup>
                  </div>
                  <div className="row">
                    <FormGroup className="col-sm-12 ">
                      <button className="btn btn-primary pull-right">SEND</button>
                    </FormGroup>
                  </div>
                </form>
              </div>
              <div className="col-sm-3 company-info">
                <div className="email">
                  <strong>Email</strong>
                  <p>jobs@newput.com</p>
                </div>
                <div className="telephone">
                  <strong>TELEPHONE</strong>
                  <p>+91- 1234-90563 </p>
                </div>
                <div className="skype">
                  <strong>SKYPE</strong>
                  <p>Skype account </p>
                </div>
                <div className=" address">
                  <strong>ADDRESS</strong>
                  <p>DM Tower, 314, 21/1</p>
                  <p>Race Course Road</p>
                  <p>Indore, Madhya Pradesh</p>
                  <p>452001</p>
                </div>
                <div className="company-no">
                  <span>Company No. 0011922922</span>
                </div>
                <div className="images">
                  <img src="src/assets/images/fb.png" alt="facebook" />
                  <img src="src/assets/images/twitter.png" alt="twitter"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
