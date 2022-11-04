import React, {useState,useEffect} from 'react'
import Calendar from 'react-calendar'; 
import { FaCalendarAlt } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap"
import "../calender.css"


function Routeplan() {

  const [route_name, setRoute_name] = useState("");
  const [merchandiser, setMerchandiser] = useState("");
  const [outlets, setOutlets] = useState("");
  const [location, setlocation] = useState("");
  const [time, setTime] = useState("");
  const [show, setShow] = useState(false)
  const [routes, setRoutes] = useState([])
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const [dates, setDate] = useState(new Date())


  useEffect(() => {
    fetch("http://localhost:3000/route_plans")
      .then((response) => response.json())
      .then((routes) => setRoutes(routes));
  }, []);

  

  function handleSubmit(e) {
      e.preventDefault();

      const Routeplan = {
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
      
      setRoute_name("");
      setMerchandiser("");
      setOutlets("");
      setlocation("");
      setTime("");
    }

    function handleDelete(id) {
      fetch(`http://127.0.0.1:3000/route_plans/${id}`, {
        method: "DELETE",
      });
    }

    function handleUpdate(id){
      fetch(`http://127.0.0.1:3000/route_plans/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
         route_name: routes.route_name,
          merchandiser: routes.merchandiser,
          outlets: routes.outlets,
          location: routes.location,
          time: routes.time 
        }),
      })
        .then((res) => res.json())
        .then((result) => setRoutes(result))
    }

      
    
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

       

       <div  className="col-8">
            <label for="floatingInput">Route Name</label>
            <input  
                className="form-control" 
                id="floatingInput" 
                type="text" 
                placeholder="Route name" 
                value={route_name}
                onChange={(e) => setRoute_name(e.target.value)} 

             />
        </div>


        <div  className="col-8">
            <label for="floatingInput">Merchandiser</label>
            <input 
              className="form-control" 
                id="floatingInput" 
                 type="text" 
                placeholder="merchandiser" 
                value={merchandiser}
                 onChange={(e) => setMerchandiser(e.target.value)} 

             />

        </div>

        <div className="col-8">

            <label for="floatingInput">Outlets</label>
            <input 
                className="form-control" 
                id="floatingInput" 
                type="text" 
                placeholder="outlets" 
                value={outlets}
                onChange={(e) => setOutlets(e.target.value)} 

             />
       </div>
          <div className="col-8">
            <label for="floatingInput">location</label>
            <input 
               className="form-control" 
                id="floatingInput" 
                type="text" 
                placeholder="location" 
                value={location}
                 onChange={(e) => setlocation(e.target.value)} 

             />
          </div>

          <div className="col-8">

            <label for="floatingInput">Time</label>
            <input 
                className="form-control" 
                id="floatingInput" 
                 type="text" 
                placeholder="time" 
                value={time}
                 onChange={(e) => setTime(e.target.value)} 

             />
          </div>


        <button style={styles.button } class="btn btn-outline-info"> Send Route Plan </button>

      </Form>

      <table
        className="table table-striped border1"
        style={{
          fontSize: "1rem",
          width:"1300px",
          marginLeft: "80px",
          marginTop: "20px",
          backgroundColor: "rgb(247, 236, 222)",
        }}
      >
      
        <thead className="table-dark">
          <tr>
            <th>Id:</th>
            <th>Route Name:</th>
            <th>Merchandiser:</th>
            <th>Outlets:</th>
            <th>Location:</th>
            <th>Time:</th>
          </tr>
        </thead>
        <tbody>
          {routes.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.route_name}</td>
              <td>{item.merchandiser}</td>
              <td>{item.outlets}</td>
              <td>{item.location}</td>
              <td>{item.time}</td>
              <td>
                <Button onClick={() => handleUpdate(item.id)} classN="btn btn-primary">Edit</Button>
              </td>
              <td>
                <Button onClick={() => handleDelete(item.id)} classN="btn btn-danger"> Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
