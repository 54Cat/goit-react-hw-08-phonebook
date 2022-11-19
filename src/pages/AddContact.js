import { Container, Wrapper, TitleSecond } from 'components/Utils/UtilsStyled';
import ContactForm from 'components/ContactForm/ContactForm';
import { addContact } from "redux/contacts/contactsOperations";
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contactsSelectors';

export default function AddContact() {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);


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

    return (
        <Container>
            <Wrapper>
                <TitleSecond>Add new contact</TitleSecond>
                <ContactForm onSubmit={addContacts} />
            </Wrapper>
       </Container>
               
    );
  }
