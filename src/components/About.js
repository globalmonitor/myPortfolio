import React from 'react'
import App from '../App';
const About = () => {
    const [state]=React.useState({mainHeading:"About Me"
});
const [info]=React.useState([
    {id:1,title:"Name",text:"G V Pavan Kumar"},
    {id:2,title:"Email",text:"gvpavankumar2000@gmail.com"},
    {id:3,title:"Phone",text:"8639073958"},
    {id:4,title:"LinkedIn",text:"pavangv28"}

]);
    return (
      
       /* <div className="about">
            <div className="container">
            <div className="common">
                <div className="mainheading">
                <h1>{state.mainHeading}</h1>
                </div>
                <div className="commonBorder"></div>
            </div> 
            <div className="row h650 alignCenter">
                <div className="col-6">
                    <div className="aboutcontent">
                        <h1>Hi There,</h1>
                        <p>
                            
                        </p>
                    </div>

                </div>
                <div className="col-6">
                    
                    <div className="aboutdetails">
                    <div className="row">
                        {info.map(info=>(
                            <div className="col-6">
                            <strong>{info.title}</strong>
                            <p>{info.text}</p>
                            </div>
                        ))}
                    </div>
                    </div>
                </div>
            </div> 
            </div>              


            
        </div>*/
        <div className="about" id="About">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{state.mainHeading}</h1>
         
          <div className="commonBorder"></div>
        </div>
        <div className="row  ">
          <div className="col-6">
          <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
              I'm Pavan Kumar, a 4 th year undergraduate 
              student in computer science background from Osmania University.
              <br></br>I have 2 years of experience in web development.
              </div>
              <div className="about__info-p2">
               I live in Hyderabad.Joined Osmania University in 2017.Currently working as an intern in Global Monitor.
              </div>
          </div>
          </div>
          <div className="col-6">
            
              <div className="info__contacts">
                
                  {info.map((info) => (
                    <div className="row">
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                    </div>
                  ))}
                
              </div>
            </div>
          </div>
        </div>
      </div>
  
  

    )
}

export default About
