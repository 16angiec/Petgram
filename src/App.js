import React from 'react';
import { Router } from '@reach/router'
import { GlobalStyle } from './styles/GlobalStyles';
import { Logo } from './components/Logo/index';
import { NavBar } from './components/NavBar/index';
import Context from './Context';
import { Home } from './Pages/Home';
import { Detail } from './Pages/Detail';
import { Favs } from './Pages/Favs';
import { User } from './Pages/User';
import { NotRegisteredUser } from './Pages/NotRegisteredUser';

export const App = () => {
    return (
        <>
            <GlobalStyle />
            <Logo />
            <Router>
                <Home path='/' />
                <Home path='/pet/:id' />
                <Detail path='/detail/:detailId' />
            </Router>

            <Context.Consumer>
                {
                    ({ isAuth }) =>
                        isAuth
                            ? <Router>
                                <Favs path='/favs' />
                                <User path='/user' />
                            </Router>
                            : <Router>
                                <NotRegisteredUser path='/favs' />
                                <NotRegisteredUser path='/user' />
                            </Router>
                }
            </Context.Consumer>

            <NavBar />
        </>
    )
}
