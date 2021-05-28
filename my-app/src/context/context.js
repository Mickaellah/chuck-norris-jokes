import React, {useState, useEffect} from 'react';

const Context = React.createContext({});

const API = "http://api.icndb.com/jokes/random";

function ContextProvider(props) {
    const [joke, setJoke] = useState({});
    const getRandomJoke = async () => {
        const response = await fetch(API);
        const data = await response.json();
        setJoke(data);
    }

    useEffect(() => {
        getRandomJoke();
    }, []);
    return (
        <Context.Provider value={{joke,setJoke}}>
            {props.children}
        </Context.Provider>
    )
};

export {ContextProvider, Context};