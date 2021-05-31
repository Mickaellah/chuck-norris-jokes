import React, {useState, useEffect} from 'react';

const Context = React.createContext({});

function ContextProvider(props) {
    const [joke, setJoke] = useState({});
    const [count, setCount] = useState(0);
    const [firstName, setFirstName] = useState("Chuck");
    const [lastName, setLastName] = useState("Norris");
    const [name, setName] = useState('');
    const [isTyped, setIsTyped] = useState(true);

    const MainAPI = "http://api.icndb.com/jokes/random";
    const NameChangingAPI = `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`;
    const NumberAPI = `http://api.icndb.com/jokes/${count}`;


    const getRandomJoke = async () => {
        const response = await fetch(MainAPI);
        const data = await response.json();
        setJoke(data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFirstName(e.target.value);
        setLastName(e.target.value);
        setName(e.target.value);
        setIsTyped(isTyped);
    }

    const getOtherJokeFromOtherNames = async () => {
        const response = await fetch(NameChangingAPI);
        const data = await response.json();
        setJoke(data);
    }

    const getAJokeByNumber = () => new Promise((resolve, reject) => {
        fetch(NumberAPI)
            .then(response => response.json())
            .then(data => {
                resolve(JSON.stringify(data.value.joke));
            });
    }) 

    const increaseTheCount = () => {
        if (count < 100) {
            setCount(count + 1);
        }
    }

    const decreaseTheCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    useEffect(() => {
        getRandomJoke();
        getAJokeByNumber();
    }, []);

    return (
        <Context.Provider value={{
            joke,
            setJoke, 
            count, 
            increaseTheCount, 
            decreaseTheCount, 
            isTyped, 
            setIsTyped, 
            firstName, 
            lastName, 
            name, 
            handleSubmit,
            getOtherJokeFromOtherNames,
            getAJokeByNumber,
        }}>
            {props.children}
        </Context.Provider>
    )
};

export {ContextProvider, Context};