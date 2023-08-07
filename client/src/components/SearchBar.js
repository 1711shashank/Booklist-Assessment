import React from 'react';

const SearchBar = ({ searchText, setSearchText }) => {
    return (
        <div className='searchBar'>
            <input
                type='text'
                placeholder='Search...'
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;
