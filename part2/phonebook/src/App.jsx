import { useState } from "react";

const Filter = ({ handler }) => {
  return (
    <div>
      filter shown with: <input type="text" onChange={handler} />
    </div>
  );
};

const PersonForm = ({ handlePerson, handleNumber, addPerson }) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input type="text" onChange={handlePerson} />
      </div>
      <div>
        number: <input type="tel" onChange={handleNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

const Persons = ({filteredPersons}) => {
  return (
    <div>
      {filteredPersons.map((person) => (
        <div key={person.id}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState(0);
  const [filterPerson, setFilterPerson] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    const nameExists = persons.some(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    if (nameExists) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };
      setPersons(persons.concat(newPerson));
    }
    setNewName("");
    setNewNumber("");
  };

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilter = (event) => {
    setFilterPerson(event.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().startsWith(filterPerson.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter handler={handleFilter} />

      <h2>add a new</h2>

      <PersonForm
        addPerson={addPerson}
        handleNumber={handleNumberChange}
        handlePerson={handlePersonChange}
      />

      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons}/>
    </div>
  );
};

export default App;
