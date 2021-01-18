import React from 'react'
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
  } from "react-icons/fa";
const Banner = () => {
    const [state]= React.useState({title: 'I am G V Pavan Kumar',text:'A Undergraduate student from Osmania University!!'
    });
    return (
        
    <header className="header" id="Banner">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <li>
                    <FaFacebookF className="headerIcon" />
                  </li>
                  <li>
                    <FaTwitter className="headerIcon" />
                  </li>
                  
                  <li>
                    <FaInstagram className="headerIcon" />
                  </li>
                  <li>
                    <FaLinkedin className="headerIcon" />
                  </li>
                </ul>
                <h1>{state.title}</h1>
                <p> {state.text}</p>
                <div className="header__button">
                    <a href="" className="btn btn-outline">My Portfolio
                    </a>
                    
                    
                </div>
               </div>
              </div>
            </div>
            </div>
        </div>
        
    </header>

    )
}
export default Banner