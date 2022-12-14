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
          <Nav.Link
            href="https://github.com/Tarsolan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <SiGithub /> - <span className={styles.link}>GitHub</span>
            </div>
          </Nav.Link>
        </div>
        <div>
          <Nav.Link
            href="https://www.linkedin.com/in/alex-ridgeley/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <SiLinkedin /> - <span className={styles.link}>LinkedIn</span>
            </div>
          </Nav.Link>
        </div>
        <div>
          <MailTo email="aridgeley@msn.com" subject="" body="">
            <div>
              <SiGmail /> - <span className={styles.link}>Email</span>
            </div>
          </MailTo>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
