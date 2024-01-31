import { Link } from "react-router-dom"
import logo from '../../assets/visuels/LOGO.svg'
import './index.scss'

function Header(){
    return (
        <>
        <nav className="navbar">
            <img className="navbar__logo" src={logo} alt='logo Kasa' />
            <div>
                <Link className="navbar__link" to="/">Accueil</Link>
                <Link className="navbar__link" to="/About">A propos</Link>
            </div>
        </nav>        
        </>
    )
}

export default Header