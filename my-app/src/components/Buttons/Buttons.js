import React from 'react';
import style from 'styled-components';

const Container = style.div`
    button {
        width: 100%;
        background-color: #34394f;
        color: #ffffff;
        padding-block: 20px;
        margin-block-start: 32px;
        font-size: 16px;
        line-heigth: 26px;
        border-radius: 6px;
        border: none;
    }
`;

export default function Buttons({text, type, onClick, click}) {
    return (
        <Container>
            <button type={type} onClick={onClick}>
                {text}
            </button>
        </Container>
    )
}