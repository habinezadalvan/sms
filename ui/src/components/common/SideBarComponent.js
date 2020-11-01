import React from 'react';
import {Link} from 'react-router-dom';
import LiComponent from './LiComponent';
import DonateLikeButton from './DonateLikeButton';
import twitter from '../../assets/twitter-brands.svg';
import facebook from '../../assets/facebook-square-brands.svg';
import instagram from '../../assets/instagram-brands.svg';


export default function SideBarComponent() {

    
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
        <div onMouseOut= {() => console.log('MOUSE OUT BRO=====')}>
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
                <div className="home-side-bar__below-links">
                    <DonateLikeButton  classname="donate-dark-btn"> Donate </DonateLikeButton>
                    <form className="form">
                        <h1>Join us</h1>
                        <div className="inputs-container">
                            <input type="email" name="email" placeholder="Email" />
                            <input type="text" name="zipcode" placeholder="Zip Code" />
                        </div>
                           <DonateLikeButton  classname="signup-btn"> Sign up </DonateLikeButton>
                    </form>
                    <div className="sidebar-social-icons-container">
                        <div className="social-icons" >
                            <div className="social-icon">
                                <img src={twitter} alt="twitter"/>
                            </div>
                            <div className="social-icon">
                                <img src={facebook} alt="facebook"/>
                            </div>
                            <div className="social-icon">
                                <img src={instagram} alt="instagram"/>
                            </div>
                        </div>

                    </div>
                    <div className="others">
                        <div className="others__left">
                            <ul>
                                <li>About</li>
                                <li>Opportunities</li>
                                <li>Contact us</li>
                            </ul>
                        </div>
                        <div className="others__right">
                            <ul>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}
