function Card(props) {
  return (
    <section id="sectionCard">
    <div className="carder">
    <div className="card" >
  
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Name: {props.merchandiser.full_name}</li>
    <li className="list-group-item">Liscence Number: {props.engineer.license_number}</li>
    <li className="list-group-item">Experience: {props.engineer.experience}</li>
    
  </ul>
</div>

</div>
</section>
  );
}

export default Card;