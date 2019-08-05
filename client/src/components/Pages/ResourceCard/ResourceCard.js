// sets up Resource Cards for Resource Page
import React from "react";
import { Card, Container, Col } from "react-bootstrap";

const ResourceCard = (props) => {
    return (
                <Card bg="dark" text="white" style={{ width: '18rem' }}>
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                        <Card.Title>Dark Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                </Card.Text>
                    </Card.Body>
                </Card>
    )
}
                
export default ResourceCard;