import React from 'react';
import ReactDOM from 'react-dom';
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";
import Home from "./components/Banner";
import App from './App';

import {Link,BrowserRouter as Router,Switch,Route} from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
   

  </React.StrictMode>,
  
  document.getElementById('root')
);


