import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import karan from "../images/karan.jpg";
import { Github } from "react-bootstrap-icons";

function About() {
    return (
        <Container
            className="mt-5"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Card
                style={{
                    width: "35rem",
                    display: "flex",
                    flexDirection: "row",
                    overflow: "hidden",
                }}
            >
                <img src={karan} height="400" width="300" alt="" />
                <div>
                    <Card.Body style={{ width: 300 }}>
                        <Card.Title>Notes App</Card.Title>

                        <ul>
                            <li>
                                Project simple web app to manage your tasks.
                            </li>
                            <li>Backend is based on Django and Django Rest,</li>
                            <li>Frontend is based on React and Bootstrap,</li>
                            <li>Database as Sqlite3.</li>
                        </ul>
                        <Button
                            onClick={() => {
                                window.open(
                                    "https://github.com/KaranRohra",
                                    "_blank"
                                );
                            }}
                        >
                            <Github className="mb-1 me-1" />
                            Github
                        </Button>
                    </Card.Body>
                    <footer
                        className="blockquote-footer m-5"
                        style={{ textAlign: "right" }}
                    >
                        By Karan Rohra
                    </footer>
                </div>
            </Card>
        </Container>
    );
}

export default React.memo(About);
