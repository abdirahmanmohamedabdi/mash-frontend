import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Merchants from "./Merchants";

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    { 
        title: "Merchant:Kyle M. Miller RouteA: Kitengela",
        start: getDate("2022-11-2"),
        end: getDate("2022-11-2"),
    },
    { 
        title: "Merchant:Jasmine Hogan RouteD: Jogoo Road",
        start: getDate("2022-11-28"),
        end: getDate("2022-11-28"),
    },
    {
        title: "Merchant:Kyle M. Miller RouteA: Ngara",
        start: getDate("2022-11-5"),
        end: getDate("2022-11-5"),
    },
    {       
        title: "Merchant:Jasmine Hogan RouteD: Thika Road",
        start: getDate("2022-11-23"),
        end: getDate("2022-11-24"),
    },
    { 
        title: "Merchant:Kyle M. Miller RouteA: Kiambu Road",
        start: getDate("2022-11-14"),
        end: getDate("2022-11-14"),
    },
    {
        title: "Mercahant:Kenneth R. Wiley RouteC:CBD",
        start: getDate("2022-11-11"),
        end: getDate("2022-11-11"),
    },
    {
        title: "Merchant:LauraK.Dean RouteB:Tom Mboya Str",
        start: getDate("2022-11-18"),
        end: getDate("2022-11-18"),
    },
  
    {
        title: "Merchant:Kyle M. Miller RouteA: Karen",
        start: getDate("2022-11-10"),
        end: getDate("2022-11-10"),
     },
    {
        title: "Merchant:LauraK.Dean RouteB:Tom Mboya Str",
        start: getDate("2022-11-1"),
        end: getDate("2022-11-1"),
    },
    {
      title: "Merchant:Kyle M. Miller RouteA: Thika Road",
      start: getDate("2022-11-24"),
      end: getDate("2022-11-24"),
    }
  ];

  function getDate(dayString) {
    const today = new Date();
    const year = today.getFullYear().toString();
    let month = (today.getMonth() + 1).toString();
  
    if (month.length === 1) {
      month = "0" + month;
    }
  
    return dayString.replace("YEAR", year).replace("MONTH", month);
  }
  

function Events() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    

    function handleAddEvent() {
        
        for (let i=0; i<allEvents.length; i++){

            const d1 = new Date (allEvents[i].start);
            const d2 = new Date(newEvent.start);
            const d3 = new Date(allEvents[i].end);
            const d4 = new Date(newEvent.end);
   

             if (
              ( (d1  <= d2) && (d2 <= d3) ) || ( (d1  <= d4) &&
                (d4 <= d3) )
              )
            {   
                alert("CLASH"); 
                break;
             }
    
        }
        
        
        setAllEvents([...allEvents, newEvent]);
    }

    return (
        <container>
            <Row className="align-items-center">
        <div className="Appers" >
           
            <h2>Add New Event</h2>
            <div >
                <input type="text" placeholder="Add Event" style={{ width:"30%",marginRight:"10px",margin:"10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <DatePicker placeholderText="Start Date" style={{ marginRight:"10px"}} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <button style = {{width:"150px",borderRadius: 10, margin: "30px 300px"}}  onClick={handleAddEvent}>
                    Add Event
                </button>
            </div>
            <Calendar 
            localizer={localizer} 
            events={allEvents} 
            startAccessor="start" 
            endAccessor="end" 
            style={{ height: 500, margin: "50px" }} />

        </div>
        </Row>
        </container>
    );
}

export default Events;