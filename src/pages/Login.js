import { useState } from "react";
import { Form, Label, Input, Btn } from 'components/ContactForm/ContactFormStyled';
import { Container, Wrapper, TitleMain } from 'components/Utils/UtilsStyled';
import { useDispatch } from "react-redux";
import { login } from "redux/auth/authOperations";


export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = e => {
    switch (e.currentTarget.name) {   
      case 'email':
        setEmail(e.currentTarget.value);
        break;

      case 'password':
        setPassword(e.currentTarget.value);
        break;
      
      default:
        return;
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({email, password}));
    
    setEmail('');
    setPassword('');
  }

  return (
      <Container>
        <Wrapper>
          <TitleMain>Login</TitleMain>
          <Form onSubmit={handleSubmit}>

          <Label htmlFor={email}>
            Email
            <Input
              type="email"
              name="email"
              id={email}
              value={email}
              onChange={handleInputChange}
              required />
          </Label>

          <Label htmlFor={password}>
            Password
            <Input
              type="password"
              name="password"
              id={password}
              value={password}
              onChange={handleInputChange}
              required />
          </Label>

          <Btn type="submit">LOGIN</Btn>
          </Form>
        </Wrapper>
      </Container>
    );
  }
