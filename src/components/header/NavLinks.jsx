import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LogIn, LogOut } from 'lucide-react'
import { UserContext } from '../../context/UserContext'

const NavLinks = () => {
  const { user, logout } = useContext(UserContext);  
  // console.log('NavLinks rendered');

  return (
    <nav className='navlinks'>
      <NavLink to="/" className={({ isActive}) => isActive ? 'active-link' : 'nav-link-base'}>Main</NavLink>
      <NavLink to="/topics" className={({ isActive}) => isActive ? 'active-link' : 'nav-link-base'}>Topics</NavLink>
      <NavLink to="/articles" className={({ isActive}) => isActive ? 'active-link' : 'nav-link-base'}>Articles</NavLink>
      { user ? (
        <>
        <p>{user.username} is logged in</p>
      <NavLink 
          to='/' 
          data-testid="logout-icon"
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
      </nav>
  )

  
}

export default NavLinks;
