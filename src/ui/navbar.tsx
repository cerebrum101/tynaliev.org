import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLang = () => {
    setIsLangOpen(!isLangOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        </div>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('nav.home')}</Link>
          </li>
          <span className="nav-separator">|</span>
          <li className="nav-item">
            <Link to="/biography" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('nav.biography')}</Link>
          </li>
          <span className="nav-separator">|</span>
          <li className="nav-item">
            <Link to="/collections" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('nav.collections')}</Link>
          </li>
          <span className="nav-separator">|</span>
          <li className="nav-item">
            <Link to="/listen" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('nav.listen')}</Link>
          </li>
          <span className="nav-separator">|</span>
          <li className="nav-item">
            <Link to="/contacts" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t('nav.contacts')}</Link>
          </li>
        </ul>

        <div className="language-container">
          <div className="language-icon" onClick={toggleLang}>
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.9 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.12c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.12z"/>
            </svg>
          </div>
          <div className={`language-dropdown ${isLangOpen ? 'active' : ''}`}>
            <button onClick={() => changeLanguage('kg')} className="lang-btn">Кыргызча</button>
            <button onClick={() => changeLanguage('ru')} className="lang-btn">Русский</button>
            <button onClick={() => changeLanguage('en')} className="lang-btn">English</button>
            <button onClick={() => changeLanguage('kz')} className="lang-btn">Қазақша</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
