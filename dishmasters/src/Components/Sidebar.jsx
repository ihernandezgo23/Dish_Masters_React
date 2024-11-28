import React from 'react';

const Sidebar_Desktop = ({ setShowForm }) => {
return (
<div className="offcanvas offcanvas-start bg-white text-white w-75" id="offcanvasMenu">
    <div className="offcanvas-header">
        <button
            type="button"
            className="btn-close btn-close-dark"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
        ></button>
    </div>
    <div className="offcanvas-body">
        <div className="d-flex flex-column align-items-start px-3 pt-2">
            {/* Logo Section */}
            <a
            href="/"
            className="d-flex align-items-center justify-content-center w-100 pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
            <img
                src="img/DishMasterLogo_2_-removebg-preview.png"
                alt="DishMaster Logo"
                className="img-fluid mb-3"
                style={{ maxWidth: '120px' }}
            />
            </a>

            {/* Navigation Menu */}
            <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start align-items-sm-start"
            id="menu"
            >
            {/* Home Link */}
            <li className="nav-item">
                <a href="#" className="nav-link align-middle px-0">
                <i className="fs-1 bi-house"></i>
                <span className="ms-1 d-sm-inline">Home</span>
                </a>
            </li>

            {/* My Feed */}
            <li>
                <a
                href="#submenu1"
                data-bs-toggle="collapse"
                className="nav-link px-0 align-middle"
                >
                <i className="fs-1 bi bi-fire"></i>
                <span className="ms-1 d-sm-inline">My feed ▽</span>
                </a>
                <ul
                className="collapse nav flex-column ms-1"
                id="submenu1"
                data-bs-parent="#menu"
                >
                <li>
                    <a
                    href="myFeed.html"
                    target="_blank"
                    className="nav-link px-0"
                    >
                    Main Page
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link px-0">
                    Dishy Challenge
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link px-0">
                    DishCuss
                    </a>
                </li>
                </ul>
            </li>

            {/* DishyList */}
            <li>
                <a
                href="#submenu2"
                data-bs-toggle="collapse"
                className="nav-link px-0 align-middle"
                >
                <i className="fs-1 bi bi-cloud-fog"></i>
                <span className="ms-1 d-sm-inline">Dishylist ▽</span>
                </a>
                <ul
                className="collapse nav flex-column ms-1"
                id="submenu2"
                data-bs-parent="#menu"
                >
                <li>
                    <a href="#" className="nav-link px-0">
                    Taste Trends
                    </a>
                </li>
                <li>
                    <a href="seasonRecipes.html" className="nav-link px-0">
                    Season Recipes
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link px-0">
                    Food Spots
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link px-0">
                    World Dishes
                    </a>
                </li>
                </ul>
            </li>

            {/* About DishMasters */}
            <li>
                <a
                href="#submenu3"
                data-bs-toggle="collapse"
                className="nav-link px-0 align-middle"
                >
                <i className="fs-1 bi bi-info-circle"></i>
                <span className="ms-1 d-sm-inline">About DishMasters ▽</span>
                </a>
                <ul
                className="collapse nav flex-column ms-1"
                id="submenu3"
                data-bs-parent="#menu"
                >
                <li>
                    <a href="#" className="nav-link px-0">
                    About Us
                    </a>
                </li>
                <li>
                <a
                    href="#"
                    className="nav-link px-0"
                    onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    setShowForm(true); // Show the form
                    }}
                > 
                <span className="d-sm-inline">Contact Us</span>
                </a>
                </li>
                <li>
                    <a href="#" className="nav-link px-0">
                    FAQ
                    </a>
                </li>
                </ul>
            </li>

            {/* Sign In */}
            <li>
                <a href="#" className="nav-link px-0 align-middle">
                <i className="fs-1 bi bi-door-open-fill"></i>
                <span className="ms-1 d-sm-inline">Sign In</span>
                </a>
            </li>
            </ul>
        </div>
    </div>
</div>

);
};

export default Sidebar_Desktop;
