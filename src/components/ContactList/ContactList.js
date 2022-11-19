import { ContList, ContItem, Name, Tel, Btn } from 'components/ContactList/ContactListStyled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { TitleSecond } from 'components/Utils/UtilsStyled';

export default function ContactList({contacts}) {
    const dispatch = useDispatch();
    
    return (
        <ContList>
            <TitleSecond>Contacts</TitleSecond>
            {contacts.map(({ id, name, number }) => (
                <ContItem key={id}>
                    <Name>{name}:
                        <Tel>{number}</Tel>
                    </Name>
                    {/* <Btn type="button" onClick={() => dispatch(editContact(id))}>Edit</Btn> */}

                    <Btn type="button" onClick={() => dispatch(deleteContact(id))}>Delete</Btn>
                </ContItem>
            ))}
        </ContList>
    );
}
