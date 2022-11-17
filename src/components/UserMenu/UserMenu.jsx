import { useDispatch, useSelector } from "react-redux";
import { getUserName } from "redux/auth/authSelectors";
import { logout } from "redux/auth/authOperations";
import { Nav, Text } from 'components/UserMenu/UserMenuStyled';
import { Btn } from 'components/ContactList/ContactListStyled';

export default function UserMenu() {
    const name = useSelector(getUserName);
    const dispatch = useDispatch();

    return (
        <Nav>
            <Text> Hello, {name}!</Text>
            <Btn type="button" onClick={() => dispatch(logout())} >Logout</Btn>    
        </Nav>
    );
}