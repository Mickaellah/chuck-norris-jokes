import React from 'react';
import style from 'styled-components';

import RandomJoke from '../components/RandomJoke/RandomJoke';
import ButtonsAndTextFields from '../components/ButtonsAndTextFields/ButtonsAndTextFields';
const Container = style.div`
    max-width: 555px;
    margin-inline-start: auto;
    margin-inline-end: auto;
    background-color: #ffffff;
    border-radius: 20px;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
    margin-block: 98px;
`;

export default function HomePage() {
    return (
        <Container>
            <RandomJoke />
            <ButtonsAndTextFields />
        </Container>

    )
}