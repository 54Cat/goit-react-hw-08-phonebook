import styled from '@emotion/styled';

const Wrapper = styled.div` 
display: flex;
flex-direction: column;
align-items: center;
margin-right: auto;
margin-left: auto;
`;

const Label = styled.label` 
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 16px;
`;

const Input = styled.input`
width: 200px; 
padding: 8px;
background-color: #f5f5f5;
border: 1px solid #afafaf;
border-radius: 8px;
margin-left: 12px;
`;

export {
  Wrapper,
  Label,
  Input
}
