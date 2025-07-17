import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    let isInBook = false;
    persons.forEach((person) => {
      if (person.name.toLowerCase() === newName.toLowerCase()) isInBook = true;
    });
    if (!isInBook) {
      setPersons(
        persons.concat({
          name: newName,
        })
      );
    } else {
      alert(`${newName} is already added to phonebook`)
      isInBook = false
    }
  };

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input type="text" onChange={handlePersonChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </div>
    </div>
  );
};

export default App;
