import React, from 'react';
import { Layout } from '../components/Layout';
import { FavsWithQuery } from '../container/GetFavorites';


export const Favs = () => (
    <Layout title='Tus favoritos' subtitle='Aquí puedes encontrar tus favoritos'>

        <h1>Favs</h1>
        <FavsWithQuery />
    </Layout>
)