import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from "react";
import { Container } from 'components/Utils/UtilsStyled';
import { Layout } from "components/Layout";
import Home from 'pages/Home';
import { useDispatch } from 'react-redux';
import * as authOperations from 'redux/auth/authOperations';

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
                    <Route index element={<Home/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/contacts' element={<Contact/>}/>
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Container>
    ); 
}
