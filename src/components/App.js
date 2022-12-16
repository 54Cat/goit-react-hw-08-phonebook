import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from "react";
import { Container } from 'components/Utils/UtilsStyled';
import { Layout } from "components/Layout";
import Home from 'pages/Home';
import { useDispatch } from 'react-redux';
import * as authOperations from 'redux/auth/authOperations';
import PrivateRoute from './PrivateRoute';
import PublickRoute from './PublickRoute';
import { ToastContainer } from 'react-toastify';

const Login = lazy(() => import("pages/Login")); 
const Contact = lazy(() => import("pages/Contact"));
const Register = lazy(() => import("pages/Register"));
const NotFound = lazy(() => import("pages/NotFound"));

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authOperations.fetchCurrentUser())
    }, [dispatch]);

    return (  
        <Container>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    
                    <Route element={<PublickRoute />}>
                        <Route path='/register' element={<Register/>}/>
                        <Route path='/login' element={<Login/>}/>
                    </Route>

                    <Route element={<PrivateRoute />}>
                        <Route path='/contacts' element={<Contact />} />
                    </Route>
                    
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
            <ToastContainer
                autoClose={3000}
            />
        </Container>
    ); 
}
