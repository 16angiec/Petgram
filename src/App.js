import React from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { Logo } from './components/Logo/index';
import { ListOfCategories } from './components/ListOfCategories';
import { ListOfPhotoCards } from './container/ListOfPhotoCards';

export const App = () => (
    <>
        <GlobalStyle />
        <Logo />
        <ListOfCategories />
        <ListOfPhotoCards categoryId={1} />
    </>
)