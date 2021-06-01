import React, {useContext} from 'react';
import {Context} from '../../context/context';
import style from 'styled-components';

import ChuckNorris from '../../image/chuck-norris.png';
import RandomPhoto from '../../image/random-photo.png';

const Container = style.div`
    margin-inline: 58px;
    
    img {
        width: 100%;
        height: 130px;
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
        margin-block-start: 22px;
        margin-block-end: 32px;
    }
`;

export default function RandomJoke() {
    const {joke, name} = useContext(Context);
    const randomJoke = joke.value;
    
    
    return (
        <Container>
            {name === "Chuck Norris" 
                ? <img src={ChuckNorris} alt="Chuck Norris" />
                : <img src={RandomPhoto} alt="Chuck Norris" />
            }
            <p>{`" ${randomJoke?.joke} "`}</p>
        </Container>
    )
}