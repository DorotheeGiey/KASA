import './index.scss'
import banner2 from '../../assets/visuels/banner_2.png'

function BannerAbout (){
    return (
        <div className="bannerAbout">
            <img className="bannerAbout__img" src={banner2} alt="paysage de montagnes" />
        </div>
    )
}

export default BannerAbout