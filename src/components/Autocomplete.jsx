import '../styles/app.css';
import { useState, useEffect, useRef } from 'react';
import UserContext from "./UserContext";
import { useContext } from "react";

const AutoComplete = ({ response }) => {

    const [value, setValue] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);

    // console.log('response in Autocomplete:' + JSON.stringify(response));
    // console.log('response in Autocomplete:' + JSON.stringify(response.response));

    const users = response.map((user) => {
        return user.displayName;
    });


    let suggestions = [''];
    if (value.length >= 3) {
        suggestions = users.filter(user => user.toLowerCase().includes(value.toLowerCase()));
    }
    // console.log('suggestions:' + suggestions);
    const autocompleteRef = useRef();

    const handleChange = event => {
        setValue(event.target.value);
    };

    const globalUser = useContext(UserContext);

    const handleSuggestionClick = (suggestion) => {
        setValue(suggestion);
        setShowSuggestions(false);

        var result = response.filter(obj => {
            return obj.displayName === suggestion
        });
        console.log('result:' + result[0].mail);
        globalUser.hostmail = result[0].mail;

    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (autocompleteRef.current && !autocompleteRef.current.contains(event.target)) {
                // console.log('running click outside');
                setShowSuggestions(false);
            };
        };
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick)
        };

    }, []);

    return (
        <div className='autocomplete' ref={autocompleteRef}>
            <input
                id='selectedHost'
                value={value}
                onChange={handleChange}
                placeholder='Search'
                onFocus={() => setShowSuggestions(true)}
            />
            {showSuggestions && (
                <ul className='suggestions'>
                    {suggestions.map(suggestion => (
                        <li onClick={() => handleSuggestionClick(suggestion)} key={suggestion}>
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
};

export default AutoComplete;
