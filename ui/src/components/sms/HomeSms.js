import React, { useState } from 'react'
import SideLink from './Nav/SideLink';
import axios from 'axios';

import { faCalendar,  faCommentAlt, faEnvelope, faUserFriends } from '@fortawesome/free-solid-svg-icons';



export default function HomeSms() {

    const [values, setValues] = useState({to: '', body: '', from: ''})


    const handleSubmit =async (e) => {

        
        e.preventDefault();


        console.log('values.to', values.to)
        console.log('values body', values.body);

       await axios.post('http://localhost:5000/sms', {

            to: values.to,
            from: values.from,
            body: values.body
        })
        .then((res) => {
            console.log(res);
        })
        .catch(err => {
            console.log('err', err.body);
        })
        setValues({to: '', body: '', from:''});
    }

    const handleChange = ({target}) => {
        setValues(prevState => ({...prevState, [target.id]: target.value}))
    }


    return (
        <div className="home">
            <div className="left">
                <ul>
                    <li>
                        <SideLink name='Compose' icon={faEnvelope}/>
                        <SideLink name="Chat" icon={faCommentAlt} />
                        <SideLink name="Contacts" icon={faUserFriends} />
                        <SideLink name="Scheduled" icon={faCalendar} />
                       
                    </li>
                </ul>
            </div>
            <div className="middle">
                <h2 className="grey-text text-darken-3">New Text body</h2>

                <div className="form-div">
                <form onSubmit= {handleSubmit} className="form">
                <div className="input-field">
                    <label htmlFor="to">To</label>
                    <input type="tel" id="to" value={values.to} onChange={handleChange}/>
                </div>

                <div className="input-field">
                    <label htmlFor="from">From</label>
                    <input type="tel" id="from" value={values.from} onChange={handleChange}/>
                </div>
            
    
                <div className="input-field">
                    <label htmlFor="body">Message</label>
                    <textarea className="textarea" id="body" value={values.body} onChange={handleChange}/>
                </div>
                <div className="button-div">
                    <button className=" submit">Send</button>
                </div>
            </form>
                </div>
            </div>
            <div className="right">

            </div>
        </div>
    )
}
