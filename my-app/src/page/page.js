import React from 'react';
import style from 'styled-components';

import RandomJoke from '../components/RandomJoke/RandomJoke';
import ButtonsAndTextFields from '../components/ButtonsAndTextFields/ButtonsAndTextFields';
const Container = style.div`
    position: relative;
`;

export default function Page() {
    return (
        <Container>
            <RandomJoke />
            <ButtonsAndTextFields />
        </Container>

    )
}