import logo from '../../assets/visuels/Logo_kasa_blc.svg'
import './index.scss'

function Footer(){
    return(
        <>
        <div className="footerContainer">
            <img className="footerContainer__logo" src={logo} alt='logo Kasa blanc' />
            <p className="footerContainer__text">© 2020 Kasa. All rights reserved</p>
        </div>
        </>
    )
}

export default Footer