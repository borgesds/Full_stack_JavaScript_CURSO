import React, { Fragment, useState, useEffect } from "react";
import GrayImg from "../shered/gray-image"
import DescriptionWithLink from "../shered/descriptin_whith_link";
import Form from '../../planet/form';

import { useParams, useNavigate, Redirect } from 'react-router-dom'


async function getPlanet(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`);
    let data = await response.json();
    return data;
}

const Planet = () => {
    const [satellites, setSatellites] = useState([]);
    const [planet, setPlanet] = useState([]);
    const [redirect, setRedirect] = useState(false);

    let { id } = useParams();
    let history = useNavigate();

    useEffect(() => {
        getPlanet(id).then(data => {
            setSatellites(data['satellites']);
            setSatellites(data['data']);
        }, error =>{
            setRedirect(true);
        })
    }, [])

    const goToPlanet = () =>{
        navigate('/')
    }

    const addSatellite = (new_Satellite) => {
        setSatellites([...satellites, new_Satellite])
    }

    let title;
    if(planet.title_with_underline) 
        title = <h4><u>{planet.title}</u></h4>
    else
        title = <h4>{planet.title}</h4>
    
    if(redirect)
        return <Redirect to='/'/>

    return (
        <div>
            {title}
            <DescriptionWithLink description={planet.description} link={planet.link}/>
            <GrayImg img_url={planet.img_url} gray={planet.gray}/>
            <h4>Satélites</h4>
            <hr/>
            <Form addSatellite={addSatellite}/>
            <hr/>
            <ul>
                {satellites.map((satellite, index) => 
                <li key={index}>{satellite.name}</li>
                )}
            </ul>
            <hr/>
            <button type="button" onClick={goToPlanet}>Voltar a listagem!</button>
        </div>
    )
    
}

export default Planet;