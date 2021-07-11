import React from 'react';

const ServiceDetails = ({service}) => {
  return (
    <div className="col-md-4 p-4">
      <img className="img-fluid rounded" src={service.img} alt=""></img>
      <h5 className="mt-3 mb-3">{service.name}</h5>
      <p className="text-secondary">{service.description}</p>
      <span>Price: ${service.price}.00</span>
    </div>
  );
};

export default ServiceDetails;