import React from 'react';


const Header = () => (
<div className="blue-bar mb-5 w-100 rounded">
    <div className="container d-flex align-items-center justify-content-center text-center flex-column">
        <h2>Zubiri's <span>#1 Trusted Recipe Site</span> since 1998</h2>
        <div className="metrics d-none m-3 d-md-flex">
            <div className="metric-item me-3">
            <i className="green-dot">●</i> 113K Original Recipes
            </div>
            <div className="metric-item me-3">
            <i className="red-dot">●</i> 6.9M+ Ratings & Reviews
            </div>
            <div className="metric-item">
            <i className="gold-dot">●</i> 60M Home Cooks
            </div>
        </div>
    </div>
</div>
);

export default Header;
