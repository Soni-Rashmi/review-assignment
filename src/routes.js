import React from "react";
import Route  from "react-router-dom/Route";
import Redirect from "react-router-dom/Redirect";
import withRouter from "react-router-dom/withRouter";
import Switch from "react-router-dom/Switch";
import ls from "localstorage-ttl";

import { HOME_ROUTE_PATH, PROFILE_ROUTE_PATH, CONTACT_US_ROUTE_PATH, SEND_POST_ROUTE_PATH } from "./constants/routePath";
import App from "./components/app";
import Header from "./components/header";
import Home from "./components/home";
import Profile from "./components/profile";
import ContactUs from "./components/contactUs";
import SendPost from "./components/sendPost";

export const routes = (
    <App>
      <Switch>
        <Redirect exact from="/" to={HOME_ROUTE_PATH} />
        <Route exact path={HOME_ROUTE_PATH} render={(props) => (isLoggedIn() ? <Redirect to={PROFILE_ROUTE_PATH} /> : <Home history={props.history}/>) }/>
        <Route exact path={PROFILE_ROUTE_PATH} render={(props) => (!isLoggedIn() ? <Redirect to={HOME_ROUTE_PATH} /> : <Profile history={props.history} />) }/>
        <Route exact path={SEND_POST_ROUTE_PATH} render={(props) => (!isLoggedIn() ? <Redirect to={HOME_ROUTE_PATH} /> : <SendPost history={props.history}/>) }/>
        <Route exact path={CONTACT_US_ROUTE_PATH} component={ContactUs} />
        <Route render={(props) => (isLoggedIn() ? <Redirect to={PROFILE_ROUTE_PATH} /> : <Redirect to={HOME_ROUTE_PATH} />) } />
      </Switch>
    </App>
);

function isLoggedIn() {
  if(ls.get("profileData")){
    return true;
  } else {
    return false;
  }
}
