import './index.scss'
import BannerHome from '../../composants/BannerHome'
import CardLogement from '../../composants/CardLogement'


function Home () {
    return (
        <div className='homeContainer'>
            <BannerHome />
            <CardLogement/>
        </div>
    )
}

export default Home