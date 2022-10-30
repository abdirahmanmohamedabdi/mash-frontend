import React, {useEffect, useState} from 'react'

function Route() {

  const [name, setName] = useState("");
  const [month, setMonth] = useState("");
  const [route, setRoute] = useState([]);

  async function fetchingroutes(){
   await fetch("http://127.0.0.1:3000/route_plans")
    .then((resp) => resp.json())
    .then((route) => setRoute(route));
  }

  useEffect(() => {
    fetchingroutes()
  }, []);


  const handleDelete=(id) => {
    fetch(`http://127.0.0.1:3000/route_plans/${id}`, {
      method: "DELETE",
    })
    }



  function handleSubmit(e) {
      e.preventDefault();

      const Route = {
        name: name,
        month: month
  }


      fetch("http://127.0.0.1:3000/route_plans", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({Route})
      })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
      
      setName("");
      setMonth("");
    }

  let container = route.map((item) => (
    <div className='contains' key = {route.id}>
      <h1 ></h1>
      <h3>{item.name}</h3>
      <h4>{item.month}</h4>
      <button style={styles.button } onClick={handleDelete(route.id)}>remove Route</button>
     
    </div>

))

  return (
    <div style={
      styles.all
    }>
    <div>
    {container}
    </div>
   
    <div style={
      styles.container
    } >

     <form style={styles.form} onSubmit={handleSubmit} >
        <h1>Create Route Plans</h1>
            <label>Name</label>
            <input style={styles.input }
                 type="text" 
                placeholder="Route name" 
                value={name}
                 onChange={(e) => setName(e.target.value)} 

             />

            <label>Month</label>
            <input style={styles.input }
                type="text" 
                placeholder="Month" 
                value={month}
                 onChange={(e) => setMonth(e.target.value)} 

             />


        <button style={styles.button }> Send Route Plan </button>
      </form>

    
    </div>
     
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
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 300px "
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

export default Route
