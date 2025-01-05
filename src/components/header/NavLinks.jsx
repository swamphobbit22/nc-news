import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LogIn, LogOut } from 'lucide-react'
import { UserContext } from '../../context/UserContext'

const NavLinks = () => {
  const { user, logout } = useContext(UserContext);  

  return (
    <nav className='navlinks'>
      <NavLink to="/" className={({ isActive}) => isActive ? 'active-link' : undefined}>Main</NavLink>
      <NavLink to="/topics" className={({ isActive}) => isActive ? 'active-link' : undefined}>Topics</NavLink>
      <NavLink to="/articles" className={({ isActive}) => isActive ? 'active-link' : undefined}>Articles</NavLink>
      {/* <NavLink to="/user-comments" className={({ isActive}) => isActive ? 'active-link' : undefined}>User Comments</NavLink> */}
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
      </nav>
  )
}

export default NavLinks;

// id='navbar' className='nav'