// sets up Resource Cards for Resource Page
import React from "react";

const ResourceCard = (props) => {
    return (
        <div className="col-md-4">
            <div class="card" style={{ width: "18em" }}>

                <a href={props.href}>
                    <img class="card-img-top" src={props.imgUrl} alt="Card cap" />
                </a>
                
                <div class="title text-center">{props.title}</div>
                <div className="h1">
                    <p class="body" style={{ fontSize: "14px" }}>{props.description}</p>
                   {/* <a href="#" class="btn btn-primary"></a> */}
                </div>
            </div>
        </div>

    )
}
export default ResourceCard;