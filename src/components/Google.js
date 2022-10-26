import React, { useState, useEffect } from 'react';
export default function Google() {

    const [signedIn, setSignedIn] = useState(false);
    const submit = (e) =>{
        e.preventDefault();
    }
    return (
        <div className='calenderEvent-wrapper'>
            <div className='header'>
                <hi>Add an event to google Calender</hi>
            </div>
            {!signedIn? <div className='google-login'>
                <p>Login to Google</p>
                <button onClick={()=>getAuthToGoogle()}>Sign In</button>
                </div>:
                }
        </div>
    )
}

