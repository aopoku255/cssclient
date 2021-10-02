import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaUserCircle, FaYoutube } from "react-icons/fa"
import logo from "../assets/logo.png"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container
} from 'reactstrap';

const MyNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="shadow-sm">
      <Navbar color="light" light expand="md">
        <Container>
        <NavbarBrand href="/">
          <img src={logo} alt="logo" width="75px"/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/news-today">News-Today</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Platforms
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink>
                    <FaFacebookF/>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="https://twitter.com/thecssknust" target="_blank">
                    <FaTwitter/>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink>
                    <FaInstagram/>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink>
                    <FaYoutube/>
                  </NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  subscribe
                </DropdownItem> 
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/announcement">Announcements</NavLink>
            </NavItem>
          </Nav> 
          <Nav navbar>
          <NavLink href="/login">Login</NavLink>
          <span className="border"></span>
          <NavLink href="/signup">Signup<FaUserCircle className="mx-2"/></NavLink>
          </Nav>
        </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavbar;