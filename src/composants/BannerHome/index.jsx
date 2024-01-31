import './index.scss'
import banner1 from '../../assets/visuels/banner_1.png'

function BannerHome(){
    return (
        <>
        <div className="bannerHome" >
                <img className="bannerHome__img" src={banner1} alt='paysage de falaise' />
                <div className="bannerHome__gradient"></div>
                 <p className="bannerHome__text">Chez vous, <br className="bannerHome__text--br"/> partout et ailleurs</p>
        </div>
        </>
    )
}

export default BannerHome 