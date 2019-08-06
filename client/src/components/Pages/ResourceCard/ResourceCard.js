// sets up Resource Cards for Resource Page
import React from "react";
import "./ResourceCard.css"
import { Col, Card } from "react-bootstrap"


const ResourceCard = (props) => {
    return (
        <Col md={4}>
            <Card style={{ width: "18em", backgroundColor: "lightgrey", boarder: "", opacity: "50%" }}>
                <Card.Img variant="top" src={props.imgUrl} className="imgUrl" />
                <Card.Title>{props.title}</Card.Title>

                <div className="h1">

                    <ul className="body" style={{ fontSize: "16px", marginTop: "5px" }}>
                        {props.description.map(sentence =>
                            <li key={sentence.description}>
                                <a href={sentence.url} target="_blank" rel="noopener noreferrer"> {sentence.description}</a>
                            </li>
                        )}
                    </ul>

                </div>
            </Card>
        </Col>
    )
}
export default ResourceCard;