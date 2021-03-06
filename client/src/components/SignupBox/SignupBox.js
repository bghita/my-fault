import React from 'react'
import './SignupBox.css'
import { Col, Form, Button, Row, Container } from 'react-bootstrap';
import {withRouter} from 'react-router-dom'


class SignupBox extends React.Component {

    userInfo = (e) => {
        e.preventDefault();
        const userInfo = {
            firstName: document.getElementById("formBasicFirst").value,
            lastName: document.getElementById("formBasicLast").value,
            email: document.getElementById("formBasicEmail").value,
            password: document.getElementById("formBasicPassword").value
        }
        this.props.oAuthSignup(userInfo)
        this.props.history.push("/home")
        
    }
    render() {
        return (
            <div>
                <Container className="mb-5">
                    <Row className="justify-content-md-center">
                        <Col md="8" className="SignBox mt-3">
                            <Form onSubmit={this.userInfo} className="m-2" md={{ span: 4, offset: 8 }}>
                                <p className="title2">Sign Up</p>
                                <Form.Group controlId="formBasicFirst">
                                    <Form.Label className="font">First Name</Form.Label>
                                    <Form.Control type="First Name" placeholder="First Name" />
                                </Form.Group>
                                <Form.Group controlId="formBasicLast">
                                    <Form.Label className="font">Last Name</Form.Label>
                                    <Form.Control type="Last Name" placeholder="Last Name" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="example@gmail.com" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label className="font">Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button onSubmit={this.userInfo} className="signup" variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default withRouter(SignupBox) ;