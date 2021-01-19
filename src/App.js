import React from "react";
import './App.css';
import Home from "./components/Banner";
import Nav1 from "./components/Nav1";
//import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills "
function App() {
  return (
    <div >
      <Nav1/>
     <Home/>

<About/>
<Skills/>
<Projects/>
<Contact/>
    </div>
  );
}

export default App;
