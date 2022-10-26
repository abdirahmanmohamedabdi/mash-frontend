import React from "react";
 
  let gapi = window.gapi;
  const API_KEY = 'AIzaSyCFf0l69qYJgIQnLm9vIcRTyAYVJKgQjQM'; 
  const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
  const CLIENT_ID = '523785923930-c55h0mgset5dq2c0ie6ljnos6tc55jg6.apps.googleusercontent.com';
  const SCOPES = "https://www.googleapis.com/auth/calendar.events";

  export function initClient(callback){
    gapi.load('client:auth2',()=>{
      try{
        gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES 
        }).then(function (){
          if (typeof(callback)==='function'){
            callback(true)
          }
        }, function (error){
          console.log(error);
        });
      } catch (error){
        console.log(error);
      }
    });
  };

  export const checkSignInStatus =async () =>{
    try {
      let status = await gapi.auth2.getAuthInstance().isSignedIn.get();
      return status;
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div class="mt-4 w-1/4 p-1 shadow-xl bg-gradient-to-r from-blue-500 via-navy-500 to-purple-500 rounded-2xl">
      <span class="block bg-white sm:p-2 rounded-xl" href="">
        <div class="sm:pr-8">
          <p class="mt-2 text-sm text-black">{description}</p>
        </div>
      </span>
    </div>
  );