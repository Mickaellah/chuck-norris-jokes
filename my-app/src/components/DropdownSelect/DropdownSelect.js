import React, {useContext} from 'react';

import {Context} from '../../context/context';

export default function DropdownSelect() {
    const {categories, setJoke} = useContext(Context);

    const NerdyJoke = "http://api.icndb.com/jokes/random?limitTo=[nerdy]";
    const ExplixitJoke = "http://api.icndb.com/jokes/random?limitTo=[explicit]";

    const selectAGategory = async (e) => {
        console.log(e.currentTarget.value);
        if (e.currentTarget.value === "nerdy") {
             const response = await fetch(NerdyJoke);
             const data = await response.json();
            //  setJoke(data);
            console.log(data);
        } else if (e.currentTarget.value === "explicit") {
            const res = await fetch(ExplixitJoke);
            const result = await res.json();
            // setJoke(result);
            console.log(result);
        }
    }
    return (
        <form>
            <select name="categories" onChange={(e) => selectAGategory(e)}>
                {categories.map((item, index) => {
                    return (
                        <option key={index} value={item}>{item}</option>
                    )
                })}
            </select>
        </form>
    )
}