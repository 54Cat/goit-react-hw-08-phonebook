import styled from '@emotion/styled';

export const ContList = styled.ul` 
display: flex;
flex-direction: column;
align-items: center;
width: 400px;
margin-right: auto;
margin-left: auto;
padding: 20px; 
border-radius: 4px;
border: 1px solid #5b5b5b;
`;

export const ContItem = styled.li` 
display: flex;
flex-direction: column;space-between;
align-items: center;
width: 380px;
padding: 8px;
margin-bottom: 16px;

background-color: #f5f5f5;
border-radius: 8px;

&:last-child{
  margin-bottom: 0;
}
`;

export const BtnCont = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

export const Name = styled.p` 
font-weight: bold;
color: #5f5f5f;
padding-bottom: 8px;
`;

export const Tel = styled.span` 
padding-left: 8px;
font-weight: normal;
color: #000000;
`;

export const Btn = styled.button` 
min-width: 70px;
padding: 4px;
cursor: pointer;
border-radius: 8px;
border: 2px solid #5b5b5b;
background-color: #f5f5f5;

&:hover{
  background-color: #dfdfdf;
}
`;