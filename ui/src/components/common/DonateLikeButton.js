import React from 'react';
import {Link} from 'react-router-dom';

export default function DonateLikeButton({classname, children}) {
    return (
        <button type="button" className={`donate-like-btn ${classname}`}>{children}</button>
    )
}
