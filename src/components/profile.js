import React, { Component } from "react";
import ls from "localstorage-ttl";
import { AVATAR_DHG, AVATAR_FAT, AVATAR_MDO, SUNSET_IMG } from "../constants/imageUrls";
import { Sponsered } from "./sponsered";
import About from "./about";
import Post from "./post";
import PhotosGrid from "./photos";
import { ALL_COMMENTS_DATA } from "../constants/imageUrls";

export default class Profile extends Component {

  render() {
    let allComments= (ls.get("allComments")? ls.get("allComments") : ALL_COMMENTS_DATA);
    return (
      <div className="container-fluid container-body">
        <div className="row">
          <div className="col-sm-3">
            <About />
            <PhotosGrid />
          </div>
          <div className="col-sm-6">
            <Post history={this.props.history} allComments={allComments} />
          </div>
          <div className="col-sm-3">
            {Sponsered}
          </div>
        </div>
      </div>
    );
  }
}
