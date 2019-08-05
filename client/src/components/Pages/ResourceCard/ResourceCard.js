// sets up Resource Cards for Resource Page
import React from "react";
import "./ResourceCard.css"
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

const ResourceCard = (props) => {
    return (
        <div className="col-md-4">
            <div class="card" style={{ width: "18em" }}>

                <a href={props.href}>
                    <img className="card-img-top imgUrl" src={props.imgUrl} alt="Card cap" />
                </a>

                <div className="title text-center">{props.title}</div>
                <div className="h1">

                    <ul className="body" style={{ fontSize: "16px", marginTop: "5px" }}>
                        {props.description.map(sentence => 
                        <li key={sentence.description}>
                            <a href={sentence.url} target="_blank"> {sentence.description}</a>
                        </li>
                        )}
                    </ul>       


                </div>
            </div>
        </div>

    )
}
export default ResourceCard;