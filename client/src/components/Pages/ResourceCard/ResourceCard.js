// sets up Resource Cards for Resource Page
import React from "react";
import "./ResourceCard.css"
import { Col, Card } from "react-bootstrap"


const ResourceCard = (props) => {
    return (
        <Col md={4} xs={12} className="my-1">
            <Card style={{ backgroundColor:"grey", opacity: "40%" }}>
                <Card.Img variant="top" src={props.imgUrl}  style={{width:"100%", height:"130px"}}/>
                <Card.Title>{props.title}</Card.Title>
                
                <div className="h1">

                    <ul className="body" style={{ fontSize: "16px" }}>
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