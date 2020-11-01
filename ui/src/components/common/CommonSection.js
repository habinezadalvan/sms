import React from 'react';
import DonateLikeButton from '../common/DonateLikeButton';


export default function CommonSection({classname, imgphoto, alt, heading, text, btntext}) {
    return (
        <section className={`main-section ${classname}`}>
        <div className="section-bg-img">
            <img src={imgphoto} alt={alt}/>
        </div>
        <div className="section-content-container">
        <div className="section-content">
           <div className="section-content__inside-div">
                <h1 className="heading">{heading}</h1>
                <p>{text}</p>
            <div className="section-btn-container">
                <DonateLikeButton classname="other-btns">{btntext}</DonateLikeButton>
            </div>
           </div>
        </div>
        </div>
    
  </section>
    )
}
