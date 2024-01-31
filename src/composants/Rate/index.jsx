import './index.scss'
import staractive from '../../assets/visuels/star-active.png'
import starinactive from '../../assets/visuels/star-inactive.png'
import data from '../../assets/datas/datasLogement.json'
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

function Rate() {

    const { id } = useParams();                                   
    const logement = data.find(log => log.id === id);     
    if (!logement) {
        return <Link to="*"></Link>;     
    }

    const rate = logement.rating; 
    const stars = [];
    for (let i = 1; i <= 5; i++) {                                          
        stars.push(i <= rate 
            ? <img className="starActive" src={staractive} alt="Etoile active" />
            : <img className="starInactive"src={starinactive} alt="Etoile inactive" />     
    )};

    return (
        <div className="rateContainer">
            {stars.map((star, id) => (
                <span key={id}>{star}</span>
            ))}
        </div>
    )

}

export default Rate


