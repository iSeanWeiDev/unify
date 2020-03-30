import React from 'react';
import {Nav, NavDropdown, Navbar, Image, InputGroup, Container, Form, Button, FormControl} from 'react-bootstrap';
import '../../../styles/components/header.scss';

function NavbarHeader() {
  return (
    <Navbar expand="lg">
      {/* <Navbar.Brand href="/"> */}
      <Container>
        <Navbar.Brand href="#">
          <Image 
            className="logo"
            src="/images/logo.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Form inline>
            <div className="form-inline">
              <div className="searchBar">
                <InputGroup>
                  <InputGroup.Prepend>
                    <Image src="/images/assets/searchIcon.png" />
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="Search e.g. live instagram channel"
                    aria-label="search
                    input:focus {
                      outline: none;
                    }"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </div>
              <div className="notification">
                <Image src="/images/assets/notification.png" />
                <span>12</span>
              </div>
              <div className="avatar">
                <Image src="/images/assets/avatar.png" />
              </div>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarHeader;
