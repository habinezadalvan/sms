import React, {useRef, useEffect, useState} from 'react';




export default function FirstTwitterIframe() {

    const [spansNumber, setSpansNumber] = useState(0)
    const ref = useRef();

   

    useEffect(() => {
        ref.current.addEventListener('load', setSpans());
    }, [])

    const setSpans = () => {
        // console.log('ref.current.clientHeight', ref.current.clientHeight);

        const height = ref.current.clientHeight;

        console.log('height ======', height);

        const spans = Math.ceil(height / 10 );

        setSpansNumber(spans);

    }

console.log('spansNumber =====', spansNumber);

    return (
        <div ref={ref} className="tl-moment waypoints-animate moment-embed  tl-moment-offset post-animate iframe1-container" >

            <div className="twitter-tweet twitter-tweet-rendered iframe1"><iframe id="twitter-widget-0" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" className="actualIframe" title="Twitter Tweet" src="https://platform.twitter.com/embed/index.html?creatorScreenName=ObamaFoundation&amp;dnt=false&amp;embedId=twitter-widget-0&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1304440014315696128&amp;lang=en&amp;origin=https%3A%2F%2Fwww.obama.org%2F&amp;siteScreenName=ObamaFoundation&amp;theme=light&amp;widgetsVersion=ed20a2b%3A1601588405575&amp;width=550px" data-tweet-id="1304440014315696128"></iframe></div> <script async="" src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

        </div>
    )
}
