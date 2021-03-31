import React, {useEffect} from 'react';
import './Search.css';

const Search = () => {
    const handleSearch = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <h1>Search for a word in the English dictionary</h1>
            <form onSubmit={handleSearch} className="search-bar">
                <button class="fas fa-search"></button>
                <input 
                    type="search"
                    name="search"
                    placeholder="What word do you want to look up?"
                />
                <button className="submit-button">Submit</button>
            </form>
        </div>
    );
}

export default Search;