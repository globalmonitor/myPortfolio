import React from 'react'

const Skills  = () => {
    const [state]=React.useState({mainHeading:"SKills"
});
const [skillList]=React.useState([{id:0,name:"C/C++",level:85},

            {
                id:1,name:"Python",level:80
            },
            {
                id:2,name:"Laravel",level:80
            },
            {
                id:3,name:"Java",level:75
            },
            {
                id:4,name:"JavaScript",level:70
            },
            {
                id:5,name:"HTML/CSS",level:70
            }
])
    return (
        <div className="Skills" id="Skills">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{state.mainHeading}</h1>
         
          <div className="commonBorder"></div>
          </div>
          <div className="row">
          {skillList.map((skill) => (
              <div className='col-4'>
                <div className="skill-progress">
                    <em>{skill.name}</em>
                    <div className="progress-bar">
                        <div className="filler" style={{width:`${skill.level}%`}}>
                        </div>
                    
                </div>
                </div>
                </div>
            ))}

          </div>

        </div>
        </div>
        
    )
}

export default Skills 
