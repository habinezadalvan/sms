import React, {useState} from 'react';
import{Link }from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSortDown, faSortUp, fa} from '@fortawesome/free-solid-svg-icons';

export default function LiComponent({id, title, sublinks}) {

    const [showSublinks, SetShowSublinks] = useState(false);

    const displaySubLink = () => {
        return sublinks.map(sublink => <li key={sublink} className="nav-secondary-li"> <Link className="sub-link"><p>{sublink}</p></Link></li>)
    }

    return (
        <li className="nav-primary-lis" id={id}>
        <div className="nav-primary__heading-container">
    <div onMouseOver ={() => console.log('HOVERED MAN======', id)} className="nav-primary__header"> <h2>{title}</h2></div>
            <div  className={`nav-primary__icon ${!showSublinks ? '' : 'rotating'}`} onClick={() => SetShowSublinks(!showSublinks)} >
            {/* <FontAwesomeIcon icon={faSortDown} className="sortDown" /> */}
                {
                    showSublinks ? (<FontAwesomeIcon icon={faSortUp} className="sortUp" />) : (<FontAwesomeIcon icon={faSortDown} className="sortDown" />) 
                }
                
            </div>
        </div>
        <ul className={`nav-secondary-ul ${showSublinks ? 'show' : ''}`} >
            {displaySubLink()}
        </ul>
    </li>
    )
}
