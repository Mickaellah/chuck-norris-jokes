import React, {useContext} from 'react';
import style from 'styled-components';
import DownloadLink from 'react-download-link';

import {Context} from '../../context/context';

import Buttons from '../Buttons/Buttons';
import CounterButton from '../Buttons/CounterButton';
import InputField from '../InputField/InputField';

const Form = style.form`
    margin-inline: 58px;
`;

const Select = style.div`
    position: relative;

    ::after{
        content: "›";
        color: #c4c4c4;
        position: absolute;
        top: 20px;
        right: 16px;
        transition: all 0.3s linear;
        transform: rotate(90deg);
        white-space: pre;
        vertical-align: middle;
    }

    :active::after {
        transform: rotate(-90deg);
    }

    select {
        width: 100%;
        padding-block: 16px;
        padding-inline: 12px;
        border: solid 1px #c4c4c4;
        background-color: #ffffff;
        color: #c4c4c4;
        border-radius: 6px;
        text-transform: capitalize;
        font-size: 16px;
        line-height: 26px;
        -webkit-appearance: none;
        -moz-appearance: none;
    }
`;

const CounterContenaire = style.div`
    padding-block-end: 72px;

    & > p {
        color: #f39a9a;
        font-size: 16px;
        line-height: 26px;
        margin-block-end: -36px;
    }
`;

const ButtonContainer = style.div`
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
            <Select>
                <select name="categories" value={category} onChange={handleSelect}>
                    <option value="categories">categories</option>
                    <option value="explicit">explicit</option>
                    <option value="nerdy">nerdy</option>
                </select>
            </Select>
            <InputField />
            <Buttons onClick={fetchARandomJoke} type="submit" text={`Draw a random ${name} Joke`} />

            <CounterContenaire>
                <ButtonContainer>
                    <CounterButton />
                    {count <= 0 
                        ? <SaveButton 
                            style={count <= 100 
                                ? {cursor: 'pointer'} 
                                : {cursor: 'not-allowed'}}
                        >
                            <DownloadLink 
                                style={count <= 100 
                                    ? {color: '#34394f', textDecoration: 'none', cursor: 'pointer'} 
                                    : {color: '#34394f', textDecoration: 'none', cursor: 'not-allowed'}
                                } 
                                label="Save Jokes" 
                                filename="jokes.txt" 
                                exportFile={() => Promise.resolve(getAJokeByNumber(joke))} 
                            />
                        </SaveButton>
                        : <SaveButtonActive 
                            style={count <= 100 
                                ? {cursor: 'pointer'} 
                                : {cursor: 'not-allowed'}
                            }
                        >
                            <DownloadLink 
                                style={count <= 100 
                                    ? {color: '#ffffff', textDecoration: 'none', cursor: 'pointer'} 
                                    : {color: '#ffffff', textDecoration: 'none', cursor: 'not-allowed'}}
                                    
                                label="Save Jokes" 
                                filename="jokes.txt" 
                                exportFile={() => Promise.resolve(getAJokeByNumber(joke))} 
                            />
                        </SaveButtonActive>
                    }
                </ButtonContainer>
                {count > 100 
                    ? <p>You can pick a number from 1 to 100.</p>
                    : ""
                }
            </CounterContenaire>
        </Form>
    )
}