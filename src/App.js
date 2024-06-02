import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBarComponent/NavBar';
import Home from './Components/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills.js';
import Footerr from './Components/Footer/Footerr';
import Projects from './Components/Projects/Projects.js';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
      </Switch>
      <Footerr/>
    </Router>
  );
}

export default App;
