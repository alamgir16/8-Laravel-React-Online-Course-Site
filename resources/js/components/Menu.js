import React, {Component, Fragment} from "react";
import "../../css/style.css";
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";


class Menu extends Component {
    render() {
        return (
            <Fragment>
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand className="text-dark px-3" href="#home">
                            Alamgir
                        </Navbar.Brand>
                        <Navbar.Toggle
                            aria-controls="basic-navbar-nav"
                            className="text-dark"
                        />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto px-3">
                                <NavLink className="me-3 nav-font" to="/">
                                    Home
                                </NavLink>
                                <NavLink
                                    className="me-3 nav-font"
                                    to="/courseplan"
                                >
                                    Course Plan
                                </NavLink>
                                <NavLink
                                    className="me-3 nav-font"
                                    to="/freeclass"
                                >
                                    Free Class
                                </NavLink>
                                <NavLink
                                    className="me-3 nav-font"
                                    to="/registration"
                                >
                                    Registration
                                </NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        );
    }
}

export default Menu;
