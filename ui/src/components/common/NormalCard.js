import React, {useRef, useEffect, useState} from 'react';
import {Link} from "react-router-dom";

export default function NormalCard({date, title, pic, text, link, video, classname}) {

    const [spansNumber, setSpansNumber] = useState(0)
    const ref = useRef();

   

    useEffect(() => {
        ref.current.addEventListener('load', setSpans());
    }, [])

    const setSpans = () => {
        // console.log('ref.current.clientHeight', ref.current.clientHeight);

        const height = ref.current.clientHeight;


        const spans = Math.ceil(height / 10 + 1 );

        setSpansNumber(spans);

    }




    return (
      <div  >
         
            <div ref={ref } className="normalcard-wrapper" >
        <div className="normalcard__img-container">
        {pic || video ? 
        ( <div>
            {
                pic ? (<img src={pic} alt="homecard2"/>) : (
                    <iframe  src={video} frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
                )
            }

        </div>) : (<div></div>)}
        </div>
        <div className={`normalcard__content-container ${classname}`}>
            <p className="date">{date}</p>
            <h3>{title}</h3>
            <p className="paragraph">
            {text}
            <Link to="https://www.obama.org/europe-2020/" target="_blank" rel="noopener" class="in-text-link">{link}</Link>
            </p>
        </div>
    </div>
      </div>
    )
}
