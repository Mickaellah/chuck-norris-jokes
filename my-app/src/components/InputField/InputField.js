import React from 'react';
import style from 'styled-components';

const InputContainer = style.div`
    margin-block-start: 16px;

    input {
        width: 98%;
        padding-block: 16px;
        border-radius: 6px;
        border: solid 1px #c4c4c4;
    }

    label {
        color: #c4c4c4;
        font-size: 16px;
        line-height: 26px;
        position: absolute;
        transform: translate(0, 12px) scale(1);
        padding-inline-start: 16px;
    }   

    :focus-within label {
        transform: translate(-16px, 4px) scale(.75);
      }
    
`;

export default function InputField({firstName, lastName, name,  onChange}) {
    return (
        <InputContainer>
            <label>Inpersonate Chuck Norris</label>
            <input type="text" name="names" value={name} onChange={(value) => onChange(value)} />
        </InputContainer>
    )
}

