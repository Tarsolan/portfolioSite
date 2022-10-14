import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { GoMarkGithub } from "react-icons/go";
import { FiSettings } from "react-icons/fi";
import ThemeToggle from "../UI/ThemeToggle";

const Navigation = ({ username, onToggle }) => {
  return (
    <nav>
      <Navbar bg="custom" expand="lg" variant="portfolio">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Welcome to the portfolio of Alex Ridgeley
            {username === "" ? `!` : `, ${username}!`}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/about">
                All About Me
              </Nav.Link>

              {/* Work Examples */}
              <NavDropdown
                title="Work Examples"
                id="basic-nav-dropdown"
                menuVariant="dark"
              >
                <NavDropdown.Item as={NavLink} to="/examples/game">
                  Card Game - React
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/examples/users">
                  User List - Loading a list of users from an API
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/examples/tracker">
                  Task Tracker
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <ThemeToggle onToggle={onToggle} location="nav" />
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="https://github.com/Tarsolan/portfolio">
                <GoMarkGithub /> GitHub
              </Nav.Link>
              <Nav.Link as={NavLink} to="/settings">
                <FiSettings /> Settings
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default Navigation;
