import React, {useState, useContext} from 'react';
import style from 'styled-components';

import {Context} from '../context/context';

import RandomJoke from '../components/RandomJoke/RandomJoke';
import DropdownSelect from '../components/DropdownSelect/DropdownSelect';
import {InputField} from '../components/InputField/InputField';
// import Buttons from '../components/Buttons/Buttons';

const Container = style.div`
    position: relative;
`;

export default function Page() {
    const [inputValue , setInputValue] = useState("");

    const {joke} = useContext(Context);
  
    const handleOnChage = (e) => {
        setInputValue(e.target.value);
    }
    return (
        <Container>
            <RandomJoke />
            <DropdownSelect />
            <InputField 
                value={inputValue} 
                onChange={handleOnChage}
            />
            {/* <Buttons text={"Draw a random Chuck Norris Joke"} /> */}
        </Container>

    )
}