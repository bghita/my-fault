import React from 'react'
import './SignupBox.css'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col, Form, Button } from 'react-bootstrap';


const SignupBox = () => {
    return (
    <div className="SignBox">
        <Container>
            <Row>
                <Col>
                    <Form className="boxit" md={{ span: 4, offset: 8 }}>
                            <Form.Group controlId="formBasicEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="First Name" placeholder="First Name" />
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="Last Name" placeholder="Last Name" />
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="example@gmail.com" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default SignupBox;
