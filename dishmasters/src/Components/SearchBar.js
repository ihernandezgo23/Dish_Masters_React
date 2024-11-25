import React from 'react';

const SearchBar = () => (
<div className="container w-100 d-flex justify-content-center align-items-center flex-column" id="index-header">
    <p className="h5">Find your perfect dish...</p>
    <div className="input-group rounded w-50">
        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" />
        <button className="input-group-text border-0">
            <i className="bi bi-search"></i>
        </button>
    </div>
</div>
);

export default SearchBar;
