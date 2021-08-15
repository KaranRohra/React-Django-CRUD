import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function NavBar() {
    const history = useHistory();

    return (
        <div>
            <Navbar bg="primary" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand onClick={() => history.push("/")} style={{ cursor: "pointer" }}>
                        Notes App
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => history.push("/")}>
                                Home
                            </Nav.Link>
                            <Nav.Link onClick={() => history.push("/create")}>
                                Create
                            </Nav.Link>
                            <Nav.Link onClick={() => history.push("/about")}>
                                About
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default React.memo(NavBar);
