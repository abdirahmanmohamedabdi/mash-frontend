import { gapi } from "gapi-script";
  // let gapi = window.gapi;
  const API_KEY = 'AIzaSyBA9q_s3VIeC4hMV7FEo8FshHejLNlRsBM'; 
  const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
  const CLIENT_ID = ('1040779831837-bic88l3ijnp45g86lgvih60emsr35n6q.apps.googleusercontent.com');
  const SCOPES = "https://www.googleapis.com/auth/calendar.events";
  const REFRESH_TOKEN = '1//04VjklBh8HlpPCgYIARAAGAQSNwF-L9IrgkySSMfLkwEg686I2ImntV0qabn0eacQAG4sSUxk3SuIods0MzG6ryB7umgRMo-0UxU';

  export function initClient(callback){
    gapi.load('client:auth2',()=>{
      try {
        gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES,
          refreshToken: REFRESH_TOKEN,
          // plugin_name: 'Calender-app'
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

  export const signInToGoogle = async () =>{
    try {
      let googleuser = await gapi.auth2.getAuthInstance().signIn({prompt: 'consent'});
      if (googleuser){
        return true;
      }
    } catch (error) {
      console.log(error)
    }
  };

  export const signOutFromGoogle = () => {
    try {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            auth2.disconnect();
        });
        return true;
    } catch (error) {
        console.log(error)
    }
}

export const getSignedInUserEmail = async () => {
  try {
      let status = await checkSignInStatus();
      if (status){
          var auth2 = gapi.auth2.getAuthInstance();
          var profile = auth2.currentUser.get().getBasicProfile();
          return profile.getEmail()
      } else {
          return null;
      }
  } catch (error) {
      console.log(error)
  }
}

export const publishTheCalenderEvent = (event) => {
  try {
      gapi.client.load('calendar', 'v3', () => {
          var request = gapi.client.calendar.events.insert({
              'calendarId': 'primary',
              'resource': event
          });
      
          request.execute(function(event) {
              console.log('Event created: ' + event.htmlLink);
          });
      })
        
  } catch (error) {
      console.log(error)
  }
}