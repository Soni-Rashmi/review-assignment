import React, { Component } from "react";
import { Link } from "react-router-dom";
import ls from "localstorage-ttl";

import { HOME_ROUTE_PATH, PROFILE_ROUTE_PATH, CONTACT_US_ROUTE_PATH } from "../constants/routePath";
import { LOGO_IMG } from "../constants/imageUrls";
import jsonData from "../constants/userData.json";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);

    this.state = {
      name:"",
      isLoggedIn: false,
      profileImageUrl:""
    }
  }

  logout() {
    this.setState({isLoggedIn: false})
    ls.set("profileData", "");
    this.props.history.push(HOME_ROUTE_PATH);
  }

  componentDidMount() {
    if(!this.state.isLoggedIn){
      setUserInfo(this);
    }
  }

  componentWillReceiveProps() {
    if(!this.state.isLoggedIn){
      setUserInfo(this);
    }
  }
  render() {
    let activeLinkName = this.props.history.location.pathname;
    return(
      <nav className="navbar navbar-fixed-top navbar-style">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle btn-collapse" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar bar-icon"></span>
              <span className="icon-bar bar-icon"></span>
              <span className="icon-bar bar-icon"></span>
            </button>
            <Link className="navbar-brand" to={PROFILE_ROUTE_PATH}>
              <img src={LOGO_IMG} alt="logo" className="logo"></img>
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li>
                <Link to={HOME_ROUTE_PATH} className={activeLinkName === HOME_ROUTE_PATH ? "active" : ""}>Home</Link>
              </li>
              <li >
                <Link to={PROFILE_ROUTE_PATH} className={activeLinkName === PROFILE_ROUTE_PATH ? "active" : ""}>Profile</Link>
              </li>
              <li >
                <Link to={CONTACT_US_ROUTE_PATH} className={activeLinkName === CONTACT_US_ROUTE_PATH ? "active" : ""}>Contact us</Link>
              </li>
            </ul>
            <form className="navbar-form navbar-right">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" />
              </div>
              <i className="glyphicon glyphicon-bell bell-icon"></i>
              {this.state && this.state.isLoggedIn ?
                <span>
                  <img className="profile-img" src = { this.state.profileImageUrl } alt="prfile image"/>
                  <i className="fa fa-power-off logout-btn" onClick = { this.logout } > </i>
                </span>
                : ""}
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

function setUserInfo(instance) {
  let profileData = ls.get("profileData");
  if(profileData) {
    instance.setState({
      name: profileData.name,
      profileImageUrl: profileData.profile_img_url,
      isLoggedIn: true
    });
  }
}
