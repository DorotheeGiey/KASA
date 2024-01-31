import './index.scss'
import favicon from '../../assets/visuels/favicon-32x32.png'
import React, { useState } from 'react';
import data from '../../assets/datas/datasLogement.json'
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";


function Collapse (props){

    
    const [open, setOPen] = useState(false);
    const toggle = () => {
        setOPen(!open);
      };

    const { id } = useParams();

    let logement;
    
      if (props.pageType === "logement") {
        logement = data.find(log => log.id === id);
        if (!logement) {
            return <Link to="*"></Link>;
        }
    }

    return (
        <div>
            <div className={props.pageType === "logement" ? "sectionTitleLogement" : (props.pageType === "about" ? "sectionTitleAbout" : "sectionTitleLogement")}>
                <h2 className="sectionTitle_title">{props.label}</h2>
                <img className={`sectionTitle_arrow ${open ? 'rotated' : ''}`} src={favicon} alt="flèche" onClick={toggle} /> 
            </div>
            {open && 
                <div className={`${props.pageType === "logement" ? "sectionTextLogement" : (props.pageType === "about" ? "sectionTextAbout" : "sectionTextLogement")}`}>
                    {props.text && <p className="sectionText_text">{props.text}</p>}
                    {props.children}
                </div>
            }
        </div>
    );
}

export default Collapse;
