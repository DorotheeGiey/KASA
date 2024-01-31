import './index.scss'
import { Link } from "react-router-dom"


function Error() {
    return (
            <div className='errorWrapper'>
                <h1 className='errorWrapper_titre'>404</h1>
                <p className='errorWrapper_text'>Oups! La page que vous demandez n'existe pas.</p>
                <div className='errorWrapper_container'>
                    <Link className='errorWrapper_container--link' to="/">Retourner sur la page d’accueil</Link>
                </div>
            </div>

    )
}

export default Error