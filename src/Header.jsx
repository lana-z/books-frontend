import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem ><Link to="/" className="nav-link" style={{color: "black"}}>Home</Link></NavItem>
        <NavItem><Link to="/books" className="nav-link"  style={{color: "black"}}>Books</Link></NavItem>
        <NavItem><Link to="/about" className="nav-link" style={{paddingRight: "30px", color: "black"}}>About</Link></NavItem>
      </Navbar>
    )
  }
}

export default Header;
