import React from 'react';
import './App.css';
import Header from './Components/Header'
import ContactList from './Components/ContactList'
import AddContact from './Components/AddContact'

function App() {
  return (
    <div>
      <Header/>
    <ContactList/>
    <AddContact/>
    </div>
  );
}

 export default App;
