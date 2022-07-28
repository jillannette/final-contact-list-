import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./App.css"


export default function AddContactForm({addContact}) {
    const navigate = useNavigate();
    
    const [contact, setContact] = useState ({
        image: '',
        name: '',
        email: '',
        phone: '',
       
    });

    const handleChange = (event) => {
        setContact({...contact, [event.target.name]: event.target.value });
    };
       
    const handleSubmit = (event) => {
            navigate('/contactList')
            event.preventDefault();
            addContact(contact);
            setContact({ image: '', name: '', email: '', phone: '' })
    };
        
    return (
      <>
        <div className="form-container" style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem", display: 'flex', justifyContent: 'center', alignItems: 'center', 
        }}>

            <form onSubmit={handleSubmit}>
               <div>
                 <h3>Add New Contact</h3>
               </div>

               <div>
               <input
                 type="img" width="50" height="10
                 " alt="contact image" 
                 className="form-control"
                 name="image"
                 placeholder="image Url "
                 defaultValue={contact.image}
                 onChange={handleChange} />
               </div> 

               <div>
               <input
                 type="text"
                 className="form-control"
                 name="name"
                 placeholder="name"
                 value={contact.name}
                 onChange={handleChange} />     
                </div>

                <div>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="email"
                  value={contact.email}
                  onChange={handleChange} />
                </div>

                <div>
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  placeholder="phone (111-111-1111)"
                  value={contact.phone}
                  onChange={handleChange} />
                </div>

                <div>
                  <button>Submit Contact</button>
                </div>
              </form>
            </div></>
    );
};