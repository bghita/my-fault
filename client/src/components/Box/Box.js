import React from 'react';
import './Box.module.css';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';


const Box = () => {
    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    
                </Col>
            </Row>
        </Container>
    )
}

export default Box;
