import React from 'react';
import {Link} from 'react-router-dom';
import LiComponent from './LiComponent';

export default function ActualSideBar() {
    const links = [
        {
            id: '1',
            title: 'Get Involved',
            sublinks: ['Your Voice', 'Opportunities', 'Support this work']
        },
        {
            id: '2',
            title: 'Our mission',
            sublinks: ['Our story', 'Community Leadership', 'Fellowship', 'Girls Opportunity Alliance', 'Leaders: Africa', 'Leaders: Asia-Pacific 2019', 'Leaders: Europe 2020', `My Brother's Keeper Alliance`, 'Scholars', 'Summit']
        },
        {
            id: '3',
            title: 'Chicago',
            sublinks: ['The Obama Presidential Center', 'Commitments',]
        },
        {
            id: '4',
            title: 'Updates',
            sublinks: ['Archives Fact Sheet', 'Annual Repport 2019', 'Galleries']
        },
    ]

    const displaySideNavLi = () => {
        return links.map(link => {
            return (
                <LiComponent key={link.id} id={link.id} title={link.title} sublinks={link.sublinks}/>
            )
        })
    }
    return (
        <div className="home-side-bar">
        <ul>
            <li className="nav-primary">
            <Link className="nav-primary__home-logo" to="/">
                <div className="nav-primary__logo" >
                    <img src="https://pixy.org/download/1005325/" alt="logo" />
                </div>
                <div className="nav-primary__title" >
                    <h3>OBAMA</h3>
                    <p>FOUNDATION</p>
                </div>
            </Link>
            </li>

           {displaySideNavLi()}

        </ul>
    </div>
    )
}
