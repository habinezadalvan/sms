import React from 'react';
import {Link} from 'react-router-dom';
import LiComponent from './LiComponent';



export default function EmptySideBar() {

    const links = [
        {
            id: '1',
            
        },
        {
            id: '2',
        },
        {
            id: '3',
        },
        {
            id: '4',
        },
    ]

    const displaySideNavLi = () => {
        return links.map(link => {
            return (
                <li key={link.id} className="nav-primary-lis"></li>
            )
        })
    }
    return (
       <div>
            <div className="empty-home-side-bar">
                <ul className="actulal-ul">
                    <li className="logo-li">
                    <Link className="nav-primary__home-logo" to="/">
                        <div className="nav-primary__logo" >
                            <img src="https://pixy.org/download/1005325/" />
                        </div>
                    </Link>
                    </li>

                   {displaySideNavLi()}

                </ul>
            </div>
       </div>
    )
}
