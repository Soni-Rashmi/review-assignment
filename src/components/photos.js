import React, { Component } from "react";
import { Modal } from "react-bootstrap";

import { photo_gallery } from "../constants/imageUrls";

export default class PhotosGrid extends Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.renderPhotoGrid = this.renderPhotoGrid.bind(this);

    this.state = {
      show: false,
      imgUrl: ""
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow(e) {
    this.setState({ show: true, imgUrl: e.target.src });
  }
  renderPhotoGrid () {
    return (photo_gallery.map((data, index) => {
      return (
        <div className="row" key={index}>
          <div className="col-sm-6 image-left">
            <img src={data.left} onClick={this.handleShow} className="grid-img"></img>
          </div>
          <div className="col-sm-6 image-right">
            <img src={data.right} onClick={this.handleShow} className="grid-img"></img>
          </div>
        </div>
      )
    })
  );
  }

  render() {
    let grid = this.renderPhotoGrid() ;
    return(
      <div className="container-fluid text-center photos-container card">
        <p>Pictures. <a>Edit</a></p>
        {grid}

        <Modal container={this} show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Photos</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.state.imgUrl} className="zoom-image"/>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-default" onClick={this.handleClose}>Close</button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
