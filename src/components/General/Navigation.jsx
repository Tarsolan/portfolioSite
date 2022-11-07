import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { GoMarkGithub } from "react-icons/go";
import { FiSettings } from "react-icons/fi";
import { VscListFlat } from "react-icons/vsc";
import { useState } from "react";
import { useEffect } from "react";

const Navigation = ({ username, setShowSidebar }) => {
  const [screenSize, setScreenSize] = useState("large");

  useEffect(() => {
    if (window.innerWidth < 400) setScreenSize("small");
  }, []);

  window.addEventListener("resize", () => {
    if (window.innerWidth < 400) {
      setScreenSize("small");
    } else setScreenSize("large");
  });

  return (
    <nav>
      <Navbar bg="custom" expand="lg" variant="portfolio" collapseOnSelect>
        <Container>
          <Navbar.Brand as={Link} to="/">
            {screenSize === "large" ? (
              <>
                Welcome to the portfolio of Alex Ridgeley
                {username === "" ? `!` : `, ${username}!`}
              </>
            ) : (
              <>Portfolio - Alex Ridgeley</>
            )}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <VscListFlat color="white" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                as={NavLink}
                to="/"
                onClick={() => setShowSidebar(true)}
                eventKey="1"
              >
                All About Me
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                to="/examples"
                onClick={() => setShowSidebar(true)}
                eventKey="2"
              >
                Work Examples
              </Nav.Link>

              <Nav.Link href="https://github.com/Tarsolan/portfolio">
                <GoMarkGithub /> Find me on GitHub
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                to="/settings"
                onClick={() => setShowSidebar(false)}
                eventKey="3"
              >
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
