// import PropTypes from 'prop-types';
import { ContList, ContItem, Name, Tel } from 'components/ContactList/ContactListStyled';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const contacts = useSelector(state=> state.phonebook.contacts);

  console.log("contactsList",contacts);
    return (
        <ContList>
            {contacts.map(({ id, name, number }) => (
                <ContItem key={id}>
                    <Name>{name}:
                        <Tel>{number}</Tel>
                    </Name>
                    {/* <Btn type="button" onClick={() => onDeleteContact(id)}>Delete</Btn> */}
                </ContItem>
            ))}
        </ContList>
    );
}

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string,
//       name: PropTypes.string,
//       number: PropTypes.string,
//     })
//   ),
//   onDeleteContact: PropTypes.func,
// };