import React, { Component } from "react";
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Popover from 'react-bootstrap/lib/Popover';
import { Link } from "react-router-dom";

import { SEND_POST_ROUTE_PATH } from "../constants/routePath";

const popoverHover = (
  <Popover id="popover-trigger-hover">
    <strong>Holy guacamole!</strong> Check this info.
  </Popover>
);

export default class Post extends Component {
  constructor(props) {
    super(props);

    this.renderComments = this.renderComments.bind(this);
  }

  renderComments() {
    let length = this.props.allComments.length - 3 ;
    return (this.props.allComments.map((data, index) => {
      return (
        <div className="row post-comment" key={index}>
          <div className="col-sm-12">
            <div className="media">
              <div className="media-left">
                <OverlayTrigger
                  trigger={["hover"]}
                  placement="bottom"
                  overlay={popoverHover}>
                  <img src={data.user_img} className="media-object avatar" />
                </OverlayTrigger>
              </div>
              <div className="media-body">
                <div className="col-sm-12 clearfix">
                  <div className="media-heading col-sm-8 col-xs-6 text-left">
                    {data.user_name}
                  </div>
                  <div className="media-right col-sm-4 col-xs-6 text-right ">
                    {index < length ? getTimeStamp(data.time_stamp): data.time_stamp}
                  </div>
                </div>
                 <div className="col-sm-12">
                   <p>{data.comment_text}</p>
                   <img src={data.comment_img_url} width="100%" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      )})
    );
  }

  render() {
    let allCommentsData = this.renderComments();
    return(
      <div className="container-fluid card post-container">
        <div className="row post-comment">
          <div className="col-sm-12">
            <Link to={SEND_POST_ROUTE_PATH}>
              <button className="btn">New comment</button>
            </Link>
          </div>
        </div>
        {allCommentsData}
      </div>
    );
  }
}

function getTimeStamp(timeStamp) {
    let newTimeStamp = Number.parseInt(timeStamp);
    let timeInMilliSec = Date.now() - newTimeStamp;
    let seconds = Math.floor(timeInMilliSec / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let hh ="", mm ="", ss="";
    if(hours!= 0) {
        hh = `${hours % 24} hrs `;
    }
    else {
        hh = " ";
    }
    if(minutes != 0) {
        mm = `${minutes % 60} min ` ;
    }
    else {
        if(seconds === 0) {
          ss = "Just now"
        } else if(seconds){
          ss = `${seconds} sec`;
        }
    }
    newTimeStamp = hh + mm +ss ;
    return newTimeStamp;
}
