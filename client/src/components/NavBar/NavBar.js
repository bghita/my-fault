import React from "react";
import { Navbar, Button, Nav, Col, Row, Container } from "react-bootstrap";
import './NavBar.css';

const NavBar = (props) => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand id="Nav">My Fault</Navbar.Brand>
                <Nav className="button">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/resources">Resources</Nav.Link>
                </Nav>
                <Button className="ml-auto" variant="outline-primary" href="/login">Log Out</Button>
            </Navbar>
        </div>
    )
}

export default NavBar;
