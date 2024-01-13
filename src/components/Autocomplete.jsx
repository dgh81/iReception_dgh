import '../styles/app.css';
import { useState, useEffect, useRef } from 'react';
import UserContext from "./UserContext";
import { useContext } from "react";

const AutoComplete = ({ userList }) => {

    const [userName, setUserName] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);

    const userNameList = userList.map((user) => {
        return user.displayName;
    });

    // useRef bruges til at referere til en node i DOM
    // Her er node vores DIV med classname autocomplete.
    // useRef bruges her kun til "click outside functionality"
    const autocompleteRef = useRef();

    const handleChange = event => {
        setUserName(event.target.value);
    };

    let suggestions = [''];
    if (userName.length >= 3) {
        suggestions = userNameList.filter(user => user.toLowerCase().includes(userName.toLowerCase()));
    }


    const userContext = useContext(UserContext);

    const handleSuggestionClick = (suggestion) => {
        setUserName(suggestion);
        setShowSuggestions(false);
        var result = userList.filter(user => {
            return user.displayName === suggestion
        });
        console.log('result: ' + result[0].mail);
        userContext.hostmail = result[0].mail;

    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            // Denne handler tester om der klikkes udenfor <div className='autocomplete'>,
            // ved at teste om click-eventets target ikke overlapper div'en.

            // console.log(event.target); // = det html element der er klikket på.
            // console.log(autocompleteRef.current); // <div className='autocomplete'>.

            //current er blot Reacts måde at ref til noden i "live" tilstand.
            if (!autocompleteRef.current.contains(event.target)) {
                setShowSuggestions(false);
            };
        };
        document.addEventListener('click', handleOutsideClick);
    }, []);

    return (
        <div className='autocomplete' ref={autocompleteRef}>
            <input
                id='selectedHost'
                value={userName}
                onChange={handleChange}
                placeholder='Search'
                // onFocus betyder onClick...
                onFocus={() => setShowSuggestions(true)}
            />
            {showSuggestions && (
                <ul className='suggestions'>
                    {suggestions.map(suggestion => (
                        // bruges til at identificere liste-elementerne på en unik måde.
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
