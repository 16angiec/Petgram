import React from 'react';
import { Layout } from '../components/Layout';
import { FavsWithQuery } from '../container/GetFavorites';


export const Favs = () => (
    <Layout title='Tus favoritos' subtitle='Aquí puedes encontrar tus favoritos'>
        <FavsWithQuery />
    </Layout>
)