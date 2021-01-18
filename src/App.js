import React from "react";
import './App.css';
import Home from "./components/Banner";
import Nav from "./components/Nav";
//import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import {Link,BrowserRouter as Router,Switch,Route} from "react-router-dom";
function App() {
  return (
    <div >
      <Nav/>
     <Switch>

<Route exact path to="/" component={Home}/>
<Route  path to="/About" component={About}/>


<Route  path to="/Projects" component={Projects}/>
<Route  path to="/Contact" component={Contact}/>

</Switch>
    </div>
  );
}

export default App;
