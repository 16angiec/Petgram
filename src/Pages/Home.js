import React from 'react';
import { Layout } from '../components/Layout';
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../container/ListOfPhotoCards';

const HomePage = ({ id }) => {
    return (
        <Layout title='Tu app de fotos de mascotas' subtitle='Con petgram puedes encontar fotos de animales domésticos muy bonitos' >
            <ListOfCategories />
            <ListOfPhotoCards categoryId={id} />
        </Layout>
    )
}

export const Home = React.memo(HomePage, (prvProps, props) => {
    return prevProps.categoryId === props.categoryId
})