import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Navbars = ({state}) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Kenya Football Management</Navbar.Brand>
         
          <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">{state}</a>
          </Navbar.Text>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navbars