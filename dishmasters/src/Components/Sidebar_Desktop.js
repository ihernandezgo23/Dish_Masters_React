import React from 'react';

const Sidebar = ({ setShowForm }) => {
return (
    <div className="col-auto col-md-3 col-xl-2 d-none d-md-block greyscale-2" id="canvasMenu">
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 position-fixed" id="sidebar-menu">
            {/* Logo Section */}
            <a
            href="/"
            className="d-flex align-items-center justify-content-center w-100 pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
            <img
                src="img/DishMasterLogo_2_-removebg-preview.png"
                alt="DishMaster Logo"
                className="img-fluid mb-3"
                style={{ maxWidth: '150px' }}
            />
            </a>

            {/* Menu */}
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                {/* Home Link */}
                <li className="nav-item">
                    <a href="#" className="nav-link align-middle px-0">
                        <i className="fs-3 bi-house"></i>
                        <span className="ms-1 d-none d-sm-inline">Home</span>
                    </a>
                </li>

                {/* My Feed */}
                <li>
                    <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                        <i className="fs-3 bi bi-fire"></i>
                        <span className="ms-1 d-none d-sm-inline">My feed ▽</span>
                    </a>
                    <ul className="collapse nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                        <li>
                            <a href="myFeed.html" target="_blank" className="nav-link px-0">
                            <span className="d-none d-sm-inline">Main Page</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-0">
                            <span className="d-none d-sm-inline">Dishy Challenge</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-0">
                            <span className="d-none d-sm-inline">DishCuss</span>
                            </a>
                        </li>
                    </ul>
                </li>

                {/* Dishylist */}
                <li>
                    <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                        <i className="fs-3 bi bi-cloud-fog"></i>
                        <span className="ms-1 d-none d-sm-inline">Dishylist ▽</span>
                    </a>
                    <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                        <li>
                            <a href="#" className="nav-link px-0">
                            <span className="d-none d-sm-inline">Taste Trends</span>
                            </a>
                        </li>
                        <li className="w-100">
                            <a href="seasonRecipes.html" className="nav-link px-0">
                            <span className="d-none d-sm-inline">Season Recipes</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-0">
                            <span className="d-none d-sm-inline">Food Spots</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-0">
                            <span className="d-none d-sm-inline">World Dishes</span>
                            </a>
                        </li>
                    </ul>
                </li>

                {/* About DishMasters */}
                <li>
                    <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                        <i className="fs-3 bi bi-info-circle"></i>
                        <span className="ms-1 d-none d-sm-inline">About DishMasters ▽</span>
                    </a>
                    <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                        <li className="w-100">
                        <a href="#" className="nav-link px-0">
                            <span className="d-none d-sm-inline">About Us</span>
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
                            <span className="d-none d-sm-inline">Contact Us</span>
                        </a>
                        </li>
                        <li>
                        <a href="#" className="nav-link px-0">
                            <span className="d-none d-sm-inline">FAQ</span>
                        </a>
                        </li>
                    </ul>
                </li>

                {/* Sign In */}
                <li>
                    <a href="#" className="nav-link px-0 align-middle">
                    <i className="fs-3 bi bi-door-open-fill"></i>
                    <span className="ms-1 d-none d-sm-inline">Sign In</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
);
};

export default Sidebar;
