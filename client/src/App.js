import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './components/Home/HomePage';
import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from './components/Navbar/Navbar';
import Form from './components/Form/Form.js';
import Details from './components/Detail/Details';
import About from './About/about';
import Contact from './components/Contact/contact';

function App() {
  return (
    <div className="App">
        <React.Fragment>
        <Switch>
        <Route exact path='/' component={LandingPage} />
        <Navbar />
        </Switch>
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/create' component={Form} />
        <Route exact path='/recipes/:id' component={Details} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        </React.Fragment>
      
    </div>
  );
}

export default App;
