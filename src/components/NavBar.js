import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
// import { useDispatch } from "react-redux"
import logo from '../assets/img/fotoLogo.png';
import linkedin from '../assets/img/linkedin-white.png';
import gitHub from '../assets/img/github-white.png';
import calendar from '../assets/img/calendar-white.png';
import { HashLink } from 'react-router-hash-link';
import esFlag from '../assets/img/es.png';
import gbFlag from '../assets/img/gb.png';
// import GetLanguages from '../redux/action.js';
import {
    BrowserRouter as Router
} from "react-router-dom";

import { Banner } from "./Banner";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Footer } from "./Footer";
import { Mailer } from "./Mailer";
import { Newsletter } from "./Newsletter";



export const NavBar = () => {
    // const dispatch = useDispatch();
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [lenguage, setLenguage] = useState(true);

    const handleLenguage = () => {
        setLenguage(!lenguage)
    }

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [lenguage])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Router>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="Logo" style={{ width: 80 }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>{lenguage?'Inicio':'Home'}</Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>{lenguage?'Habilidades':'Skills'}</Nav.Link>
                            <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>{lenguage?'Proyectos':'Proyects'}</Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="https://www.linkedin.com/in/rafaelcarreno/"><img src={linkedin} alt="linkedin" style={{ width: '70%' }} /></a>
                                <a href="https://github.com/rafacarreno"><img src={gitHub} alt="gitHub" style={{ width: '70%' }} /></a>
                                <a href="https://calendly.com/rafacarreno/interviews"><img src={calendar} alt="calendar" style={{ width: '70%' }} /></a>
                            </div>
                            <HashLink to='#connect'>
                                <button className="vvd"><span>{lenguage ? 'Contactar' : "Contact"}</span></button>
                            </HashLink>
                        </span>
                    </Navbar.Collapse>
                    <button
                        style={{ borderColor: 'transparent' }}
                        onClick={handleLenguage}>
                        <img
                            src={lenguage ? esFlag : gbFlag}
                            alt="idioma"
                            style={{ width: 35, height: 35, borderRadius: 100, marginLeft: 15 }} />
                    </button>
                </Container>
            </Navbar>
            <Banner isSpanish = {lenguage} />
            <Skills isSpanish = {lenguage}/>
            <Projects isSpanish = {lenguage}/>
            <Mailer isSpanish = {lenguage}/>
            <Newsletter isSpanish = {lenguage}/>
            <Footer isSpanish = {lenguage}/>
            
   
        </Router>
    )
}
