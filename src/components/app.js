import React, { Component } from "react";
import withRouter from "react-router-dom/withRouter";

import {HOME_ROUTE_PATH, PROFILE_ROUTE_PATH, CONTACT_US_ROUTE_PATH, SEND_POST_ROUTE_PATH } from "../constants/routePath";
import Header from "./header";
import ls from "localstorage-ttl";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header history={this.props.history} location={this.props.location}/>
        {this.props.children}
      </div>
    );
  }
}
export default withRouter(App);
