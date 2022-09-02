import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Academia from './components/Academia';
import Contact from './components/Contact';
import Footer from './components/Footer';
import React from 'react'
import Projects from './components/Projects';
import Bitcoin from './components/Bitcoin'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SAC from './components/SAC';
import Ai from './components/Ai';
import IOS from './components/IOS';
import FullStackAndBusinessWebsite from './components/FullStackAndBusinessWebsite';

function App() {
  return (
    <div>
      <Router>
        <Navbar/> 
          <Routes>
            <Route exact path="/" element = {Layout()}></Route>
            <Route path="/card-bitcoin" element = {<Bitcoin/>}></Route> 
            <Route path="/card-apps" element = {<IOS/>}></Route> 
            <Route path="/card-sac" element = {<SAC/>}></Route> 
            <Route path="/card-research" element = {<Ai/>}></Route> 
          </Routes> 
        <Footer/>
      </Router>
    </div>
  );
}

function Layout(){
  return(
    <div>
        <Home/>
        <Services/>
        <About/>
        <FullStackAndBusinessWebsite/>
        <Projects/>
        {/* <Application/> */}
        <Academia/>
        <Contact/>
    </div>
  )
}

export default App;
