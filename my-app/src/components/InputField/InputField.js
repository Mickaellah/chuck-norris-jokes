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
    
`;

export default function InputField({firstName, lastName, onChange}) {
    return (
        <InputContainer>
            <label>Inpersonate Chuck Norris</label>
            <div>
                <input type="text" name="names" value={`${firstName} ${lastName}`} onChange={(value) => onChange(value)} />
                {/* <input type="text" value={lastName} onChange={(value) => onChangeForLastName(value)} /> */}
            </div>
        </InputContainer>
    )
}

