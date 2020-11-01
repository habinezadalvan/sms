import React, {useState, useref} from 'react';
import {Link} from 'react-router-dom';
import EmptySideBar from '../common/EmptySideBar';
import SideBarComponent from '../common/SideBarComponent';
import images from '../../assets/photos';
import DonateLikeButton from '../common/DonateLikeButton';


export default function Donate() {

    

    const [showSideBar, setShowSideBar] = useState(false);


    return (
        <div className="home-container">
       
           <div onMouseOver={() => setShowSideBar(true)}  style={{backgroundColor: '#000'}} >
               {
                   !showSideBar ? ( <EmptySideBar />) : (<SideBarComponent  />)
               }
           </div>

           <section className="donate-first-section">
               <div className="donate-image-container">
                   <img src={images.donateObama} alt="obama"/>
               </div>
               <div className="donate-first-section-content-container">

                   <div className="content-wrapper">
                        <div className="text">
                            <h1>Empower Leaders and Changemakers</h1>
                        </div>
                        <div className="buttons">
                            <DonateLikeButton classname="donate-purple-btn" >Becoming a Monthly contributor</DonateLikeButton>
                            <DonateLikeButton classname="donate-purple-btn" >Make a one-time contribution</DonateLikeButton>
                        </div>
                   </div>

               </div>
           </section>
           
        </div>
    )
}
