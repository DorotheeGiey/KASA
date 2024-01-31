import './index.scss'
import datasLogement from '../../assets/datas/datasLogement.json'
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";


function Host() {
    const { id } = useParams();                                    // Récupération de l'ID du logement depuis l'URL
    const logement = datasLogement.find(log => log.id === id);     // Trouver les données du logement correspondant
    if (!logement) {
        return <Link to="*"></Link>;      // redirection vers la page 404 au cas où le logement n'est pas trouvé
    }

    const host = logement.host; 
     
    return (
    <div className="hostContainer">
          <p key={id} className="hostContainer_name">{host.name}</p>
          <img src={host.picture} className="hostContainer_picture" alt={host.name}/>
    </div>
    )
}

export default Host 
