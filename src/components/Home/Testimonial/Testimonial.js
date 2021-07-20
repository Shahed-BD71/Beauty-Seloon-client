import React from "react";
import Mitsuha from "../../../images/Mitsuha.jpg";
import Teddy from "../../../images/Teddy.jpg";
import Nessa from "../../../images/Nessa.jpg";
import TestimonialDetails from "../TestimonialDetails/TestimonialDetails";

const testimonialData = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
    name: "Henry Bins",
    from: "California",
    img: Mitsuha,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
    name: "Teddy Clydie",
    from: "New York",
    img: Teddy,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
    name: "Nessa Muntaha",
    from: "Los Angeles",
    img: Nessa,
  },
];

const Testimonial = () => {
  return (
    <section className="testimonials my-5 py-5">
      <div className="container">
        <div className="section-header">
          <h5 style={{ color: "#6ACECE" }}>TESTIMONIAL</h5>
          <h2 style={{ color: "#203047" }}>
            What’s Our Clients<br></br>Says
          </h2>
        </div>
        <div className="card-group mt-5">
          {testimonialData.map((testimonial) => (
            <TestimonialDetails testimonial={testimonial}></TestimonialDetails>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
