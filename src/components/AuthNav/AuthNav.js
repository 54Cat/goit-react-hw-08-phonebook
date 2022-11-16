import { Nav, NavItem } from 'components/Navigation/NavigationsStyled';

export const AuthNav = () => {
  return (
    <Nav>
      <NavItem to="/register">
        Register
      </NavItem>
      <NavItem to="/login">
        Log In
      </NavItem>
    </Nav>
  );
};