// import { useState, useEffect } from "react";
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
// import Filter from 'components/Filter/Filter';
// import Notification from 'components/Utils/Notification';
import { Container, Wrapper, TitleMain, TitleSecond } from 'components/Utils/UtilsStyled';
import { useDispatch } from "react-redux";
import { addContact } from 'store/phonebookSlice';

export default function App() {
  // const [filter, setFilter] = useState('');

  const dispatch = useDispatch();
  

  // const [contacts, setContacts] = useState(
  //   () => {
  //   return JSON.parse(window.localStorage.getItem('contacts')) ?? [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //     ]
  //   });

  // useEffect(() => {
  //     localStorage.setItem('contacts', JSON.stringify(contacts)); 
  // }, [contacts])

  
  // const duplicateContact = (name) => {
  //   const normalizedName = name.toLowerCase();
  //   return contacts.find(item => item.name.toLowerCase() === normalizedName);
  // }
  
  const addContacts = ({ name, number }) => {  
  //   if (duplicateContact(name)) {
  //     return alert(`"${name}" is already in your Phonebook`);
  //   };
    
    dispatch(addContact({ name, number }));
  }
  

  // const deleteContact = (contactId) => {
    // setContacts(contacts => contacts.filter(contact => contact.id !== contactId))
  // }

  // const changeFilter = (e) => {
  //   setFilter(e.currentTarget.value);
  // }
    
  // const getVisibleContacts = () => {
    // const normalizedFilter = filter.toLowerCase();
  
    // return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  // }
  
    return (   
      <Container>

        <Wrapper>
          <TitleMain>Phonebook</TitleMain>
          <ContactForm onSubmit={addContacts} />
        </Wrapper>

        {/* {contacts.length === 0 */}
          {/* ? (<Notification />) */}
        {/* : */}
        {/* ( */}
        <Wrapper>
              <TitleSecond>Contacts</TitleSecond>
              {/* <Filter value={filter} onChange={changeFilter}/> */}
              <ContactList />
        </Wrapper>
        {/* ) */}
        {/* } */}
        
      </Container>
    ); 
  } 
