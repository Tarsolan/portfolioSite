import React from "react";
import styles from "./css/Footer.module.css";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { Nav } from "react-bootstrap";
import MailTo from "../UI/MailTo";

const Footer = () => {
  return (
    <footer id={styles.footer}>
      <h4>My Links</h4>
      <div>
        <div>
          <Nav.Link href="https://github.com/Tarsolan/portfolio">
            <div>
              <SiGithub /> - GitHub
            </div>
          </Nav.Link>
        </div>
        <div>
          <Nav.Link href="https://www.linkedin.com/in/alex-ridgeley/">
            <div>
              <SiLinkedin /> - LinkedIn
            </div>
          </Nav.Link>
        </div>
        <div>
          <MailTo email="aridgeley@msn.com" subject="" body="">
            <div>
              <SiGmail /> - Email Me
            </div>
          </MailTo>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
