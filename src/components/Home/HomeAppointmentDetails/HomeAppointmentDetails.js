import React from 'react';
import './HomeAppointmentDetails.css'

const HomeAppointmentDetails = ({appointment}) => {
  return (
     <div class="card-wrapper col-md-2">
      <div class="card">
        <div class="card-img-wrapper">
          <img class="img-fluid" src={appointment.img} alt=""
          />
        </div>
        <div class="card-body">
          <h5 class="card-title">{appointment.name}</h5>
          <div class="card-content">
            <p class="card-text">{appointment.description}</p>
            <a href="#" class="btn btn-brand">Appointment</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAppointmentDetails;