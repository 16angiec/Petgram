import React, { Fragment, useEffect, useRef, useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';
import { Article, ImgWrapper, Img, Button } from './styles';
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
    const [show, ref] = useNearScreen()
    const key = `like-${id}`;
    const [liked, setLiked] = useLocalStorage(key, false)

    const Icon = liked ? MdFavorite : MdFavoriteBorder;

    return (
        <Article ref={ref}>
            {
                show && <Fragment>
                    <a href={`/detail/${id}`}>
                        <ImgWrapper>
                            <Img src={src} />
                        </ImgWrapper>
                    </a>

                    <Button onClick={() => setLiked(!liked)}>
                        <Icon size='32px' /> {likes} likes!
                    </Button>
                </Fragment>
            }

        </Article>
    )
}