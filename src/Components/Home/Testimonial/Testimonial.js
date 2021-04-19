import React, { useState } from "react";
import customer1 from "../../../images/customer1.png";
import customer2 from "../../../images/customer2.png";
import customer3 from "../../../images/customer3.png";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const testimonialData = [
  {
    id: 1,
    description:
      "Took the car in to have a noisy engine checked. They did a thorough check, found nothing untoward and, for good measure, updated all the engine management softwares. End result no cost. Brilliant.",
    pic: customer1,
    name: "JONATHAN AUERBACH",
    position: "STRATEGY OFFICER",
  },
  {
    id: 2,
    description:
      "I’ve been using this garage for a number of years to service both our cars. They are really good, they always have a slot available, work fast and have good prices. Would recommend them without reservations.",
    pic: customer2,
    name: "ALEXANDER BANFIELD",
    position: "GROWTH OFFICER",
  },
  {
    id: 3,
    description:
      "This is the second time I have used Quality Car Service and their service is great. Very polite staff who genuinely seem to care about your experience. Competitive pricing matched with this level of customer service.",
    pic: customer3,
    name: "AARON KACZMER",
    position: "FINANCIAL OFFICER",
  },
];

const Testimonial = () => {
  const [review, setReview] = useState([]);

  // data load to database
  fetch("http://localhost:5000/review")
    .then((response) => response.json())
    .then((review) => {
      
      setReview(review);
    });

  return (
    <section className="testimonials my-5 py-5">
      <div className="container ">
        <div className="ms-4 text-center">
          <h3
            style={{
              color: "#17D2B6",
              textTransform: "uppercase",
              fontWeight: "700",
            }}
          >
            TESTIMONIALS
          </h3>
          <p style={{ fontWeight: "500", color: "#3F475B" }}>
            Our professionals will perform diagnostic tests, fluid flush and
            fills, engine replacement, <br /> oil changes, and total vehicle
            overhauls.
          </p>
        </div>

        <div className="card-deck mt-5">
          <div className="row ">

            {
              testimonialData.map(review=><TestimonialCard review={review}></TestimonialCard>)
            }
            {
                              review.map(review => (
                              <TestimonialCard review={review} key={review.name} >
                              </TestimonialCard>
                          ))}



             

          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
