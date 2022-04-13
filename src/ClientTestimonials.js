import React from "react";
import "./ClientTestimonials.css";
import emily from "./images/emily.jpg";
import thomas from "./images/thomas.jpg";
import jennie from "./images/jennie.jpg";

function ClientTestimonials() {
  return (
    <section className="client-testimonials">
      <div className="headline">
        Client Testimonials
      </div>
      <div className="client-wrapper">

        <div className="col-emily">
          <img src={emily} alt="Emily R., Sunnyside Client" className="img-client"/>
          <p className="testimonial">
            We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
          </p>
          <div className="client-name">
            Emily R.
          </div>
          <div className="client-title">
            Marketing Director
          </div>
        </div>

        <div className="col-thomas">
          <img src={thomas} alt="Thomas S., Sunnyside Client" className="img-client"/>
          <p className="testimonial">
            Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.
          </p>
          <div className="client-name">
            Thomas S.
          </div>
          <div className="client-title">
            Chief Operating Officer
          </div>
        </div>

        <div className="col-jennie">
          <img src={jennie} alt="Jennie F., Sunnyside Client" className="img-client"/>
          <p className="testimonial">
            Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommend!
          </p>
          <div className="client-name">
            Jennie F.
          </div>
          <div className="client-title">
            Business Owner
          </div>
        </div>

      </div>
    </section>
  );
}

export default ClientTestimonials;