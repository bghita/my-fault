import React from "react";
import { Navbar, Button, Nav, Col, Row, Container } from "react-bootstrap";
import './NavBar.css';

const NavBar = (props) => {
    return (
<<<<<<< HEAD
        <Navbar bg="light" variant="light">
            <Navbar.Brand id="Nav">My Fault</Navbar.Brand>
            <Nav className="button">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/">Resources</Nav.Link>
            </Nav>
            <Button variant="outline-primary" href="/login" id="logout">Log Out</Button>
        </Navbar>
=======
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand id="Nav">My Fault</Navbar.Brand>
                <Nav className="button">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/resources">Resources</Nav.Link>
                </Nav>
                <Button className="ml-auto" variant="outline-primary" href="/login">Log Out</Button>
            </Navbar>
        </div>
>>>>>>> 9aa444ec0cfa7b4c8dca0471b5538f5fee32944d
    )
}

export default NavBar;
