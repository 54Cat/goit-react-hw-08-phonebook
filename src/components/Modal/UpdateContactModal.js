import { useState } from "react";
import { Form, Label, Input, Btn } from 'components/ContactForm/ContactFormStyled';
import { nanoid } from "nanoid";
import Modal from '@material-ui/core/Modal';

export function UpdateContactForm({ openModal, setOpenModal }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const nameInputId = nanoid(4);
    const numberInputId = nanoid(4);

    const handleInputChange = e => {
        switch (e.currentTarget.name) {   
        case 'name':
            setName(e.currentTarget.value);
            break;

        case 'number':
            setNumber(e.currentTarget.value);
            break;
        
        default:
            return;
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        resetForm();
    }

    const resetForm = () => {
        setName('');
        setNumber('');
    }
    
    return (          
        <Modal
            open={openModal}
            onClose={()=>setOpenModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >

            <Form onSubmit={handleSubmit}>
                <Label htmlFor={nameInputId}>
                Name
                <Input
                    type="text"
                    name="name"
                    id={nameInputId}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    value={name}
                    onChange={handleInputChange}
                    required />
                </Label>
                <Label htmlFor={numberInputId}>
                Number
                <Input
                    type="tel"
                    name="number"
                    id={numberInputId}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    value={number}
                    onChange={handleInputChange}
                    required />
                </Label>
                <Btn type="submit">Edit contact</Btn>
            </Form>
          
        </Modal>
    );
}