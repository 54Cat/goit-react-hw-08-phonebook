import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/authOperations";
import { Form } from 'components/ContactForm/ContactFormStyled';
import { Container, Wrapper, TitleMain } from 'components/Utils/UtilsStyled';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: '8px',
  },
  input: {
    width: '300px',
  },
  button: {
    width: '300px',
  },
}));

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState( false);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleChange = e => {
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

  const handleClickShowPassword = () => {
    setShowPassword( !showPassword );
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  }

  return (
    <Container>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
            
          <TitleMain>Registration</TitleMain>

          <FormControl className={clsx(classes.margin)} variant="outlined">
            <InputLabel htmlFor="name">Name</InputLabel>
            <OutlinedInput
              id="name"
              name="name"
              type='text' 
              value={name}
              onChange={handleChange}
              labelWidth={40}
              className={clsx(classes.input)} 
              required
            />
          </FormControl>
            
          <FormControl className={clsx(classes.margin)} variant="outlined">
            <InputLabel htmlFor="email">Email</InputLabel>
            <OutlinedInput
              id="email"
              name="email"
              type='email'
              value={email}
              onChange={handleChange}
              labelWidth={40}
              className={clsx(classes.input)}
              required
            />
          </FormControl>

          <FormControl className={clsx(classes.margin)} variant="outlined">
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              name="password"
              type='password'
              value={password}
              onChange={handleChange}
              endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
              }
              labelWidth={70}
              className={clsx(classes.input)} 
              required
            />
          </FormControl>

          <Button className={clsx(classes.button, classes.margin)} type="submit" variant="outlined">SING UP</Button>

        </Form>
      </Wrapper>
    </Container>
      
  );
}
