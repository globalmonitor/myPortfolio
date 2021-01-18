import React from 'react'
import { FaAlignJustify } from "react-icons/fa";

const Nav = () => {
    const [state, setState] = React.useState(true);
    return (
        <nav>
            <div className='navbar'> 
             <div className="container">
                 <div className="navbar__container">
                 <ul className="navbar__left">
                     <div className="navbar__left-logo">
                         <img src="/images/logo3.jpg" alt="logo123"/>
                     </div>
                </ul>
                {state ? (
                <ul className="navbar__right">
                    <li><a href="">Home</a></li>
                    
                    <li><a href="">About</a></li>
                    <li><a href="">Skills</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                 ) : (
                    ""
                  )}
                 </div>
                 
             </div>

            </div>
            <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
        </nav>
    )
}

export default Nav
