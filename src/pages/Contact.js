import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Wrapper, TitleSecond } from 'components/Utils/UtilsStyled';
import { getContacts, getLoading, getError } from 'redux/contacts/contactsSelectors';
import * as contactsOperations from 'redux/contacts/contactsOperations';
import { changeFilter } from 'redux/filter/filterSlice';
import { getFilter } from 'redux/filter/filterSelectors';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { NoContacts, Error } from 'components/Utils/Notification';
import Loader from 'components/Utils/Loader';

export default function Contact() {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const isLoading = useSelector(getLoading);
    const isError = useSelector(getError);
    const filter = useSelector(getFilter);

    useEffect(() => {
        dispatch(contactsOperations.fetchContact())
    }, [dispatch]);    

    const onChangeFilter = (e) => {
        dispatch(changeFilter(e.currentTarget.value));
    }
        
    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
    }

    return (  
        <Container>
            
            {isLoading && <Loader />}
            {isError ? (<Error />):
                (contacts.length === 0
                    ? (<NoContacts />)
                    : (<Wrapper>
                        <TitleSecond>Find contact by name</TitleSecond>
                        <Filter onChange={onChangeFilter}/>
                        <ContactList contacts={getVisibleContacts()} />
                    </Wrapper>)
                )
            }
        </Container>
    ); 
}
