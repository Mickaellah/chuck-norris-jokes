import React, {useContext, useEffect, useState} from 'react';

import {Context} from '../../context/context';

import Buttons from '../Buttons/Buttons';
import InputField from '../InputField/InputField';

export default function ButtonsAndTextFields() {
    const [category, setCategory] = useState('category');
    const [firstName, setFirstName] = useState("Chuck");
    const [lastName, setLastName] = useState("Norris");
    const [isTyped, setIsTyped] = useState(true);

    const {joke, setJoke} = useContext(Context);

    const NerdyJoke = "http://api.icndb.com/jokes/random?limitTo=[nerdy]";
    const ExplicitJoke = "http://api.icndb.com/jokes/random?limitTo=[explicit]";
    const NameChangingAPI = `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`

    const handleOnChange = (e) => {
        setCategory(e.target.value);
        setIsTyped(!isTyped);
    }

    const handleFirstNameInput = (e) => {
        setFirstName(e.target.value);
        setIsTyped(isTyped);
    }

    const handleLastNameInput = (e) => {
        setLastName(e.target.value);
        setIsTyped(isTyped);
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

    const getOtherJokeFromOtherNames = async (e) => {
        const response = await fetch(NameChangingAPI);
        const data = await response.json();
        setJoke(data);
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
        <form>
            <select name="categories" value={category} onChange={handleOnChange}>
                <option value="categories">categories</option>
                <option value="explicit">explicit</option>
                <option value="nerdy">nerdy</option>
            </select>
            <InputField 
                firstName={firstName}
                lastName={lastName}
                onChangeForFirstName={handleFirstNameInput} 
                onChangeForLastName={handleLastNameInput}
            />
            <Buttons onClick={fetchAJoke} type="click" text={`Draw a random ${firstName} ${lastName} Joke`} />
        </form>
    )
}