import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const Container = styled.div` 
text-align: center;
`;

export const Wrapper = styled.div` 
margin-bottom: 32px;

&:last-child{
    margin-bottom: 0;
}
`;

export const TitleMain = styled.h1` 
display: flex;
justify-content: center;
padding-bottom: 12px;
font-size: 18px;
`;

export const TitleSecond = styled.h2` 
display: flex;
justify-content: center;
font-size: 20px;
padding-bottom: 12px;
`;

export const Welcome = styled.p`
  pcolor: black;
  font-size: 20px;
  padding-bottom: 16px;

`;

export const Notif = styled.p` 
display: flex;
justify-content: center;
font-size: 20px;
`;

export const NavTo = styled(NavLink)`
  color: black;
  font-size: 20px;
  font-weight: 700;
  padding: 0 4px;

  &:hover{
  color: orangered;
}
`;
