import React from 'react';
import searchImg from '../assets/images/search.svg';

const Search = ({
    searchTerm,
    setSearchTerm
}) => {
    // const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className='search'>
            <div>
                <img src={searchImg} alt="search" />
                <input
                    type="text"
                    placeholder='Search through thousands of movies'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
    )
}

export default Search;