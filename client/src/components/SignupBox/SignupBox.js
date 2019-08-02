import React from 'react'
import './SignupBox.css'
import { Col, Form, Button, Row, Container } from 'react-bootstrap';


const SignupBox = () => {
    return (
    <div>
        <Container>
            <Row className="justify-content-md-center">
                <Col md="8" className="SignBox mt-3">
                    <Form className="m-2" md={{ span: 4, offset: 8 }}>
                        <p className="title2">Sign Up</p>
                            <Form.Group controlId="formBasicEmail">
                            <Form.Label className="font">First Name</Form.Label>
                            <Form.Control type="First Name" placeholder="First Name" />
                            <Form.Label className="font">Last Name</Form.Label>
                            <Form.Control type="Last Name" placeholder="Last Name" />
                            <Form.Label className="font">Email address</Form.Label>
                            <Form.Control type="email" placeholder="example@gmail.com" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className="font">Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button className="signup" variant="primary" type="submit" href="/">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default SignupBox;
