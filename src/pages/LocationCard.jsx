const MerchandiserCard = ({ latitude, longitude }) => {
    return (
      <div className="card bg-primary mb-5 cardTitle">
        <div className="card-body d-flex">
          <span style={{ fontSize: "3rem", color: "white", marginRight:"30px" }}>
            <FaUserAlt />
          </span>
          <div className="d-flex flex-column">
            <h2 style={{color:"#fff"}}>latitude: {name}</h2>
            <h4>Location: {location}</h4>
          </div>
        </div>
      </div>
    );
  };
  
  export default MerchandiserCard;