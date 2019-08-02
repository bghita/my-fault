import React from 'react';
import "./Login.css";
import { Col, Form, Button, Row, Container } from 'react-bootstrap';


const Login = () => {
    return (
        <div className="background">
            <Container>
            <Row className="justify-content-md-center">
                <Col md="5" className="SignBox mt-5">
                    <Form className="m-3" md={{ span: 4, offset: 8 }}>
                        <p className="title">Log In</p>
                            <Form.Group controlId="formBasicEmail">
                            <Form.Label className="font">Email address</Form.Label>
                            <Form.Control type="email" placeholder="example@gmail.com" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className="font">Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <a className="dropdown-item" href="/signup">New around here? Sign up</a>
                        <Button className="login" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Login;