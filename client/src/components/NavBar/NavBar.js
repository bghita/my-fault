import React from "react";
import {Navbar} from "react-bootstrap"
import './NavBar.css'

const NavBar = (props) => {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand id="Nav" href="#home">
                <img
                    alt=""
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                {'My Fault'}
            </Navbar.Brand>
        </Navbar>
    )
}

export default NavBar;
