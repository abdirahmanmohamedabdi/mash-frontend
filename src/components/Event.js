import React from "react";
 
function Event({}) {
  let gapi = window.gapi;
const API_KEY = 'AIzaSyCFf0l69qYJgIQnLm9vIcRTyAYVJKgQjQM'; 
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
const CLIENT_ID = '523785923930-c55h0mgset5dq2c0ie6ljnos6tc55jg6.apps.googleusercontent.com';
const SCOPES = "https://www.googleapis.com/auth/calendar.events";
  return (
    <div class="mt-4 w-1/4 p-1 shadow-xl bg-gradient-to-r from-blue-500 via-navy-500 to-purple-500 rounded-2xl">
      <span class="block bg-white sm:p-2 rounded-xl" href="">
        <div class="sm:pr-8">
          <p class="mt-2 text-sm text-black">{description}</p>
        </div>
      </span>
    </div>
  );
}
 
export default Event;