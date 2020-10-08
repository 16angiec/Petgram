import React, { useContext, Suspense } from 'react';
import { Redirect, Router } from '@reach/router'
import { GlobalStyle } from './styles/GlobalStyles';
import { Logo } from './components/Logo/index';
import { NavBar } from './components/NavBar/index';
import { Context } from './Context';
import { Home } from './Pages/Home';
import { Detail } from './Pages/Detail';
/* import { Favs } from './Pages/Favs'; */
import { User } from './Pages/User';
import { NotRegisteredUser } from './Pages/NotRegisteredUser';
import { NotFound } from './Pages/NotFound';

const Favs = React.lazy(() => import('./Pages/Favs'))

export const App = () => {
    const { isAuth } = useContext(Context)
    return (
        <Suspense fallback={<div />}>
            <GlobalStyle />
            <Logo />
            <Router>
                <NotFound default />
                <Home path='/' />
                <Home path='/pet/:id' />
                <Detail path='/detail/:detailId' />
                {!isAuth && <NotRegisteredUser path='/login' />}
                {!isAuth && <Redirect from='/favs' to='/login' />}
                {!isAuth && <Redirect from='/user' to='/login' />}
                {isAuth && <Redirect from='/login' to='/' />}
                <Favs path='/favs' />
                <User path='/user' />
            </Router>
            <NavBar />
        </Suspense>
    )
}
