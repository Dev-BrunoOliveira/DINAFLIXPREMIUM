import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const { activeProfile, setActiveProfile } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    setActiveProfile(null);
    navigate('/profiles');
  };

  return (
    <header className={`navbar ${isScrolled ? 'black' : 'transparent'}`}>
      <div className="navbar-left">
        <div 
          className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <img
          src="/IMG/LOGO/D_Prancheta 1.png"
          alt="Logo Dinaflix"
          className="logo"
        />
        <nav className={isMenuOpen ? 'active' : ''}>
        <ul className="nav-list">
          <li><Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Início</Link></li>
          <li><Link to="/series" onClick={() => setIsMenuOpen(false)}>Séries</Link></li>
          <li><Link to="/filmes" onClick={() => setIsMenuOpen(false)}>Filmes</Link></li>
          <li><Link to="/minhalista" onClick={() => setIsMenuOpen(false)}>Minha Lista</Link></li>
        </ul>
      </nav>
      </div>
      
      <div className="right-menu">
        <div className="search-box">
          <button className="search-btn">
            <svg viewBox="0 0 24 24" fill="white" width="24px" height="24px">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </button>
          <input type="text" className="search-input" placeholder="Títulos, atores e gêneros" />
        </div>

        <div className="user-menu" 
             onMouseEnter={() => setIsDropdownOpen(true)}
             onMouseLeave={() => setIsDropdownOpen(false)}>
          <img 
            src={activeProfile?.avatar || "/IMG/LOGO/LOGOUSUARIO.png"} 
            alt="User Icon" 
            className="user-icon" 
          />
          <div className={`user-dropdown ${isDropdownOpen ? 'active' : ''}`}>
            <div className="dropdown-item" onClick={handleLogout}>
              Trocar de Perfil
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
