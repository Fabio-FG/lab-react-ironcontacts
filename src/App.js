import "./App.css";
import contactsData from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));
  const [isShowing, setIsShowing] = useState(true);

  function getRandom() {
    const randomNum = Math.floor(Math.random() * contactsData.length);
    console.log("randomNUm", randomNum);

    const random = contactsData.splice(randomNum, 1);
    console.log("this is random", random);

    const newContacts = [...contacts, random[0]];

    if (random[0].id !== contacts.id) {
      setContacts(newContacts);
    } else {
      return false;
    }
  }

  function sortAlphabetically() {
    const sortedAlphaContacts = contacts.sort((a, b) => (b.name > a.name ? -1 : 1));
    console.log([...sortedAlphaContacts]);
    setContacts([...sortedAlphaContacts])
  }

  function sortPopularity() {
    const sortedContacts = contacts.sort((a, b) => b.popularity - a.popularity);
    console.log(sortedContacts);
    setContacts([...sortedContacts]);
  }


  function deleteContact(contactId) {
    const filteredContacts = contacts.filter((celeb) => {
     
      return celeb.id !== contactId;
    })


    
    console.log("the celeb contacts", filteredContacts)
    setContacts([...filteredContacts])
  }

  return (
    <div className="App">
    <div className="btn-container">

      <button className="top-btn" onClick={getRandom}>Add random</button>
      <button className="top-btn" onClick={sortAlphabetically}>Sort by Name</button>
      <button className="top-btn" onClick={sortPopularity}>Sort by Popularity</button>
    </div>

      <table className="tabela">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            
            <th>
              Won <br /> Oscar</th>
            <th>
              Won <br />Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        {
          contacts.map((contactList) => {
          return (
            <tbody>
              <tr>
                <td>
                  <img
                    src={contactList.pictureUrl}
                    className="picture"
                    alt="celebrity-pic"
                  ></img>
                </td>
                <td>{contactList.name}</td>
                <td>{contactList.popularity.toFixed(2)}</td>
                {/* This statement will show the cup if the wonOscar value is true */}
                <td>{contactList.wonOscar && <span>🏆</span>}</td>
                <td>{contactList.wonEmmy && <span>🏆</span>}</td>
                <td><button 
                className="btn-delete"
                onClick={() =>  deleteContact(contactList.id)}>Delete</button></td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default App;
