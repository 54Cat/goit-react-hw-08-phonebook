import { useSelector } from "react-redux";
import { getIsLoggedIn } from "redux/auth/authSelectors";
import Navigation from "components/Navigation/Navigations";
import UserMenu from "components/UserMenu/UserMenu";
import { AuthNav } from "components/AuthNav/AuthNav";
import { Header } from "components/AppBar/AppBarStyled";

export default function AppBar() {
    const isLoggedIn = useSelector(getIsLoggedIn);
    
    return (
        <Header>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Header> 
    );
  }
