import React, {useContext, useState} from 'react';
import style from 'styled-components';
import DownloadLink from 'react-download-link';

import {Context} from '../../context/context';

import Buttons from '../Buttons/Buttons';
import CounterButton from '../Buttons/CounterButton';
import InputField from '../InputField/InputField';

const Form = style.form`
    margin-inline: 58px;

    select {
        width: 100%;
        padding: 16px;
        border: solid 1px #c4c4c4;
        background-color: #ffffff;
        color: #c4c4c4;
        border-radius: 6px;
        text-transform: capitalize;

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

export default function ButtonsAndTextFields() {
    const [category, setCategory] = useState('category');

    const {
        joke, 
        setJoke, 
        isTyped, 
        setIsTyped, 
        // firstName, 
        // lastName,
        // handleFirstNameInput,
        // handleLastNameInput,
        name,
        handleSubmit,
        getOtherJokeFromOtherNames,
        getAJokeByNumber,
    } = useContext(Context);

    const NerdyJoke = "http://api.icndb.com/jokes/random?limitTo=[nerdy]";
    const ExplicitJoke = "http://api.icndb.com/jokes/random?limitTo=[explicit]";

    const handleOnChange = (e) => {
        setCategory(e.target.value);
        setIsTyped(!isTyped);
    }

    const selectAGategory = async (e) => {
        const value = document.getElementsByTagName('select');
        if (value[0].value === "nerdy") {
            const response = await fetch(NerdyJoke);
            const data = await response.json();
            setJoke(data);
        } else if (value[0].value === "explicit") {
            const res = await fetch(ExplicitJoke);
            const result = await res.json();
            setJoke(result);
        } else if (value[0].value === "categories") {
            setJoke(joke);
        }
    }

    const fetchAJoke = (e) => {
        e.preventDefault();
        if (isTyped === isTyped) {
            getOtherJokeFromOtherNames();
        } else {
            selectAGategory();
        }
    }

    return (
        <Form>
            <select name="categories" value={category} onChange={handleOnChange}>
                <option value="categories">categories</option>
                <option value="explicit">explicit</option>
                <option value="nerdy">nerdy</option>
            </select>
            <InputField 
                firstName={name.firstName}
                lastName={name.lastName}
                // onChangeForFirstName={handleFirstNameInput} 
                // onChangeForLastName={handleLastNameInput}
                onChange={handleSubmit}
            />
            <Buttons onClick={fetchAJoke} type="button" text={`Draw a random ${name.firstName} ${name.lastName} Joke`} />

            <SaveButtonContainer>
                <CounterButton />
                <SaveButton>
                    <DownloadLink style={{color: '#34394f', textDecoration: 'none'}} label="Save Jokes" filename="jokes.txt" exportFile={() => Promise.resolve(getAJokeByNumber(joke))} />
                </SaveButton>
            </SaveButtonContainer>
        </Form>
    )
}