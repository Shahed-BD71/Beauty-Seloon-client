import React from 'react';

const ServiceDetails = ({service}) => {
  return (
    <div className="col-md-3 p-3 m-3 shadow">
      <img className="img-fluid rounded" src={service.img} alt=""></img>
      <h5 className="mt-3 mb-3">{service.name}</h5>
      <p className="text-secondary">{service.description}</p>
      <div className="d-flex justify-content-between">
        <span className="fw-bolder">Price: ${service.price}.00</span>
        <button className="btn btn-brand">Book Now</button>
      </div>
    </div>
  );
};

export default ServiceDetails;