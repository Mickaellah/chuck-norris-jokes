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

    const MainAPI = "https://api.icndb.com/jokes/random";
    const NameChangingAPI = `https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`;
    const CategoryJoke = `https://api.icndb.com/jokes/random?limitTo=[${category}]`;
    const NumberAPI = `https://api.icndb.com/jokes/${count}`;


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
        const response = await fetch(CategoryJoke);
        const data = await response.json();
        setJoke(data);
    }

    const fetchARandomJoke = (e) => {
        e.preventDefault();
        if (isTyped === true) {
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
        setCount(count + 1);
    }

    const decreaseTheCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    useEffect(() => {
        getRandomJoke();
        getAJokeByNumber();
        // eslint-disable-next-line react-hooks/exhaustive-deps
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