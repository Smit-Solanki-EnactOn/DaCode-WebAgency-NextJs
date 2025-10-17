import React from 'react'
import ButtonComponent from '../ButtonComponent';
import { FaSearch } from "react-icons/fa";
import './search-bar.scss';

const SearchBar = () => {
    return (
        <div className='searchbar'>
            <input type="text" placeholder="Search..." />
            <ButtonComponent role="button" variant="primary" leftIcon={<FaSearch />} customClass='search-btn' />
        </div>
    )
}

export default SearchBar