import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "redux/auth/authSelectors";

export default function PublickRoute() {
    const isLoggedIn = useSelector(getIsLoggedIn);

    if (isLoggedIn) {
        return <Navigate to='/contacts' />
    }

    return <Outlet/>
};
