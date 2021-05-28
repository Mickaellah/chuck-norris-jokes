import React from 'react';

export default function Buttons({text, type, onClick}) {
    return (
        <div>
            <button type={type} onClick={onClick}>
                {text}
            </button>
        </div>
    )
}