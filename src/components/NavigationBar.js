import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class NavigationBar extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Sourov Roy</Navbar.Brand>
            <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#resume">Resume</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#science-blog">Science Blog</Nav.Link>
              <Nav.Link href="#humanities-blog">Humanities Blog</Nav.Link>
              <Nav.Link href="#bengali-blog">Bengali Blog</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}


export default NavigationBar