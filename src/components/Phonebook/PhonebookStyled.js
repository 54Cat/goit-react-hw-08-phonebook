import styled from '@emotion/styled';

const Container = styled.div` 
padding: 16px;
`;

const Wrapper = styled.div` 
margin-bottom: 32px;

&:last-child{
    margin-bottom: 0;
}
`;

const BtnList = styled.ul` 
display: flex;
`;

const BtnItem = styled.li` 
margin-right: 20px;

&:last-child{
    margin-right: 0;
}
`;

const Btn = styled.button` 
min-width: 60px;
padding: 4px;
cursor: pointer;
border-radius: 8px;

&:hover{
  background-color: #faf4eb;
}
`;

const Title = styled.title` 
display: block;
font-size: 24px;
padding-bottom: 12px;
`;

const Notif = styled.title` 
display: block;
font-size: 18px;
color: #5b5b5b;
`;

const StatData = styled.p` 
margin-bottom: 4px;
`;

export {
    Container,
    BtnList,
    BtnItem,
    Btn,
    Wrapper,
    Title,
    Notif,
    StatData
}
