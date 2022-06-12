import React from "react";
import GrayImg from "../../shered/gray-image"

const Planet = (props) => {
    return (
        <div>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <GrayImg img_url={props.img_url}/>
        </div>
    )
}

export default Planet;