import React from 'react';
import './FashionGallery.css'

const FashionGallery = ({fashion}) => {
  return (
    <div className="col-md-4">
      <div className="content my-2">
        <div className="content-overlay"></div>
        <img class="content-image" src={fashion.img} alt="" />
        <div class="content-details fadeIn-bottom">
          <h3 class="content-title">View Details</h3>
        </div>
      </div>
    </div>
  );
};

export default FashionGallery;