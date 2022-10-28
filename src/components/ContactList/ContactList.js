import { ContList, ContItem, Name, Tel, Btn } from 'components/ContactList/ContactListStyled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';

export default function ContactList({contacts}) {
    const dispatch = useDispatch();
    
    return (
        <ContList>
            {contacts.map(({ id, name, number }) => (
                <ContItem key={id}>
                    <Name>{name}:
                        <Tel>{number}</Tel>
                    </Name>
                    <Btn type="button" onClick={() => dispatch(deleteContact(id))}>Delete</Btn>
                </ContItem>
            ))}
        </ContList>
    );
}
