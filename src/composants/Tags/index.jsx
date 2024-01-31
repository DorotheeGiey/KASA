import './index.scss'
import datasLogement from '../../assets/datas/datasLogement.json'
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";


function Tags () {
    const { id } = useParams();                                    // Récupération de l'ID du logement depuis l'URL
    const logement = datasLogement.find(log => log.id === id);     // Trouver les données du logement correspondant
    if (!logement) {
        return <Link to="*"></Link>;                                 // redirection vers la page 404 au cas où le logement n'est pas trouvé
    }

    const tags = logement.tags; 

    return(
    <div className="tagsContainer">
        {tags.map((tag, id) => (
          <p key={id} className="tagsContainer_element">{tag}</p>
        ))}
    </div>
    )
}

export default Tags 
