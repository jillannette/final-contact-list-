import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function ViewContact({contacts}) {
  const navigate = useNavigate();
  const {id} = useParams();
  const test = Number(id);

  const contact = contacts.find((value) => value.id === test)
    return (
      <div style={{textAlign: 'center'}}>
        <h2>Contact Details</h2>
        <p><img src={contact.image} className="img"></img></p>
        <p>{contact.name}</p>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
        <button onClick={() => navigate(-1)}>Back to Contacts</button>
      </div>
        
    );
};





