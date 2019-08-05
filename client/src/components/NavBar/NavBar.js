import React from "react";
import { Navbar, Button, Nav } from "react-bootstrap";
import './NavBar.css';

const NavBar = (props) => {
    return (
        <div>
        <Navbar bg="light" variant="light">
            <Navbar.Brand id="Nav">My Fault</Navbar.Brand>
            <Nav className="button">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/resources">Resources</Nav.Link>
            </Nav>
                <Button variant="outline-primary" href="/login" id="logout">Log Out</Button>
        </Navbar>
        </div>
    )
}

export default NavBar;
