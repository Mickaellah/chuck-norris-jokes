import React, {useContext} from 'react';
import style from 'styled-components';
import DownloadLink from 'react-download-link';

import {Context} from '../../context/context';

import Buttons from '../Buttons/Buttons';
import CounterButton from '../Buttons/CounterButton';
import InputField from '../InputField/InputField';

// import ArrowDown from '../../icons/arrow-down.svg';

const Form = style.form`
    margin-inline: 58px;

    select {
        width: 100%;
        padding-block: 19px;
        padding-inline: 12px;
        border: solid 1px #c4c4c4;
        background-color: #ffffff;
        color: #c4c4c4;
        border-radius: 6px;
        text-transform: capitalize;
        font-size: 16px;
        line-height: 26px;

        option {
            margin-inline: 8px;
            padding-block: 16px;
        }
    } 
`;

const SaveButtonContainer = style.div`
    padding-block-end: 72px;
    margin-block-start: 52px;
    display: flex;
`;

const SaveButton = style.div`
    margin-inline-start: 8px;
    width: 100%;
    background-color: #f5f6f8;
    border-radius: 4px;
    text-align: center;
    padding-block-start: 16px;
    font-size: 16px;
    line-height: 26px;
    cursor: pointer;
`;

const SaveButtonActive = style.div`
    margin-inline-start: 8px;
    width: 100%;
    background-color: #34394f;
    border-radius: 4px;
    text-align: center;
    padding-block-start: 16px;
    font-size: 16px;
    line-height: 26px;
    cursor: pointer;
`;

export default function ButtonsAndTextFields() {

    const {
        joke,  
        name,
        handleSubmit,
        handleSelect,
        category,
        count,
        fetchARandomJoke,
        getAJokeByNumber,
    } = useContext(Context);

    return (
        <Form onSubmit={handleSubmit}>
            <select name="categories" value={category} onChange={handleSelect}>
                <option value="categories">categories</option>
                <option value="explicit">explicit</option>
                <option value="nerdy">nerdy</option>
            </select>
            <InputField />
            <Buttons onClick={fetchARandomJoke} type="submit" text={`Draw a random ${name} Joke`} />

            <SaveButtonContainer>
                <CounterButton />
                {count <= 0 
                    ? <SaveButton>
                        <DownloadLink style={{color: '#34394f', textDecoration: 'none'}} label="Save Jokes" filename="jokes.txt" exportFile={() => Promise.resolve(getAJokeByNumber(joke))} />
                    </SaveButton>
                    : <SaveButtonActive>
                        <DownloadLink style={{color: '#ffffff', textDecoration: 'none'}} label="Save Jokes" filename="jokes.txt" exportFile={() => Promise.resolve(getAJokeByNumber(joke))} />
                    </SaveButtonActive>
                }
            </SaveButtonContainer>
        </Form>
    )
}