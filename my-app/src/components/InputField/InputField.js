import React, {useContext} from 'react';
import style from 'styled-components';
import {Context} from '../../context/context';

const InputContainer = style.div`
    margin-block-start: 16px;

    input {
        width: 95.3%;
        font-size: 16px;
        line-height: 26px;
        padding-block: 16px;
        padding-inline-start: 16px;
        border-radius: 6px;
        border: solid 1px #c4c4c4;
        color: transparent;
        background-color: #ffffff;
    }

    input:focus {
        color: #34394f;
    }

    label {
        color: #c4c4c4;
        font-size: 16px;
        line-height: 26px;
        position: absolute;
        transform: translate(0, 16px) scale(1);
        padding-inline-start: 16px;
    }

    :focus-within label {
        transform: translate(-16px, 4px) scale(.75);
        margin-block-start: -6px;
        margin-inline-start: -2px;
    }
    
`;

export default function InputField() {
    const {name, handleChange} = useContext(Context);

    return (
        <InputContainer>
            <label>Inpersonate Chuck Norris</label>
            <input type="text" name="names" value={name} onChange={handleChange} />
        </InputContainer>
    )
}

