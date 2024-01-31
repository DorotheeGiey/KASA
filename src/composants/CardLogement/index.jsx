import './index.scss'
import datasLogement from '../../assets/datas/datasLogement.json'
import { Link } from "react-router-dom"

function CardLogement () {
    return(
            <div className="cardLogement">
                {datasLogement.map(logement => (
                <Link to={`/logement/${logement.id}`} key={logement.id}>
                    <div className="cardLogementContainer" >
                        <img  className="cardLogementContainer__img" src={logement.cover} alt={logement.title} />
                        <div className="cardLogementContainer__gradient">
                            <h2 className="cardLogementContainer__titre">{logement.title}</h2>
                        </div>
                    </div>
                </Link>
                ))
                }
            </div>
    )
}

export default CardLogement 


