import React, {useState} from 'react';
import './Search.css';
import {getDefinition} from '../../actions';
import {connect} from 'react-redux';

const Search = (props) => {
    const [word, setWord] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        props.getDefinition(word);
    }

    const updateWord = (event) => {
        setWord(event.target.value);
    }

    return (
        <div>
            <h1>Search for a word in the English dictionary</h1>
            <form onSubmit={handleSearch} className="search-bar">
                <button className="fas fa-search"></button>
                <input 
                    type="search"
                    name="search"
                    placeholder="What word do you want to look up?"
                    onChange={updateWord}
                    value={word}
                />
                <button className="submit-button">Submit</button>
            </form>
        </div>
    );
}

export default connect(() => { return {} }, {getDefinition})(Search);