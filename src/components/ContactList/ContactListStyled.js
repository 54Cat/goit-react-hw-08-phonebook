import styled from '@emotion/styled';

const ContList = styled.ul` 
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

const ContItem = styled.li` 
display: flex;
justify-content: space-between;
align-items: center;
width: 380px;
margin-bottom: 16px;

&:last-child{
  margin-bottom: 0;
}
`;

const Name = styled.p` 
font-weight: bold;
color: #5f5f5f;
`;

const Tel = styled.span` 
padding-left: 8px;
font-weight: normal;
color: #000000;
`;

const Btn = styled.button` 
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

export {
  ContList,
  ContItem,
  Name,
  Tel,
  Btn
}
