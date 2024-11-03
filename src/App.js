import React, {useState} from 'react';
import './App.css';
import Header from './Components/Header'
import ContactList from './Components/ContactList'
import AddContact from './Components/AddContact'

function App() {
    const [contacts, setContacts] = useState([])
  return (
    <div className='ui container'>

      <Header/>
    <ContactList  contacts ={contacts}/>
    <AddContact/>
    </div>
  );
}

 export default App;
