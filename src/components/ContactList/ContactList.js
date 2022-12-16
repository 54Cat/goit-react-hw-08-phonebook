import { ContList, ContItem, Name, Tel, Btn, BtnCont } from 'components/ContactList/ContactListStyled';
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
                    <>
                        <Name>{name}:
                            <Tel>{number}</Tel>
                        </Name>
                    </>
                    <BtnCont>
                        {/* <Btn type="button">Call</Btn>
                        <Btn type="button">Maill</Btn>
                        <Btn type="button">Edit</Btn> */}
                        <Btn type="button" onClick={() => dispatch(deleteContact(id))}>Delete</Btn>
                    </BtnCont>
                </ContItem>
            ))}
        </ContList>
    );
}
