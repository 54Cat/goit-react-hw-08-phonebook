import { Container, Wrapper, TitleSecond } from 'components/Utils/UtilsStyled';
import ContactForm from 'components/ContactForm/ContactForm';
import { addContact } from "redux/contacts/contactsOperations";
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contactsSelectors';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

export default function AddContact() {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const duplicateContact = (name, number) => {
        const normalizedName = name.toLowerCase();
        const duplicateName = contacts.find(item => item.name.toLowerCase() === normalizedName); 
        const duplicateNumber = contacts.find(item => item.number === number);
        
        if (duplicateName) {
            toast.warning(`Contact "${name}" is already in your Phonebook`);
            return name;
        }
        else if (duplicateNumber) {
            toast.warning(`Number ${number} is already in your Phonebook`);
            return number
        }
    }

    const addContacts = (name, number) => {
        const duplicate = duplicateContact(name, number);

        if (!duplicate) {
            dispatch(addContact({ name, number }));
            return toast.success(`The contact has been added to your phone book`);    
        };
        return;
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
