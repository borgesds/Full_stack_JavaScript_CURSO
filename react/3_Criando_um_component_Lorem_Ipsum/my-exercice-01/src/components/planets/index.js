import React, { Fragment } from "react";
import Planet from "./planet";


class Planets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: [
                {
                title: "Mercúrio",
                description: "lorem servado diretamente orbitando poior membro conhecido do cinturão de Kuiper,[11] uma  Sol. Originalmente classificado como um",
                img_url: "http://www.ccvalg.pt/astronomia/sistema_solar/mercurio/mercurio_mariner_10.gif",
                link: "https://mundoeducacao.uol.com.br/geografia/mercurio.htm"
                },
                
                {
                title: "Plutão",
                description: "Plutão, formalmente designado 134340 Plutão (símbolos: ⯓ e ♇) é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[11] uma região de corpos além da órbita de Netuno.",
                img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/280px-Pluto_in_True_Color_-_High-Res.jpg"
                }

            ]    
        }
    }

    removeLast = () => {
        let new_planets =[...this.state.planets]
        new_planets.pop()
        this.setState(state => ({
            planets: new_planets
        }))
    }

    duplicateLastPlanet = () => {
        let last_planet = this.state.planets[this.state.planets.length - 1]
        this.setState(state => ({
            planets: [...this.state.planets, last_planet]
        }))
    }

    render() {
        return (
            <Fragment>
                <h3>Planet List</h3>
                <button onClick={this.removeLast}>Remove Last!</button>
                <button onClick={this.duplicateLastPlanet}>Duplicate Last!</button>
                <hr />
                {this.state.planets.map((planet) =>
                    <Planet
                        title={planet.title}
                        description={planet.description}
                        img_url={planet.img_url}
                        link={planet.link}
                    />
                )}
            </Fragment>
        )
    }
}


export default Planets;