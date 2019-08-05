// sets up Resource Cards for Resource Page
import React from "react";
import "./ResourceCard.css"

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
                        {props.description.map(sentence => <li key={sentence}>{sentence}</li>)}
                    </ul>

                    {/* new code needs to be in src as a a prop */}
                    {/* <Route path='#' description = {[
                        {description: "CVS", url:"www.cvs.com"}{description: "Kaiser Perm"}
                    ]}
                        {props.description.map((sentence => {description: "Kaiser Permanente", url:"#"}) => <li key={sentence.url}>{sentence.description}</li>)}
             */}


                </div>
            </div>
        </div>

    )
}
export default ResourceCard;