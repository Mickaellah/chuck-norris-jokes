import React, {useState, useEffect} from 'react';

const Context = React.createContext({});

function ContextProvider(props) {
    const [joke, setJoke] = useState({});
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Chuck Norris');
    const [isTyped, setIsTyped] = useState(true);
    const [category, setCategory] = useState('category');

    const firstName = String(name).split(' ').slice(0, 1);
    const lastName = String(name).split(' ').slice(1);

    const MainAPI = "http://api.icndb.com/jokes/random";
    const NameChangingAPI = `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`;
    const NerdyJoke = "http://api.icndb.com/jokes/random?limitTo=[nerdy]";
    const ExplicitJoke = "http://api.icndb.com/jokes/random?limitTo=[explicit]";
    const NumberAPI = `http://api.icndb.com/jokes/${count}`;


    const getRandomJoke = async () => {
        const response = await fetch(MainAPI);
        const data = await response.json();
        setJoke(data);
    }

    const handleChange = (e) => {
        setName(e.target.value);
        setIsTyped(isTyped);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
    }

    const handleSelect = (e) => {
        setCategory(e.target.value);
        setIsTyped(!isTyped);
    }

    const getOtherJokeFromOtherNames = async () => {
        const response = await fetch(NameChangingAPI);
        const data = await response.json();
        setJoke(data);
    }

    const selectAGategory = async (e) => {
        const value = document.getElementsByTagName('select');
        if (value[0].value === "nerdy") {
            const response = await fetch(NerdyJoke);
            const data = await response.json();
            setJoke(data);
        } else if (value[0].value === "explicit") {
            const res = await fetch(ExplicitJoke);
            const result = await res.json();
            setJoke(result);
        } else if (value[0].value === "categories") {
            setJoke(joke);
        }
    }

    const fetchARandomJoke = (e) => {
        e.preventDefault();
        if (isTyped === isTyped) {
            getOtherJokeFromOtherNames();
        } else {
            selectAGategory();
        }
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
            name, 
            setName,
            handleChange,
            handleSubmit,
            category,
            handleSelect,
            selectAGategory,
            fetchARandomJoke,
            getOtherJokeFromOtherNames,
            getAJokeByNumber,
        }}>
            {props.children}
        </Context.Provider>
    )
};

export {ContextProvider, Context};