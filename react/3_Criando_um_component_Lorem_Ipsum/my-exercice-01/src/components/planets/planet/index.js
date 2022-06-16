import React, { Fragment, useState, useEffect } from "react";
import GrayImg from "../../shered/gray-image"
import DescriptionWithLink from "../../shered/descriptin_whith_link";


async function getSatellite(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`);
    let data = await response.json();
    return data;
}

const Planet = (props) => {
    const [satellites, setSatellites] = useState([]);

    useEffect(() => {
        getSatellite(props.id).then(data => {
            setSatellites(data['satellites'])
        }, [])
    })

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
            <h4>Satélites</h4>
            <ul>
                {satellites.map((satellite, index) => 
                <li key={index}>{satellite.name}</li>
                )}
            </ul>
            <hr/>
        </div>
    )
    
}

export default Planet;