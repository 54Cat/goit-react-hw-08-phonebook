import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
`;

export const NavItem = styled(NavLink)`
  padding: 8px 16px;
  color: black;
  font-weight: 500;

  &.active {
    color: orangered;
  }

  &:hover{
  color: orangered;
  }
`;
