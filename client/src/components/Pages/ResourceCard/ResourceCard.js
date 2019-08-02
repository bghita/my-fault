// sets up Resource Cards for Resource Page
import React from "react";


const ResourceCard = (props) => {
    return (
        <div className="col-md-4">
            <div class="card" style={{ width: "18em" }}>
                <img class="card-img-top" src={props.imgUrl} alt="Card cap" />
                <div className="header">
                    <h1 class="card-title">{props.imgUrl}</h1>
                    <p class="card-body">body text</p>
                    <a href="#" class="btn btn-primary"></a>
                </div>
            </div>
        </div>

    )
}
export default ResourceCard;