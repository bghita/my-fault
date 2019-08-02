import React from 'react';
import "./Carousel.css";
import { Carousel, Row, Col, Container } from 'react-bootstrap';
import Gif1 from "./../Images/gif3.webp";
import Gif2 from "./../Images/gif2.gif";
import Gif3 from "./../Images/gif1.gif";

const Images = () => {
    return (
        <div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="8" className="mt-3">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    height="300px;"
                                    className="d-block w-100 mx-auto"
                                    src={Gif2}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h4>Talk about it</h4>
                                    <p>Don't ignore it, the faults dont wait..</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    height="300px;"
                                    className="d-block w-100 mx-auto"
                                    src={Gif1}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h4>Plan</h4>
                                    <p>Prepare your emergency routes today</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    height="300px;"
                                    className="d-block w-100 mx-auto"
                                    src={Gif3}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Stay Connected</h3>
                                    <p>Make your earthquake kit today and be prepared</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Images;