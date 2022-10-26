import React, {useEffect, useState} from 'react'

function Route() {

  const [route, setRoute] = useState([])

  async function fetchingroutes(){
    await fetch("http://127.0.0.1:3000/route_plans")
    .then((resp) => resp.json())
    .then((route) => setRoute(route));
  }

  useEffect(() => {
    fetchingroutes()
   
  }, []);
  console.log(route)

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
    </div>
  )
}

export default Route
