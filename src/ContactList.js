import './App.css'
import { useNavigate, Link  } from 'react-router-dom'

export default function ContactList({contacts}) {
  const navigate = useNavigate();
  
  return (
    
    <div className="container" style={{borderBottom: "solid 1px", borderWidth: "1px", 
    paddingBottom: "1rem", textAlign: "center"}}>
    
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Image</th> 
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>

      <tbody>

        {contacts.map(contact => 
        <tr key={contact.id}>
          <td><Link to={`/viewContact/${contact.id}`}><button>View Contact Details</button></Link></td>
          <td><img src={contact.image} className="img"></img></td>
          <td>{contact.name}</td>
          <td>{contact.email}</td>
          <td>{contact.phone}</td>
        </tr>
        

        )}
      </tbody>
    </table>
    </div>
     
    );
}; 