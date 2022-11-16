import { Nav, NavItem } from 'components/Navigation/NavigationsStyled';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from "redux/auth/authSelectors";

export default function Navigation() {
    const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Nav>
      <NavItem to="/">
        Home
      </NavItem>
      {isLoggedIn && (
        <NavItem to="/contacts">
          Contacts
        </NavItem>
      )}
    </Nav>
  );
};