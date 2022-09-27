import styled from '@emotion/styled';

const Form = styled.form` 
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

const Label = styled.label` 
display: flex;
justify-content: space-between;
align-items: center;
width: 288px;
margin-bottom: 16px;
`;

const Input = styled.input`
width: 200px; 
padding: 8px;
background-color: #f5f5f5;
border: 1px solid #afafaf;
border-radius: 8px;
`;

const Btn = styled.button` 
min-width: 100px;
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
  Form,
  Input,
  Label,
  Btn
}
