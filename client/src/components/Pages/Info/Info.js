import React from 'react';
import "./info.css";
import { Col, Form, Button, Row, Container, Carousel } from 'react-bootstrap';
import First from "./../../Images/help.gif";
import Second from "./../../Images/stand.gif";
import Third from "./../../Images/city.webp";




const Info = () => {

    const imgStyle = {
        width: '800px',
        height: '350px'
    }

    return (
        <div className="background">
            <Container className="signBox">
                <Row>
                    <Col>
                        <Carousel className="mt-4">
                            <Carousel.Item>
                                <img
                                    style={imgStyle}
                                    className="d-block mx-auto"
                                    src={First}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h4>Where to Start</h4>
                                    <p>Checkout out resources and create your Earthquake kit today!</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    style={imgStyle}
                                    className="d-block mx-auto"
                                    src={Second}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h4>Create a Plan</h4>
                                    <p>Understand the faults you live on and create a emergency route</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    style={imgStyle}
                                    className="d-block mx-auto"
                                    src={Third}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>Stay Connected</h3>
                                    <p>Talk about it, dont wait till it happens.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
                <Row>
                    <Col md= {{ span: 10, offset: 1}} className="mt-3">
                <p className="font">For hundreds of years we've been trying to predict something that mother nature has set to the inevitable. Researchers and data have helped us determine what we can avoid and change to ensure our safety at home, work and travel. One of the world's most famous fault is the San Andreas Fault. The fault is 750 miles long that divides into three segments, each with different characteristics and a different degree of earthquake risk...aka a disaster waiting to happen. This is one of the most dangerous faults in the world and yet majority people choose to procrastinate on the issue. So the question is would you be ready if it happend today? Dont let it be your fault, be aware and stay connected.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Info;
