import React, {useContext} from 'react';
import {Context} from '../../context/context';

import ChuckNorris from '../../image/chuck-norris.png';

export default function RandomJoke() {
    const {joke} = useContext(Context);
    const randomJoke = joke.value;
    
    return (
        <div>
            <img src={ChuckNorris} alt="Chuck Norris" />
            <p>{randomJoke?.joke}</p>
        </div>
    )
}