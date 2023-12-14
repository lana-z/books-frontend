import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return (
      <Navbar className="nav" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand style={{fontSize: "13px"}}>*The Book Nook was built by <a href="https://www.codefellows.org/">Code Fellows</a> students.</Navbar.Brand>
      </Navbar>
    )
  }
}

export default Footer;


