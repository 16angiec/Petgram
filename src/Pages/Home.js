import React, { Fragment} from 'react';
import { Helmet } from 'react-helmet';
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../container/ListOfPhotoCards';

export const Home = ({ id }) => {
    return (
        <Fragment>
            <Helmet>
                <title>Petgram - Tu app de fotos de mascotas</title>
                <meta name='description' content='Con petgram puedes encontar fotos de animales domésticos muy bonitos' />
            </Helmet>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={id} />
        </Fragment>
    )
}