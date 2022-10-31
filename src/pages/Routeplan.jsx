import React, {useState} from 'react'
import Calendar from 'react-calendar'; 
import { FaCalendarAlt } from "react-icons/fa";
import "../App.css"

function Routeplan() {

  const [route_name, setRoute_name] = useState("");
  const [merchandiser, setMerchandiser] = useState("");
  const [outlets, setOutlets] = useState("");
  const [location, setlocation] = useState("");
  const [time, setTime] = useState("");
  const [show, setShow] = useState(true)
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const [dates, setDate] = useState(new Date())

  // const checkValidInputs = (route_name, merchandiser, outlets, location, time) => {
  //   //ensure no empty values submited to the db
  //   if (route_name !== "" && merchandiser !== "" && outlets !== "" && location !== "" && time !== "") {
  //     console.log("All inputs available");
  //     return true;
  //   }
  // };

  

  function handleSubmit(e) {
      e.preventDefault();

      const Route = {
        route_name: route_name,
        merchandiser: merchandiser,
        outlets: outlets,
        location: location,
        time: time
  }

  // if (checkValidInputs(route_name, merchandiser, outlets, location, time)) {
      fetch("http://127.0.0.1:3000/route_plans", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({Routeplan})
      })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
      
      setRoute_name("");
      setMerchandiser("");
      setOutlets("");
      setlocation("");
      setTime("");
    }
  //   else {
  //     alert('Check form inputs')
  //   }
  // }
    


  return (
    <div style={
      styles.all
    }>

     <form style={styles.form} onSubmit={handleSubmit} >
     <div>
       {
         show?
         <h5>
         <Calendar onChange={setDate} value={dates}/>
          date: {dates.toDateString()}</h5>
          :null
       } 
     </div>
  
        <h2>Create Routes </h2>  {date} <button onClick={() => setShow(!show)}> <FaCalendarAlt /></button>
            <label>Route Name</label>
            <input style={styles.input }
                 type="text" 
                placeholder="Route name" 
                value={route_name}
                 onChange={(e) => setRoute_name(e.target.value)} 

             />

            <label>Merchandiser</label>
            <input style={styles.input }
                 type="text" 
                placeholder="merchandiser" 
                value={merchandiser}
                 onChange={(e) => setMerchandiser(e.target.value)} 

             />

            <label>Outlets</label>
            <input style={styles.input }
                 type="text" 
                placeholder="outlets" 
                value={outlets}
                 onChange={(e) => setOutlets(e.target.value)} 

             />

            <label>location</label>
            <input style={styles.input }
                type="text" 
                placeholder="location" 
                value={location}
                 onChange={(e) => setlocation(e.target.value)} 

             />

            <label>Time</label>
            <input style={styles.input }
                 type="text" 
                placeholder="time" 
                value={time}
                 onChange={(e) => setTime(e.target.value)} 

             />


        <button style={styles.button }> Send Route Plan </button>
      </form>

    
    </div>
     
  )
}


const styles = {
  all: {
    display: "flex",
    flexDirection: "row",
    margin: "100px",
    padding: "50px ",
    justifycontent: "space between",
    color: "black"
  },

  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  input: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "10px 0",
    minHeight: 50,
    width: 500
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10
  }
};

export default Routeplan
