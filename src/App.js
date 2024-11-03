import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Components/Header'
import ContactList from './Components/ContactList'
import AddContact from './Components/AddContact'

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([])
  const addContactHandler = (contact) => {
    setContacts([...contacts, contact])
  }
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts]);
    return (
    <div className='ui container'>
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>   
       <ContactList  contacts ={contacts}/>
    {/* <AddContact/> */}
    </div>
  );
}

 export default App;
