import React, { Component } from "react";
import ls from "localstorage-ttl";
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

import { PROFILE_ROUTE_PATH } from "../constants/routePath";

let allComments = ls.get("allComments");
let newComment;

export default class SendPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      image: "",
      error: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getCommentValidationState = this.getCommentValidationState.bind(this);
    this.getImageValidationState = this.getImageValidationState.bind(this);
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
    let user_info = ls.get("profileData");
    if((this.getCommentValidationState() === "success") && (this.getImageValidationState() === null || this.getImageValidationState() === "success")) {
      newComment = {
        user_name: user_info.name,
        user_img: user_info.profile_img_url,
        comment_text: this.state.comment,
        comment_img_url: this.state.image,
        time_stamp: Date.now()
      }

      allComments.unshift(newComment);
      ls.set("allComments", allComments);

      this.props.history.push(PROFILE_ROUTE_PATH);
    }
    event.preventDefault();
  }

  getImageValidationState() {
    if(this.state && this.state.image){
      if(/^https?:\/\/.*\.(?:png|jpg)/i.test(this.state.image)) {
        return "success"
      } else {
        return "error"
      }
    }
    return null;
  }

  getCommentValidationState() {
    if(this.state && this.state.comment){
      if(this.state.comment.length === 0) {
        return "error"
      } else {
        return "success"
      }
    }
    return null;
  }

  render() {
    return(
      <div className="container-fluid container-body">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3 card send-post">
            <form id="my-form" onSubmit={this.handleSubmit}>
              <FormGroup validationState={this.getCommentValidationState()}>
                <ControlLabel>Comment:</ControlLabel>
                <FormControl componentClass="textarea" name="comment" value = {this.state.comment} placeholder="Comment"  onChange={this.handleInputChange} required></FormControl>
                <FormControl.Feedback />
              </FormGroup>
              <FormGroup validationState={this.getImageValidationState()}>
                <ControlLabel>Image URL :</ControlLabel>
                <FormControl componentClass="input" name="image" value = {this.state.image} placeholder="Image url..." onChange={this.handleInputChange}></FormControl>
                <FormControl.Feedback />
              </FormGroup>
              <FormGroup>
                <button className="btn btn-primary">Submit</button>
              </FormGroup>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
