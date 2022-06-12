import React, { Fragment } from "react";
import Planet from "./planet";

const Planets = () => {
    return (
        <Fragment>
            <h3>Planet List</h3>
            <hr/>
            <Planet title="Mercúrio" 
                        description="Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas. O periélio da órbita de Mercúrio apresenta uma precessão de 5 600 segundos de arco por século" 
                        img_url="http://www.ccvalg.pt/astronomia/sistema_solar/mercurio/mercurio_mariner_10.gif"
                        
            />

            <Planet title="Plutão" 
                        description="Plutão, formalmente designado 134340 Plutão (símbolos: ⯓ e ♇) é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[11] uma região de corpos além da órbita de Netuno." 
                        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/280px-Pluto_in_True_Color_-_High-Res.jpg"
            />
        </Fragment>
    )
}

export default Planets;