import { Container, Wrapper, NavTo, Welcome, TitleSecond } from 'components/Utils/UtilsStyled';
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "redux/auth/authSelectors";
import { getUserName } from "redux/auth/authSelectors";
import AddContact from './AddContact';

export default function Home() {
    const name = useSelector(getUserName);
    const isLoggedIn = useSelector(getIsLoggedIn);

    if (isLoggedIn) {
        return (
            <Container>
                <Wrapper>
                    <Welcome>
                        Welcome, {name}! 
                    </Welcome>
                    <TitleSecond>See <NavTo to="/login"> my contacts </NavTo></TitleSecond>
                    <AddContact/>   

                </Wrapper>
            </Container>
        )
    }
    

    return (
        <Container>
            <Wrapper>
                <Welcome>In this application you can add all your contacts!</Welcome>
                <Welcome>And you won't lose them again.</Welcome>
                <Welcome>Please click <NavTo to="/login"> here </NavTo> to log in and create a new contact.</Welcome>
            </Wrapper>
       </Container>
    );
  }
