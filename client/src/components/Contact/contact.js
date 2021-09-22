import React from "react";
import Pin from "../../img/pin.png";
import Email from "../../img/email.png";
import LinkedIn from "../../img/linkedin-logo.png";
import './contact.css'

function Contact() {
  return (
    <div className="contact">
      <h1>Contact me!</h1>
      <h4>
        If you want to know more about me, tell me something is wrong with this
        website, give me some feedback about this or you just want to talk, feel
        free to email me or send a DM on LinkedIn!
      </h4>
      <div className="contactDiv">
        <div className="contactInfo tag">
          <img src={Pin} alt="Pin" height="30" width="30" />
          <a href="https://www.google.com/maps/place/Punta+Alta,+Provincia+de+Buenos+Aires/@-38.8720009,-62.1041507,13z/data=!3m1!4b1!4m5!3m4!1s0x95ed77e21dcab24f:0x9c7ed98b83b9334f!8m2!3d-38.8766081!4d-62.0707813" target="_blank">
          <h4>Punta Alta, Buenos Aires, Argentina.</h4>
          </a>
        </div>
        <div className="contactInfo tag">
          <img src={Email} alt="email" height="30" width="30" />
          <a href="mailto:leaa.marrocchi@gmail.com?" target="_blank">
            <h4>leaa.marrocchi@gmail.com</h4>
          </a>
        </div>
        <div className="contactInfo tag">
          <img src={LinkedIn} alt="linkedIn" height="30" width="30" />
          <a href="https://www.linkedin.com/in/leandro-marrocchi-18b0471a0/" target="_blank">
            <h4>Leandro Marrocchi</h4>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
