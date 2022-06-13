import React from "react";
import GrayImg from "../../shered/gray-image"
import DescriptionWithLink from "../../shered/descriptin_whith_link";

const Planet = (props) => {
    let title;
    if(props.title_with_underline) {
        title = <h4><u>{props.title}</u></h4>
    } else {
        title = <h4>{props.title}</h4>
    }

    return (
        <div>
            {title}
            <DescriptionWithLink description={props.description} link={props.link}/>
            <GrayImg img_url={props.img_url} gray={props.gray}/>
            <hr/>
        </div>
    )
}

export default Planet;