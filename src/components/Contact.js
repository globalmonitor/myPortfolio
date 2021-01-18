import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaPlay,
} from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact" id="Contact">
      <div className="container">
      <div className="common">
          <h1 className="mainHeader">Contact Me</h1>
         
          <div className="commonBorder"></div>
        </div>
        <div className="contactSection">
          
              
              <p>
                Postal Address: H.no 8-7-98/p1/12, Venkateshwara Colony, Hasthinapuram, Saroor nagar ,Rangareddy
                Telangana-500079
              </p>
              <ul className="contactCircles">
                <li>
                  <FaFacebookF className="contactIcon" />
                </li>
                <li>
                  <FaTwitter className="contactIcon" />
                </li>
                <li>
                  <FaPinterest className="contactIcon" />
                </li>
                <li>
                  <FaInstagram className="contactIcon" />
                </li>
              </ul>
            
        </div>
      </div>
    </div>
  );
};

export default Contact;
