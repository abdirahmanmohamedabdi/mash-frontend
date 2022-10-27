import React, { useState, useEffect } from 'react';
import { signInToGoogle, initClient,getSignedInUserEmail, signOutFromGoogle , publishTheCalenderEvent } from './Event';
export default function Google() {

    const [signedIn, setSignedIn] = useState(false);
    const [googleAuthedEmail,setgoogleAuthedEmail] = useState(null);
    const [description,setDescription] =useState('');
    const [startTime,setStartTime] = useState('');
    const [endTime,setEndTime] = useState('');
    // const submit = (e) =>{
    //     e.preventDefault();
    // }

    useEffect(()=>{
        initClient((success)=>{
            if (success){
                getGoogleAuthorizedEmail();
            }
        });
    },[]);

    const getGoogleAuthorizedEmail =async ()=>{
        let email = await getSignedInUserEmail();
        if (email){
            setSignedIn(true)
            setgoogleAuthedEmail(email)
        }
    };
    const getAuthToGoogle =async ()=>{
        let successfull =await signInToGoogle();
        if (successfull){
            getGoogleAuthorizedEmail();
        }
      };
    const _signOutFromGoogle = () => {
        let status = signOutFromGoogle();
        if (status){
            setSignedIn(false);
            setgoogleAuthedEmail(null);
        }
    };
    const submit = (e) =>{
        e.preventDefault();
        var event = {
            description,
            'start': {
                'dateTime':(startTime),
                'timeZone': 'Africa/Kenya'
              },
              'end': {
                'dateTime':(endTime),
                'timeZone': 'Africa/Kenya'
              },
        }
        publishTheCalenderEvent(event);
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
                <div className='body'>
                    <div className='signout'>
                        <p>Email: {googleAuthedEmail}</p>
                        <button onClick={()=>_signOutFromGoogle()}>Sign Out</button>
                    </div>
                    <form>
                        <div className='eventItem'>
                            <label>Description</label>
                            <input placeholder = 'Description...' value={description} onChange={e=>setDescription(e.target.value)}></input>
                        </div>
                        <div className='eventItem'>
                            <label>Start Time</label>
                            <input type="datetime-local" value={startTime} onChange={e=>setStartTime(e.target.value)}></input>
                        </div>
                        <div className='eventItem'>
                            <label>End Time</label>
                            <input type="datetime-local" value={endTime} onChange={e=>setEndTime(e.target.value)}></input>
                        </div>
                        <button type='submit' onClick={(e)=>submit(e)}>Submit</button>
                    </form>
                </div>}
        </div>
    )
}

