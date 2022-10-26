import React, {useEffect, useState} from 'react'

function Route() {

  const [route, setRoute] = useState([])
  const [deleteroute, setDelete] = useState([])
  const [addroute, setAddroute] = useState("")

  async function fetchingroutes(){
    await fetch("http://127.0.0.1:3000/route_plans")
    .then((resp) => resp.json())
    .then((route) => setRoute(route));
  }

  useEffect(() => {
    fetchingroutes()
   
  }, []);
  console.log(route)

  const handleDelete=(id) => {
    fetch(`http://127.0.0.1:3000/route_plans/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deleteroute) => setDelete(deleteroute));
    }


    function handleSubmit(e) {
      e.preventDefault();
      fetch("http://127.0.0.1:3000/route_plans", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({addroute})
      }).then((r) => {
        if (r.ok) {
          r.json().then((addroute) => setAddroute(addroute));
        }
      });
    }

  let container = route.map((item) => (
    <div className='contains'>
      <div className='right'>
      <h3>route name:{item.name}</h3>
      <h4>{item.month}</h4>
      </div>
     <div className='left'>
      <button onClick={handleDelete}>remove Route</button>
     </div>
      
    </div>

))

  return (
    <div>
    {container}
    <div style={
      styles.container
    } >

<form style={
          styles.form
        }
        onSubmit={handleSubmit}>
        <h2>Add Route</h2>
        name:<textarea/>
        <textarea style={
          styles.textarea
        }/>

        month:<textarea/>
        <textarea style={
          styles.textarea
        }/>

        <button style={
          styles.button
        }>
          Send Route Plan
        </button>
      </form>

    
    </div>
     
    </div>
  )
}


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10
  }
};

export default Route
