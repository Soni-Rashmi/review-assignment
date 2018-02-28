import React, { Component} from "react";
import FacebookProvider, { Login } from "react-facebook";
import graph from "fb-react-sdk";
import ls from "localstorage-ttl";
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

import jsonData from "../constants/userData.json";
import { PROFILE_ROUTE_PATH } from "../constants/routePath";

let accessToken;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.handleResponse = this.handleResponse.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getEmailValidationState = this.getEmailValidationState.bind(this);
    this.getPasswordValidationState = this.getPasswordValidationState.bind(this);

    this.state = {
      email : "",
      pwd : ""
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.getEmailValidationState() === "success" && this.getPasswordValidationState() === "success") {
      let profileData = jsonData;
      ls.set("profileData", profileData);

      if(profileData.verified){
        this.props.history.push(PROFILE_ROUTE_PATH);
      }
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    let value = target.value;

    this.setState({
      [name]: value});
  }

  handleResponse(data) {
    let instance = this;
    let profileData;
    // accesToken = data.tokenDetail.accessToken;
    graph.setAccessToken(data.tokenDetail.accessToken);
    graph.get("me?fields=picture,cover", function(err, res) {
      profileData = {
        name : data.profile.name,
        email : data.profile.email,
        gender : data.profile.gender,
        profile_img_url : res.picture.data.url,
        cover_photo_url : res.cover.source,
        varified : true
      }
      ls.set("profileData", profileData);
      if(data.profile.verified === true){
        instance.props.history.push(PROFILE_ROUTE_PATH);
      }
    });
  }

  handleError(error){
    this.setState({ error });
  }

  getEmailValidationState() {
    if(this.state && this.state.email){
      if(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(this.state.email)){
        return 'success'
      } else {
        return 'error'
      }
    }
    return null;
  }

  getPasswordValidationState() {
    if(this.state && this.state.pwd) {
      const length = this.state.pwd.length;
      if (length > 6 && length < 12) {
        return 'success';
      } else if(length <= 0) {
        return 'error';
      }
    }
    return null;
  }

  render() {
    return(
      <div className="container-fluid container-body">
        <div className="row">
          <div className="col-sm-6 col-md-4 col-sm-offset-3 col-md-offset-4 form-container">
            <form id="my-form" onSubmit={this.handleSubmit}>
              <FormGroup validationState={this.getEmailValidationState()}>
                <ControlLabel>Email: </ControlLabel>
                <FormControl componentClass="input" name="email" type="email" value ={this.state.email} onChange={this.handleInputChange} required></FormControl>
                <FormControl.Feedback />
              </FormGroup>
              <FormGroup validationState={this.getPasswordValidationState()}>
                <ControlLabel>Password: </ControlLabel>
                <FormControl componentClass="input" name="pwd" type="password" value ={this.state.pwd} onChange={this.handleInputChange} required></FormControl>
                <FormControl.Feedback />
              </FormGroup>
              <FormGroup>
                <button type="submit" className="btn btn-primary">Submit</button>
                <FacebookProvider appId="190018165082622">
                  <Login
                     onResponse={this.handleResponse}
                     onError={this.handleError}
                   >
                    <button className="btn btn-primary pull-right facebook-btn"><i className="fa fa-facebook-square"></i> Continue with facebook </button>
                  </Login>
                </FacebookProvider>
              </FormGroup>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
