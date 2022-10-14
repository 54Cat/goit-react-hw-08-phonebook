import { useState, useEffect } from "react";
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Notification from 'components/Utils/Notification';
import { Container, Wrapper, TitleMain, TitleSecond } from 'components/Utils/UtilsStyled';
import { nanoid } from "nanoid";

export default function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(
    () => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    });

  useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts)); 
  }, [contacts])

  const duplicateContact = (name) => {
    const normalizedName = name.toLowerCase();
    return contacts.find(item => item.name.toLowerCase() === normalizedName);
  }
  
  const addContact = ({ name, number }) => {  
    const contact = {
      id: nanoid(4),
      name: name,
      number: number
    }
    
    if (duplicateContact(name)) {
      return alert(`"${name}" is already in your Phonebook`);
    };
    
    setContacts(contacts => [...contacts, contact]);
    }

  const deleteContact = (contactId) => {
    setContacts(contacts => contacts.filter(contact => contact.id !== contactId))
  }

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  }
    
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
  
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }
  
    return (   
      <Container>

        <Wrapper>
          <TitleMain>Phonebook</TitleMain>
          <ContactForm onSubmit={addContact} />
        </Wrapper>

        {contacts.length === 0
          ? (<Notification />)
          : (<Wrapper>
              <TitleSecond>Contacts</TitleSecond>
              <Filter value={filter} onChange={changeFilter}/>
              <ContactList contacts={getVisibleContacts()} onDeleteContact={deleteContact} />
            </Wrapper>)
        }
        
      </Container>
    ); 
  } 




// export default class App extends React.Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   duplicateContact = (name) => {
//     const { contacts } = this.state;
//     const normalizedName = name.toLowerCase();

//     return contacts.find(item => item.name.toLowerCase() === normalizedName);
//   }
  
//   addContact = ({ name, number }) => {  
//     const contact = {
//       id: nanoid(4),
//       name: name,
//       number: number
//     }
    
//     if (this.duplicateContact(name)) {
//       return alert(`"${name}" is already in your Phonebook`);
//     };

//     this.setState(({contacts}) => ({
//       contacts: [...contacts, contact]
//     }));  
//   }

//   deleteContact = (contactId) => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId)
//     }))
//   }

//   changeFilter = (e) => {
//     this.setState({ filter: e.currentTarget.value });
//   }
    
//   getVisibleContacts = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();
  
//     return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
//   }
  
//   render() {
//     const { contacts, filter } = this.state;
//     const addContact = this.addContact; 
//     const deleteContact = this.deleteContact;
//     const changeFilter = this.changeFilter;  
//     const visibleContacts = this.getVisibleContacts();

//     return (   
//       <Container>

//         <Wrapper>
//           <TitleMain>Phonebook</TitleMain>
//           <ContactForm onSubmit={addContact} />
//         </Wrapper>

//         {contacts.length === 0
//           ? (<Notification />)
//           : (<Wrapper>
//               <TitleSecond>Contacts</TitleSecond>
//               <Filter value={filter} onChange={changeFilter}/>
//               <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
//             </Wrapper>)
//         }
        
//       </Container>
//     ); 
//   } 
// }
