import React, { useState } from 'react';
import data from '../../assets/datas/datasLogement.json'
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import fleche from '../../assets/visuels/Vector.png'

import './index.scss'

function Carroussel(){

    const [currentIndex, setCurrentIndex] = useState(0);

    const { id } = useParams();                              
    const logement = data.find(log => log.id === id);      
    if (!logement) {
        return <Link to="*"></Link>;                       
    }

    const pictures = logement.pictures;

    const goToPrev = () => setCurrentIndex((currentIndex > 0) ? currentIndex - 1 : pictures.length - 1);
    const goToNext = () => setCurrentIndex((currentIndex + 1) % pictures.length);

    const shouldShowNavigation = pictures.length > 1; 


    return (
    <div className="carrousselBloc">
        {shouldShowNavigation && (
            <>
                <img onClick={goToPrev} className="carrousselBloc__boutonPrev" src={fleche} alt="flèche avant" />
                <img onClick={goToNext} className="carrousselBloc__boutonNext" src={fleche} alt="flèche après" />
            </>
        )}
        {pictures.map((src, id) => (
            <img className="carrousselBloc__img" key={id} alt={logement.title} src={src} style={{ display: id === currentIndex ? 'block' : 'none' }} />
        ))}
        {shouldShowNavigation && (
            <div className="carrousselBloc__imageNumber">{currentIndex + 1}/{pictures.length}</div>
        )}
    </div>
);

};

export default Carroussel;