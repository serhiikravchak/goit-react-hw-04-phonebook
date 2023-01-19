import React from 'react';
import { nanoid } from 'nanoid';
import { Phonebook } from './Phonebook/Phonebook';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { Box } from './App.styled';
import { useState,useEffect } from 'react';
import { getContactsFromLocaleStorage } from './utils/getContactsFromLocaleStorage';
import { defaultContacts } from './utils/defaultContacts';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => getContactsFromLocaleStorage() ?? defaultContacts
  );

  const [filter, setFilter] = useState('') 

useEffect(
  () => window.localStorage.setItem('contacts', JSON.stringify(contacts)),
  [contacts]
);

const handlePhonebook = data => {
  const newContact = { id: nanoid(), ...data };

  contacts.find(
    contact => contact.name.toLowerCase() === data.name.toLowerCase()
  )
    ? alert(`${data.name} is already in contacts.`)
    : setContacts(prevState => [newContact, ...prevState]);
};

const handleDelete = id => {
  setFilter(prevState => prevState.filter(contact => contact.id !== id));
};

const onFilter = evt => {
  setFilter(evt.target.value);
};


const handleFilter = () => {
  const normalizedFilter = filter.toLowerCase();
  
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

return (
  <Box>
    <h1>Phonebook</h1>
    <Phonebook onSubmit={handlePhonebook} />

    <h2>Contacts</h2>
    <Filter value={filter} onChange={onFilter} />
    <Contacts contactList={handleFilter()} onDelete={handleDelete} />
  </Box>
);


}


  


