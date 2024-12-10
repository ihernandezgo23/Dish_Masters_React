import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation(); // Extraemos i18n y t desde useTranslation

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="blue-bar mb-5 w-100 rounded position-relative">
      <div className="container d-flex align-items-center justify-content-center text-center flex-column">
        <h2>{t("zubiri")} <span>{t("span")}</span> {t("since")}</h2>
        <div className="metrics d-none m-3 d-md-flex">
          <div className="metric-item me-3">
            <i className="green-dot">●</i> {t('original_recipes')}
          </div>
          <div className="metric-item me-3">
            <i className="red-dot">●</i> {t('ratings_reviews')}
          </div>
          <div className="metric-item">
            <i className="gold-dot">●</i> {t('home_cooks')}
          </div>
        </div>

        {/* Dropdown para seleccionar el idioma */}
        <div className="position-absolute top-0 end-0 p-3">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              {t('language')}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a className="dropdown-item" href="#" onClick={() => handleLanguageChange('en')}>English</a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={() => handleLanguageChange('es')}>Euskara</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;