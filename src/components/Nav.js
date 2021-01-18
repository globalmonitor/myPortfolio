import React from 'react'
import { FaAlignJustify } from "react-icons/fa";
import {Link,BrowserRouter as Router,Switch,Route} from "react-router-dom";



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
                    <li><Link to="/">Home</Link></li>
                   <li><Link to="/About">About</Link></li>
                   <li><Link to="/Projects">Projects</Link></li>
                   <li><Link to="/Contact">Contact</Link></li>
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
