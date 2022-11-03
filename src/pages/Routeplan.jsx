import React, {useState} from 'react'
import Calendar from 'react-calendar'; 
import { FaCalendarAlt } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import "../calender.css"
import Routes from "./Routes"
import CalenderEvent from './CalenderEvent';


function Routeplan() {

  const [route_name, setRoute_name] = useState("");
  const [merchandiser, setMerchandiser] = useState("");
  const [outlets, setOutlets] = useState("");
  const [location, setlocation] = useState("");
  const [time, setTime] = useState("");
  const [show, setShow] = useState(false)
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
    <div  style={styles.all}>

     <Form style={styles.form} onSubmit={handleSubmit} >
    
  
        <div style={styles.h3}> 
        <h2>Create Route</h2> 
        <h3>{dates.toDateString()} <button  style={styles.btn } onClick={() => setShow(!show)}> <FaCalendarAlt /></button></h3>
        
         </div>

        <div>
       {
         show?
         <h5>
         <Calendar onChange={setDate} value={dates}/>
          </h5>
          :null
       } 
       </div>

       

       <div  class="col-8">
            <label for="floatingInput">Route Name</label>
            <input  
                class="form-control" 
                id="floatingInput" 
                type="text" 
                placeholder="Route name" 
                value={route_name}
                onChange={(e) => setRoute_name(e.target.value)} 

             />
        </div>


        <div  class="col-8">
            <label for="floatingInput">Merchandiser</label>
            <input 
              class="form-control" 
                id="floatingInput" 
                 type="text" 
                placeholder="merchandiser" 
                value={merchandiser}
                 onChange={(e) => setMerchandiser(e.target.value)} 

             />

        </div>

        <div class="col-8">

            <label for="floatingInput">Outlets</label>
            <input 
                class="form-control" 
                id="floatingInput" 
                type="text" 
                placeholder="outlets" 
                value={outlets}
                onChange={(e) => setOutlets(e.target.value)} 

             />
       </div>
          <div class="col-8">
            <label for="floatingInput">location</label>
            <input 
               class="form-control" 
                id="floatingInput" 
                type="text" 
                placeholder="location" 
                value={location}
                 onChange={(e) => setlocation(e.target.value)} 

             />
          </div>

          <div class="col-8">

            <label for="floatingInput">Time</label>
            <input 
                class="form-control" 
                id="floatingInput" 
                 type="text" 
                placeholder="time" 
                value={time}
                 onChange={(e) => setTime(e.target.value)} 

             />
          </div>


        <button style={styles.button } class="btn btn-outline-info"> Send Route Plan </button>

      </Form>

      {/* <CalenderEvent /> */}
      {/* <Events /> */}
      {/* <Routes /> */}
    </div>
     
  )
}


const styles = {
  all: {
    height: "100vh"
  },
  h3: {
    padding: "20px", 
    display: "flex",
    flexDirection: "row",
    gap: "500px"
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
    width: 500,
    margin: "30px 0"
  },
  btn: {
   border: "none",
  }
};

export default Routeplan
