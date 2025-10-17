import React from 'react'
import './section-title.scss'
import SearchBar from '../SearchBar/SearchBar';

interface SectionTitleProps {
    title?: string;
    description?: string;
    showSearchBar?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, description, showSearchBar }) => {
    return (
        <div className="section-head">
            <h2 className="section-title">{title}</h2>
            <p className="section-description">{description}</p>
            {showSearchBar && <SearchBar />}
        </div>
    )
}

export default SectionTitle