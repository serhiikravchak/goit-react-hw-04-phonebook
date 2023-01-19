const savedContacts = window.localStorage.getItem('contacts');

export const getContactsFromLocaleStorage = () => {
     if (savedContacts !== null && savedContacts.length > 0) {
    return [...JSON.parse(savedContacts)];
  }
};
