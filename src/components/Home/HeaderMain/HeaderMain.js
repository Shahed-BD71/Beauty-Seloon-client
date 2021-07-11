import React from 'react';
import HeaderImg from '../../../images/image2.jpg'
import './HeaderMain.css'

const HeaderMain = () => {
    return (
      <main
        style={{ height: "600px" }}
        className="row d-flex px-5 align-items-center header-container"
      >
        <div className="col-md-4 offset-md-1">
          <h1 style={{color: "#eb079f"}} className="fw-bolder">
            Your New Look <br />
            Starts Here
          </h1>
          <p className="text-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            pariatur at est vero nihil odio dolorum illum dolor soluta sequi!
          </p>
          <button className="btn btn-brand w-50">Book Now</button>
        </div>
        <div className="col-md-6">
          <img src={HeaderImg} className="img-fluid rounded" alt="" />
        </div>
      </main>
    );
};

export default HeaderMain;