import React from 'react';
import { useParams } from 'react-router-dom';
// import { Link } from "react-router-dom";
import data from '../../assets/datas/datasLogement.json';

import './index.scss'
import Carroussel from '../../composants/Carroussel'
import Tags from '../../composants/Tags'
import Host from '../../composants/Host'
import Rate from '../../composants/Rate'
import Collapse from '../../composants/Collapse'
import Error from '../../composants/Error'

function Logement() {

    const { id } = useParams();                                 
    const logement = data.find(log => log.id === id); 
    
if (logement) {
        const equipments = logement.equipments;

    return (   
        <div className="logementContainer">
            <Carroussel/>
            <div className="descriptifContainer">
                <div className="descriptifContainer_titrelocation"> 
                    <h1 className="logementTitre">{logement.title}</h1>
                    <p className="logementLocalisation">{logement.location}</p>
                    <Tags tags={logement.tags}/>
                </div>
                <div className="descriptifContainer_hostrate">
                    <Host/>
                    <Rate/>
                </div>
            </div>
             <div className="descriptifContainer_descripEquip">
                    <Collapse pageType="logement" label="Description" text={`${logement.description}`}/>
                    <Collapse pageType="logement" label="Équipements">
                        <ul className="listEquipments">
                            {equipments.map((equipment, id) => (
                             <li className="equipments" key={id}>{equipment}</li>
                            ))}
                         </ul>
                    </Collapse>

            </div>
        </div>

    
    );
}

else {
    return(
    <Error/>
    )
    }

}


export default Logement;


