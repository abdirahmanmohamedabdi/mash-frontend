import Sidebar from "./Sidebar";
import Table from 'react-bootstrap/Table';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
function StripedRowExample(props) {
  return (
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Email</th>
          <th scope='col'>Status</th>
          <th scope='col'>Position</th>
          <th scope='col'>Contact</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>
            <div className=' align-items-center'>
              
              <div className='ms-3'>
                <p className='fw-bold mb-6'>John Doe</p>
            
              </div>
            </div>
          </td>
          <td>
            <p className='align-items-center fw-normal mb-1'>{props.engineer.email}</p>
          
          </td>
          <td>
            <MDBBadge color='success' pill>
              Active
            </MDBBadge>
          </td>
          <td>Senior</td>
          <td>
            <MDBBtn className color='link' rounded size='sm'>
              Edit
            </MDBBtn>
          </td>
        </tr>
      
        
            
      </MDBTableBody>
    </MDBTable>

//     <div className="container-1">
//     <section id="sectionCard">
//     <div className="carder">
//     <div className="card" >
  
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item">Name: {props.engineer.email}</li>
//     <li class="list-group-item">Phone Number: {props.engineer.phone_number}</li>
//     <li class="list-group-item">ID: {props.engineer.id}</li>
//     <li class="list-group-item">Username: {props.engineer.username}</li>
    
//   </ul>
// </div>

// </div>
// </section>
// </div>
  );
}

export default StripedRowExample;