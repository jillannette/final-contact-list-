import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import AddContactForm from './AddContactForm';
import ContactList from './ContactList';
import Home from './Home';
import ViewContact from './ViewContact';

function App() {
  
  const [contacts, updateContacts] = useState([]);

  //create random ID for newly added contact
  const addContact = (contact) => {
    const id = Math.floor(Math.random()*10000)+1;
  
    const newContact = {id, ...contact}

  //creating a new state to include newly added contact 
  updateContacts([...contacts, newContact]);
  
  };
 
  return (
    <BrowserRouter>
       <div className="/App" style={{borderBottom: "solid 1px",
       paddingBottom: "1rem", textAlign: "center"}}>
       <h1>My Contacts</h1>
       <nav style={{
       borderBottom: "solid 1px",
       paddingBottom: "1rem",
       }}

//navigation to other pages 
   >
    <Link to="/">Home</Link> | {" "}
    <Link to="/addContactForm">Add a New Contact</Link> |{" "}
    <Link to="/contactList">Contacts</Link> 
    </nav>
    </div>

  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="addContactForm" element={<AddContactForm addContact={addContact}/>} />
      <Route path="contactList" element={<ContactList contacts={contacts} />} />
      <Route path="viewContact/:id" element={<ViewContact contacts={contacts}/>} />
    </Routes>
  </BrowserRouter>
   
  );
};

export default App;
