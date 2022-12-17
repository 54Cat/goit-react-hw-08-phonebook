import { ContList, ContItem, Name, Tel, BtnCont, ConteinerCont } from 'components/ContactList/ContactListStyled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { TitleSecond } from 'components/Utils/UtilsStyled';
import { IconButton } from '@material-ui/core';
import { Delete, Edit, Call, Chat, Person } from '@material-ui/icons';

import {UpdateContactForm} from 'components/Modal/UpdateContactModal';
import { useState } from 'react';
// import { Button } from '@material-ui/core';

export default function ContactList({contacts}) {
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState(false);
    
    return (
            <ContList>
                <TitleSecond>Contacts</TitleSecond>
                {contacts.map(({ id, name, number }) => (
                    <ContItem key={id}>

                        <IconButton aria-label="delete">
                            <Person fontSize="large" />
                        </IconButton>

                        <ConteinerCont>
                            <>
                                <Name>{name}:
                                    <Tel>{number}</Tel>
                                </Name>
                            </>

                            <BtnCont>
                                <IconButton aria-label="delete">
                                    <Call />
                                </IconButton>

                                <IconButton aria-label="delete">
                                    <Chat />
                                </IconButton>

                                <IconButton aria-label="delete" onClick={()=>setOpenModal(true)}>
                                    <Edit />
                                </IconButton>
                                
                                <IconButton aria-label="delete" onClick={() => dispatch(deleteContact(id))}>
                                    <Delete />
                                </IconButton>
                            </BtnCont>
                        </ConteinerCont>

                    </ContItem>
                ))}
            {/* <Button onClick={()=>setOpenModal(true)}>Open modal</Button> */}
            <UpdateContactForm openModal={openModal} setOpenModal={setOpenModal} />
            </ContList>
    );
}
