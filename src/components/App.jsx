import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Notification from 'components/Utils/Notification';
import { Container, Wrapper, TitleMain, TitleSecond } from 'components/Utils/UtilsStyled';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, getContacts } from 'redux/contactsSlice';
import { changeFilter, getFilter } from 'redux/filterSlice';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  
  const duplicateContact = (name) => {
    const normalizedName = name.toLowerCase();
    return contacts.find(item => item.name.toLowerCase() === normalizedName);
  }

  const addContacts = ({ name, number }) => {  
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
