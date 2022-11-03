import Sidebar from "./Sidebar";

function Card(props) {
  return (
    <div className="container-1">
    <section id="sectionCard">
    <div className="carder">
    <div className="card" >
  
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Name: {props.engineer.email}</li>
    <li class="list-group-item">Phone Number: {props.engineer.phone_number}</li>
    <li class="list-group-item">ID: {props.engineer.id}</li>
    <li class="list-group-item">Username: {props.engineer.username}</li>
    
  </ul>
</div>

</div>
</section>
</div>
  );
}

export default Card;