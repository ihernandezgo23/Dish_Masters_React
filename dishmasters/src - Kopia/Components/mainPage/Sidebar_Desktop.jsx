import React from 'react';
import { useTranslation } from 'react-i18next';

const Sidebar_Desktop = ({ setShowForm }) => {
  const { t } = useTranslation(); // Hook to access translation functions

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
              <span className="ms-1 d-none d-sm-inline">{t('home')}</span>
            </a>
          </li>

          {/* My Feed */}
          <li>
            <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
              <i className="fs-3 bi bi-fire"></i>
              <span className="ms-1 d-none d-sm-inline">{t('my_feed')} ▽</span>
            </a>
            <ul className="collapse nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
              <li>
                <a href="myFeed.html" target="_blank" className="nav-link px-0">
                  <span className="d-none d-sm-inline">{t('main_page')}</span>
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-0">
                  <span className="d-none d-sm-inline">{t('dishy_challenge')}</span>
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-0">
                  <span className="d-none d-sm-inline">{t('dishcuss')}</span>
                </a>
              </li>
            </ul>
          </li>

          {/* Dishylist */}
          <li>
            <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
              <i className="fs-3 bi bi-cloud-fog"></i>
              <span className="ms-1 d-none d-sm-inline">{t('dishylist')} ▽</span>
            </a>
            <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
              <li>
                <a href="#" className="nav-link px-0">
                  <span className="d-none d-sm-inline">{t('taste_trends')}</span>
                </a>
              </li>
              <li className="w-100">
                <a href="seasonRecipes.html" className="nav-link px-0">
                  <span className="d-none d-sm-inline">{t('season_recipes')}</span>
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-0">
                  <span className="d-none d-sm-inline">{t('food_spots')}</span>
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-0">
                  <span className="d-none d-sm-inline">{t('world_dishes')}</span>
                </a>
              </li>
            </ul>
          </li>

          {/* About DishMasters */}
          <li>
            <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
              <i className="fs-3 bi bi-info-circle"></i>
              <span className="ms-1 d-none d-sm-inline">{t('about_dishmasters')} ▽</span>
            </a>
            <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
              <li className="w-100">
                <a href="#" className="nav-link px-0">
                  <span className="d-none d-sm-inline">{t('about_us')}</span>
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
                  <span className="d-none d-sm-inline">{t('contact_us')}</span>
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-0">
                  <span className="d-none d-sm-inline">{t('faq')}</span>
                </a>
              </li>
            </ul>
          </li>

          {/* Sign In */}
          <li>
            <a href="#" className="nav-link px-0 align-middle">
              <i className="fs-3 bi bi-door-open-fill"></i>
              <span className="ms-1 d-none d-sm-inline">{t('sign_in')}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar_Desktop;