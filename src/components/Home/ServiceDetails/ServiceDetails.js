import React from 'react';

const ServiceDetails = ({service}) => {
  return (
    <div className="col-md-3 p-4 m-3 shadow">
      <img className="img-fluid rounded" src={service.img} alt=""></img>
      <h5 className="mt-3 mb-3">{service.name}</h5>
      <p className="text-secondary">{service.description}</p>
      <span className="fw-bolder">Price: ${service.price}.00</span>
    </div>
  );
};

export default ServiceDetails;