import React from "react";

import { Link } from "react-router-dom";

// For Styling
import { Navbar, Nav, Container, Button } from "react-bootstrap";

import { CgProfile } from "react-icons/cg";

import styles from "./Navbar.module.css";

const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container fluid className={styles.component}>
          {/* Brand Name */}
          <Link to="/" className={styles.logo}>
            LOGO
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/* Nav Links */}
              <Link to="/" className={styles.links}>
                Home
              </Link>
              <Link to="/video" className={styles.links}>
                Video
              </Link>
              <Link to="/project" className={styles.links}>
                Promote Project
              </Link>
              <Link to="/whitepaper" className={styles.links}>
                Whitepaper
              </Link>
            </Nav>

            <Nav className={styles.nav}>
              <Button className={styles.btn}>Connect Wallet</Button>
              <CgProfile
                size={40}
                style={{
                  color: "white",
                  marginLeft: "10px",
                  marginRight: "30px",
                }}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
