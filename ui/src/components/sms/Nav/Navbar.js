import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faSortDown, faUser } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return (
        <div className="nav">
            <div className="logo-div">
                <div className="logo">SMS</div>
            </div>
            <div className="right-content">
                <div className="empty-right"></div>
                <ul className="ul">
                    <li><Link className="link">Balance: $80.00</Link></li>
                    <li><button> <FontAwesomeIcon icon={faCartPlus} /> Buy Credit</button></li>
                    <li>
                        <div className="user">
                            <div><FontAwesomeIcon icon={faUser} /></div>
                            <div>
                            <p style={{color:"white"}}>John Doe</p>
                            </div>
                           <div> <FontAwesomeIcon icon={faSortDown}/></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
