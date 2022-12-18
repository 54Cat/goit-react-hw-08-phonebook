import { useState } from "react";
import { Form } from 'components/ContactForm/ContactFormStyled';
import Modal from '@material-ui/core/Modal';
import { TitleMain } from 'components/Utils/UtilsStyled';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: '8px',
  },
  input: {
    width: '300px',
  },
  button: {
    width: '300px',
  },
}));

export function UpdateContactForm({ oldName, oldNumber, openModal, setOpenModal }) {
    const [name, setName] = useState(oldName);
    const [number, setNumber] = useState(oldNumber);
    const classes = useStyles();

    const handleChange = e => {
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
         
            <TitleMain>Edit Contact</TitleMain>
                
            <FormControl className={clsx(classes.margin)} variant="outlined">
                <InputLabel htmlFor="name">Name</InputLabel>
                <OutlinedInput
                id="name"
                name="name"
                type='text'
                value={name}
                onChange={handleChange}
                labelWidth={45}
                className={clsx(classes.input)} 
                required
                />
            </FormControl>

            <FormControl className={clsx(classes.margin)} variant="outlined">
                <InputLabel htmlFor="number">Number</InputLabel>
                <OutlinedInput
                id="number"
                name="number"
                type='tel'
                value={number}
                onChange={handleChange}
                labelWidth={60}
                className={clsx(classes.input)} 
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                required
                />
            </FormControl>
                

            <Button className={clsx(classes.button, classes.margin)} variant="outlined">Cancel</Button>

            <Button className={clsx(classes.button, classes.margin)} type="submit" variant="outlined">Save</Button>
          
            </Form>
          
        </Modal>
    );
}