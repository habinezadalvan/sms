import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




export default function SideLink({icon, name}) {
    return (
        <div className="link-div"> 
            <div><FontAwesomeIcon icon={icon} /></div>
    <div className="name">{name}</div>
        </div>
    )
}
