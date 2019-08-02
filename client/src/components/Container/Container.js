import React from "react";
import "../Container"
const Row = (props) => {
    return(
        <div className="container">
            {props.children}
        </div>
    )
}
export default Row;