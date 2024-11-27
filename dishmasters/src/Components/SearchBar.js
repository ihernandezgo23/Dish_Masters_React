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
    <div class="container mt-5 d-flex flex-column justify-content-center align-items-center" id="main-heading">
        <h1 class="h5 h1-md">Discover <i class="text-white">DISHES</i> all around the World</h1>
    </div>
</div>
);

export default SearchBar;
