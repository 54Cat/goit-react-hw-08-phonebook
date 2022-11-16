import { useState } from "react";
import { Form, Label, Input, Btn } from 'components/ContactForm/ContactFormStyled';
import { Container, Wrapper, TitleMain } from 'components/Utils/UtilsStyled';
import { useDispatch } from "react-redux";
import { register } from "redux/auth/authOperations";

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = e => {
    switch (e.currentTarget.name) {   
      case 'name':
        setName(e.currentTarget.value);
        break;

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
    dispatch(register({name, email, password}));
    setName('');
    setEmail('');
    setPassword('');
  }

  return (
    <Container>
      <Wrapper>
        <TitleMain>Registration</TitleMain>
        <Form onSubmit={handleSubmit}>
            
            <Label htmlFor={name}>
              Name
              <Input
                type="text"
                name="name"
                id={name}
                value={name}
                onChange={handleInputChange}
                required />
            </Label>

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

            <Btn type="submit">SING UP</Btn>
        </Form>
      </Wrapper>
    </Container>
      
  );
}
