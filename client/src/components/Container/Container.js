import React from "react";

const Container = (props) => {
    return (
        <div className="container bg-secondary">
            {props.children}
        </div>
    )
}

export default Container;