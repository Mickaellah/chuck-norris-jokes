import React, {useContext} from 'react';
import {Context} from '../../context/context';
import style from 'styled-components';

import ChuckNorris from '../../image/chuck-norris.png';

const Container = style.div`
    margin-inline: 58px;
    
    img {
        width: 100%;
        margin-block-start: 48px;
        object-fit: contain;
        border-radius: 6px;
    }

    p {
        color: #34394f;
        font-size: 18px;
        line-height: normal;
        font-style: italic;
        font-weight: 600;
        margin: 0;
        margin-block-start: 24px;
        margin-block-end: 32px;
    }
`;

export default function RandomJoke() {
    const {joke} = useContext(Context);
    const randomJoke = joke.value;
    
    
    return (
        <Container>
            <img src={ChuckNorris} alt="Chuck Norris" />
            <p>{`" ${randomJoke?.joke} "`}</p>
        </Container>
    )
}