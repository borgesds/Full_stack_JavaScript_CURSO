import React from "react";
import GrayImg from "../../shered/gray-image"
import DescriptionWithLink from "../../shered/descriptin_whith_link";

async function getSatellite(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`);
    let data = await response.json();
    return data;
}

class Planet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            satellites: []
        }
    }

    componentDidMount() {
        getSatellite(this.props.id).then(data => {
            this.setState(state => ({
                satellites: data['satellites']
            }))
        })
    }

    render() {

        let title;
        if(this.props.title_with_underline) {
            title = <h4><u>{this.props.title}</u></h4>
        } else {
            title = <h4>{this.props.title}</h4>
        }

        return (
            <div>
                {title}
                <DescriptionWithLink description={this.props.description} link={this.props.link}/>
                <GrayImg img_url={this.props.img_url} gray={this.props.gray}/>
                <h4>Satélites</h4>
                <ul>
                    {this.state.satellites.map((satellite, index) => 
                    <li key={index}>{satellite.name}</li>
                    )}
                </ul>
                <hr/>
            </div>
        )
    }
}

export default Planet;