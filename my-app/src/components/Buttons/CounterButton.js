import React, {useContext} from 'react';
import style from 'styled-components';
import {Context} from '../../context/context';

import MinusButton from '../../image/minus.svg';
import PlusButton from '../../image/plus.svg';

const Button = style.button`
    padding: 0;
    padding-inline: 16px;
    padding-block-start: 16px;
    padding-block-end: 15px;
    display: flex;
    border-radius: 6px;
    border: none;
    background-color: #f5f6f8;
    color: #34394f;

    p {
        padding-inline: 28px;
        font-size: 18px;
        line-height: 26px;
        margin: 0;
    }
`;

export default function CounterButton() {
    const {count, increaseTheCount, decreaseTheCount} = useContext(Context);
    return (
        <div>
            <Button type="button">
                <img src={MinusButton} alt="Minus button" onClick={decreaseTheCount}/>
            {/* </button> */}
                <p>{count}</p>
            {/* <button type="button" onClick={increaseTheCount}> */}
                <img src={PlusButton} alt="Plus button" onClick={increaseTheCount}/>
            </Button>
        </div>
    )
}