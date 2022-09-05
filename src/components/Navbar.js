import React from 'react'
import '../Styles/NavbarStyle.css'
import { useState, useEffect, useRef } from 'react'

const Navbar = () => {

    const navToggle = () => {
        document.body.classList.toggle('nav-open')
    }

    const navLinks = () => {
        document.body.classList.remove('nav-open')
    }

    const [data, setdata] = useState([]);
    const hasFetchedData = useRef(false);

    useEffect(() => {
        async function fetchData() {
        try {
            await fetch(`https://api.countapi.xyz/hit/bikashad.vercel.app/${process.env.REACT_APP_COUNT_API_KEY}`)
            .then((response) => response.json())
            .then((json) => setdata(json));
        } catch (e) {
            console.error('Error fetching api data', e);
        };
        };
        if (hasFetchedData.current === false) {
        fetchData();
        hasFetchedData.current = true;
        } 
    }, []);
    
     
  return (
     <div>
        <header>
            <div id="counter" style={{position:"relative"}}>
                Page Visits:
                 <strong>
                    <span> 
                        {data.value}
                    </span>
                         <i className="fa-solid fa-laptop-code"> </i>
                </strong>
            </div>
            <button onClick = {navToggle} className="nav-toggle" aria-label="toggle navigation">
                <span className="hamburger"></span>
            </button>
            <nav className="nav">
                <ul onClick = {navLinks} className="nav__list">
                    <li  className="nav__item"><a href="#home" className="nav__link">Home</a></li>
                    <li  className="nav__item"><a href="#services" className="nav__link">My Services</a></li>
                    <li  className="nav__item"><a href="#about" className="nav__link">About Me</a></li>
                    <li  className="nav__item"><a href="#work" className="nav__link">My Work</a></li>
                    <li  className="nav__item"><a href="#contact" className="nav__link">Contact Me</a></li>
                </ul>
            </nav>
            </header>
    </div>
  )
}


export default Navbar

