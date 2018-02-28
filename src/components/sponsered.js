import React from 'react';

import {YELLOW_BUILDING_IMG, AVATAR_FAT, AVATAR_MDO} from '../constants/imageUrls';

export const Sponsered = (
  <div className='container-fluid'>
    <div className="row">
      <div className='col-sm-12 sponsered-card card'>
        <div className='text-left sponsered-card-text'>
          <span>Sponsered</span>
        </div>
        <img src={YELLOW_BUILDING_IMG} alt='yellow building' height='200px' width='100%'/>
        <p><b>It might be time to visit Iceland.</b><br />
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
        </p>
        <button className='btn btn-default'>Buy a ticket </button>
      </div>
    </div>

    <div className="row">
      <div className='col-sm-12 likes-card card'>
        <div className='text-left likes-card-text'>
          <span>Likes. <small><a>View all</a></small></span>
        </div>
        <div className="media">
          <div className="media-left">
            <img src={AVATAR_FAT} className="media-object avatar" />
          </div>
          <div className="media-body">
            <div className="media-heading"> <strong> Left-aligned </strong> <small> <a> @fat </a> </small> </div>
            <button className='btn btn-default'><i className='fa fa-user-plus'></i>Follow </button>
          </div>
        </div>
        <div className="media">
          <div className="media-left">
            <img src={AVATAR_MDO} className="media-object avatar" />
          </div>
          <div className="media-body">
            <div className="media-heading"> Left-aligned <small> <a> @mdo </a> </small> </div>
            <button className='btn btn-default'><i className='fa fa-user-plus'></i>Follow </button>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className='col-sm-12 likes-card-footer'>
        <p>Dave really likes these nerds, no one knows why though.</p>
      </div>
    </div>
  </div>
);
