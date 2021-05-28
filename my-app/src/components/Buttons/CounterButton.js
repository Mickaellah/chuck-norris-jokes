import React, {useContext} from 'react';
import {Context} from '../../context/context';

import MinusButton from '../../image/minus.svg';
import PlusButton from '../../image/plus.svg';

export default function CounterButton() {
    const {count, increaseTheCount, decreaseTheCount} = useContext(Context);
    return (
        <div>
            <button type="button" onClick={decreaseTheCount}>
                <img src={MinusButton} alt="Minus button"/>
            </button>
            <p>{count}</p>
            <button type="button" onClick={increaseTheCount}>
                <img src={PlusButton} alt="Plus button"/>
            </button>
        </div>
    )
}