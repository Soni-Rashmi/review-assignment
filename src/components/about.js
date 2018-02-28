import React, { Component } from "react";

import { ICELAND_IMG, AVATAR_DHG } from "../constants/imageUrls";
import ls from "localstorage-ttl";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      email:"",
      gender:"",
      profileImgUrl:"",
      coverPhotoUrl: ""
    }
  }
  componentDidMount() {
    let profileData = ls.get("profileData");
    this.setState({
      name: profileData.name,
      email: profileData.email,
      gender: profileData.gender,
      profileImgUrl: profileData.profile_img_url,
      coverPhotoUrl: profileData.cover_photo_url
    });
  }

  render() {
    return(
      <div className="text-center profile-card card">
        <img className="cover-img" src= {ICELAND_IMG} alt="Cover image"/>
        <div className="container-fluid">
          <div className="row">
            <img className="profile-img col-sm-4 col-sm-offset-4" src= {this.state.coverPhotoUrl} alt="Profile image"/>
          </div>
          <div className="row">
            <div className="user-name col-xs-12 user-info"> {this.state.name} </div>
          </div>
          <div className="row">
            <div className="col-xs-12 user-info email"> {this.state.email} </div>
          </div>
          <div className="row">
            <div className="col-xs-12 user-info"> {this.state.gender} </div>
          </div>
          <div className="row">
            <div className="col-xs-6 user-info">
              <p>Friends</p><p>12M</p>
            </div>
            <div className="col-xs-6 user-info">
              <p>Enemies</p><p>1M</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
