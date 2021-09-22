import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Form,  Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Navigation({ film, setFilm }) {
  return (
    <div>
      <Navbar className="hello" sticky="top" bg="dark" variant="dark">
        <Navbar.Brand className="bar" href="#home">
          {/* <img src={src} alt="image" widht="50" height="50"/> */}
          ArkaMovie
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>

          <Nav.Link>
            <Link to="/MovieApp">Movie</Link>
          </Nav.Link>
      
        </Nav>
        <Form inline="true"></Form>
      </Navbar>
    </div>
  );
}

export default Navigation


