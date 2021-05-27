import React from 'react';
import style from 'styled-components';

const InputContainer = style.div`
    display: flex;
    flex-direction: column;
    max-width: 439px;

    input {
        width: 100%;
        height: 58px;
        outline: 0;
        border: 1px solid #c4c4c4;
        border-radius: 6px;
        padding-inline-start: 16px;
        font-size: 16px;
        line-height: 26px;
        color: #34394f;
    },
    label {
        font-size: 16px;
        color: #c4c4c4;
        padding-inline-start: 16px;
        line-height: 26px;
        position: absolute;
        transform: translate(0, 18px) scale(1);
        transform-origin: top left;
        transition: all 0.2s ease-out;
    }

    :focus-within label {
        transform: translate(0, 4px) scale(0.75);
        padding-inline-start: -16px;
    }

    :focus-within input {
        outline: 0;
        border: 1px solid #34394f;
    }
    
`;

export const InputField = ({value, onChange, label}) => {
    return (
        <form>
            <InputContainer>
                <input type="text" value={value} onChange={(value) => onChange(value)} />
                <label>Inpersonate Chuck Norris</label>
            </InputContainer>
        </form>
    )
}

