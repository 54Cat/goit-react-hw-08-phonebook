import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Notification from 'components/Utils/Notification';
import { Container, Wrapper, TitleMain, TitleSecond } from 'components/Utils/UtilsStyled';
import { addContact } from "redux/contacts/contactsOperations";
import { getContacts } from 'redux/contacts/contactsSelectors';
import * as contactsOperations from 'redux/contacts/contactsOperations';
import { changeFilter } from 'redux/filter/filterSlice';
import { getFilter } from 'redux/filter/filterSelectors';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(contactsOperations.fetchContact())
  }, [dispatch]);
  
  const duplicateContact = (name) => {
    const normalizedName = name.toLowerCase();
    return contacts.find(item => item.name.toLowerCase() === normalizedName);
  }

  const addContacts = ( name, number) => {
    if (duplicateContact(name)) {
      return alert(`"${name}" is already in your Phonebook`);
    };
    dispatch(addContact({ name, number }));
  }

  const onChangeFilter = (e) => {
    dispatch(changeFilter(e.currentTarget.value));
  }
     
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
  }
  
  return (  
    <Container>
      <Wrapper>
        <TitleMain>Phonebook</TitleMain>
        <ContactForm onSubmit={addContacts} />
      </Wrapper>

      {contacts.length === 0
        ? (<Notification />)
        : (<Wrapper>
            <TitleSecond>Contacts</TitleSecond>
            <Filter onChange={onChangeFilter}/>
            <ContactList contacts={getVisibleContacts()} />
          </Wrapper>)}
    </Container>
  ); 
}
