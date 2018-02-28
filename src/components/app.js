import React, { Component } from "react";
import withRouter from "react-router-dom/withRouter";

import {HOME_ROUTE_PATH, PROFILE_ROUTE_PATH, CONTACT_US_ROUTE_PATH, SEND_POST_ROUTE_PATH } from "../constants/routePath";
import Header from "./header";

class App extends Component {
  render() {
    return (
      <div>
        <Header history={this.props.history} />
        {this.props.children}
      </div>
    );
  }
}
export default withRouter(App);
