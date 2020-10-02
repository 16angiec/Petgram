import React from 'react';
import { Router } from '@reach/router'
import { GlobalStyle } from './styles/GlobalStyles';
import { Logo } from './components/Logo/index';
import { Home } from './Pages/Home';
import { Detail } from './Pages/Detail';

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
        </>
    )
}
