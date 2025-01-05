import React, { useContext} from 'react';
import { Menu, X, LogIn, LogOut } from 'lucide-react';
import { UserContext } from '../../context/UserContext'
import { NavLink } from 'react-router-dom';

const MobileNav = ({ isOpen, setIsOpen }) => {
    const { user, logout } = useContext(UserContext);  

  return (
    <div className="hide-menu">
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="menu-btn"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="btn-open" />
        ) : (
          <Menu className="btn-open" />
        )}
      </button>

      {/* Mobile menu overlay */}
      <div
        className={`overlay ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        className={`mobile-menu ${isOpen ? 'open' : ''}`}
      >
        <nav className="mobile-nav">
          <a
            href="/"
            className="mobile-nav-link"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="/topics"
            className="mobile-nav-link"
            onClick={() => setIsOpen(false)}
          >
            Topics
          </a>
          <a
            href="/articles"
            className="mobile-nav-link"
            onClick={() => setIsOpen(false)}
          >
            Articles
          </a>

            <hr />

          { user ? (
                  <>
                  <span>{user.username} is logged in</span>
                <NavLink 
                    to='/' 
                    onClick={logout} 
                    className='logout-icon'
                  >
                    <LogOut />
                  </NavLink>
                  </> 
                ) : ( 
                <NavLink 
                to="/login" 
                className={({ isActive}) => `${isActive ? 'active-link' : undefined} login-icon`}
                >
                  <LogIn />
                </NavLink>
                )}

                <hr />
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;