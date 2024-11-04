import React, {useState, useEffect} from 'react';
//  import { uuid } from 'uuidv4';
 import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header'
import ContactList from './Components/ContactList'
import AddContact from './Components/AddContact'

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([])

  const addContactHandler = (contact) => {
    console.log(contact)
     setContacts([...contacts, {id: uuidv4(), ...contact}])
  }
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact)=>{
      return contact.id !== id;
    })
    setContacts(newContactList);
  }

  useEffect(()=>{
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
     if (retrieveContacts) setContacts(retrieveContacts)
  }, [])
 
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts]);

    return (
    <div className='ui container'>
      <Router>  
      <Header/>
      <Route path="/add" component={AddContact}/>
       {/* <AddContact addContactHandler={addContactHandler}/>    */}
       {/* <ContactList  contacts={contacts} getContactId ={removeContactHandler}/> */}
       <Route path="/" component={ContactList}/> 
       </Router>
    </div>
  );
}

 export default App;
