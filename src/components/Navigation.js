import React from "react";
import { Navbar,Container,Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
export const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          
          <ul className="ml-auto navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Code For Interview</Link>
            </li>
            <li className="nav-item">
            <Link to="/add" className="nav-link">Add user</Link>
            </li>
            <li className="nav-item">
            <Link to="/all" className="nav-link">All user</Link>
            </li>
           
           </ul>
         
     
        </Container>
      </Navbar>
    </div>
  );
};
