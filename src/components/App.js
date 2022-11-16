import { Route, Routes } from 'react-router-dom';
import { lazy } from "react";
import { Container } from 'components/Utils/UtilsStyled';
import { Layout } from "components/Layout";
import HomeView from 'pages/Home';

const LoginView = lazy(() => import("pages/Login")); 
const ContactView = lazy(() => import("pages/Contact"));
const RegisterView = lazy(() => import("pages/Register"));
const NotFound = lazy(() => import("pages/NotFound"));

export default function App() {
    return (  
        <Container>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<HomeView/>}/>
                    <Route path='/register' element={<RegisterView/>}/>
                    <Route path='/login' element={<LoginView/>}/>
                    <Route path='/contacts' element={<ContactView/>}/>
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Container>
    ); 
}
