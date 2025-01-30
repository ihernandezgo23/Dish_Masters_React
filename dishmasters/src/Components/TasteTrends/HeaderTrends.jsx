import React from 'react';

function HeaderAbout({}) {
    return (
        <div className="container mt-5 d-flex flex-column justify-content-center align-items-center" id="main-heading">
            <h1 className="h5 h1-md">
                Taste<i className="text-white"> TRENDS </i>
            </h1>
            <p className="lead text-muted pt-4">Discover the most trendy recipies</p>
        </div>
    );
}

export default HeaderAbout;