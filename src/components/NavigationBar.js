import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Home from './Home';
import Resume from './Resume';
import Projects from './Projects';
import Hackathon from './Hackathon';
import Certificates from './Certificates';
import ScienceBlog from './ScienceBlog';
import HumanitiesBlog from './HumanitiesBlog';
import BengaliBlog from './BengaliBlog';
import { NAV } from '../utils/constants';

function NavigationBar() {

  const [isHome, setHome] = useState(false);
  const [isResume, setResume] = useState(false);
  const [isProjects, setProjects] = useState(false);
  const [isCertificates, setCertificates] = useState(false);
  const [isHackathon, setHackathon] = useState(false);
  const [isScienceBlog, setScienceBlog] = useState(false);
  const [isHumanitiesBlog, setHumanitiesBlog] = useState(false);
  const [isBengaliBlog, setBengaliBlog] = useState(false);

  const handleNavClick = (option) => {
    setHome(false);
    setResume(false);
    setProjects(false);
    setCertificates(false);
    setHackathon(false);
    setScienceBlog(false);
    setHumanitiesBlog(false);
    setBengaliBlog(false);

    if (option === NAV.HOME) {
      setHome(true);
    }

    if (option === NAV.RESUME) {
      setResume(true);
    }

    if (option === NAV.PROJECTS) {
      setProjects(true);
    }

    if (option === NAV.CERTIFICATES) {
      setCertificates(true);
    }

    if (option === NAV.HACKATHON) {
      setHackathon(true);
    }

    if (option === NAV.SCIENCE_BLOG) {
      setScienceBlog(true);
    }

    if (option === NAV.HUMANITIES_BLOG) {
      setHumanitiesBlog(true);
    }

    if (option === NAV.BENGALI_BLOG) {
      setBengaliBlog(true);
    }
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Sourov Roy</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home" onClick={() => handleNavClick(NAV.HOME)}>Home</Nav.Link>
            <Nav.Link href="#resume" onClick={() => handleNavClick(NAV.RESUME)}>Resume</Nav.Link>
            <Nav.Link href="#projects" onClick={() => handleNavClick(NAV.PROJECTS)}>Projects</Nav.Link>
            <Nav.Link href="#certificates" onClick={() => handleNavClick(NAV.CERTIFICATES)}>Certificates</Nav.Link>
            <Nav.Link href="#hackathon" onClick={() => handleNavClick(NAV.HACKATHON)}>Hackathon</Nav.Link>
            <Nav.Link href="#science-blog" onClick={() => handleNavClick(NAV.SCIENCE_BLOG)}>Science Blog</Nav.Link>
            <Nav.Link href="#humanities-blog" onClick={() => handleNavClick(NAV.HUMANITIES_BLOG)}>Humanities Blog</Nav.Link>
            <Nav.Link href="#bengali-blog" onClick={() => handleNavClick(NAV.BENGALI_BLOG)}>Bengali Blog</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {isHome && <Home />}
      {isResume && <Resume />}
      {isProjects && <Projects />}
      {isCertificates && <Certificates />}
      {isHackathon && <Hackathon />}
      {isScienceBlog && <ScienceBlog />}
      {isHumanitiesBlog && <HumanitiesBlog />}
      {isBengaliBlog && <BengaliBlog />}
    </>
  );
}

export default NavigationBar;