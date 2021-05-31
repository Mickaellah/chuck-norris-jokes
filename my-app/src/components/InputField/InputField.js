import React from 'react';
import style from 'styled-components';

const InputContainer = style.div`
    display: flex;
    flex-direction: column;
    margin-block-start: 16px;

    label {
        color: #c4c4c4;
        font-size: 16px;
        line-height: 26px;
    }
    

    // input {
    //     width: 100%;
    //     height: 58px;
    //     outline: 0;
    //     border: 1px solid #c4c4c4;
    //     border-radius: 6px;
    //     padding-inline-start: 16px;
    //     font-size: 16px;
    //     line-height: 26px;
    //     color: #34394f;
    // },
    // label {
    //     font-size: 16px;
    //     color: #c4c4c4;
    //     padding-inline-start: 16px;
    //     line-height: 26px;
    //     position: absolute;
    //     transform: translate(0, 18px) scale(1);
    //     transform-origin: top left;
    //     transition: all 0.2s ease-out;
    // }

    // :focus-within label {
    //     transform: translate(0, 4px) scale(0.75);
    //     padding-inline-start: -16px;
    // }

    // :focus-within input {
    //     outline: 0;
    //     border: 1px solid #34394f;
    // }
    
`;

export default function InputField({firstName, lastName, onChangeForFirstName, onChangeForLastName, name, handleSubmit}) {
    return (
        <InputContainer>
            <label>Inpersonate Chuck Norris</label>
            <div>
                <input type="text" value={firstName} onChange={(value) => onChangeForFirstName(value)} />
                <input type="text" value={lastName} onChange={(value) => onChangeForLastName(value)} />
            </div>
        </InputContainer>
    )
}

