import React from "react";
import {
  FaGithub,
  FaCamera,
  FaCircleNotch,
  FaApple,
  FaFileVideo,
  FaSearchDollar,
} from "react-icons/fa";
const Projects = () => {
  const [header] = React.useState({
    mainHeader: "Projects",
    subHeading: "My Projects",
    text:
      "",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaGithub className="commonIcons" />,
      heading: "PTPG",
      text:
        "A website which enables user to apply Part-Time PG  in OU.Admin can view the applications",
      url:"https://github.com/pavangv28/PTPG"
      },
    {
      id: 2,
      icon: <FaGithub className="commonIcons" />,
      heading: "Infinity",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
        url:"https://github.com/pavangv28/infinity"
    },
    {
      id: 3,
      icon: <FaGithub className="commonIcons" />,
      heading: "Outplacement Heros",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
        url:"https://github.com/pavangv28/OutplacementHeros"
    },
    {
      id: 4,
      icon: <FaGithub className="commonIcons" />,
      heading: "Jaljeevika",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
        url:"https://github.com/pavangv28"
    },
    {
      id: 5,
      icon: <FaGithub className="commonIcons" />,
      heading: "AGV28-Chatapp",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
        url:"https://github.com/pavangv28/AGV28-chatapp"
    },
    {
      id: 6,
      icon: <FaGithub className="commonIcons" />,
      heading: "AlUmni web",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
        url:"https://github.com/pavangv28/AlumniCSE"
    },
  ]);
  return (
    <div className="services" id="Projects">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
                     <div className="commonBorder"></div>
          </div>
          

          <div className="row bgMain">
            {state.map((info) => (
             <div className="col-4 bgMain">
              <a href={info.url} target="_blank"> <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div></a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
