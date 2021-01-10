import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchfield, searchChange}) =>{
    return (
        <div id="search">
            <input 
            className = 'search'
            type="search" 
            placeholder="search robots"
            onChange={searchChange}
        />
        </div>
    );
}
export default SearchBox;