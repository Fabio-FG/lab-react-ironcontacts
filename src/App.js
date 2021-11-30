import './App.css';
import contactsData from './contacts.json';
import { useState } from 'react';

function App() {

  const [contacts, setContacts] = useState(contactsData.slice(0,5));


  return (
    <div className="App">
                <table>
                  <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
                  </tr>
                  {contacts.map((contactList) => {
                  return (
                 
                    <tr>
                      <td><img src={contactList.pictureUrl} className="picture" alt="celebrity-pic"></img></td>
                      <td>{contactList.name}</td>
                      <td>{contactList.popularity.toFixed(2)}</td>
                    </tr>
                  
                  
                  )
                  })}
          </table>
    </div>
  );
}

export default App;
