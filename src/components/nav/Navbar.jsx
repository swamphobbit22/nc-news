import { NavLink } from 'react-router-dom';
import { LogIn } from 'lucide-react'

const Navbar = () => {
  return (
    <nav id='navbar' className='nav'>
      <NavLink to="/" className={({ isActive}) => isActive ? 'active-link' : undefined}>Main</NavLink>
      <NavLink to="/topics" className={({ isActive}) => isActive ? 'active-link' : undefined}>Topics</NavLink>
      <NavLink to="/articles" className={({ isActive}) => isActive ? 'active-link' : undefined}>Articles</NavLink>
      {/* <NavLink to="/comments" className={({ isActive}) => isActive ? 'active-link' : undefined}>User Comments</NavLink> */}
      <NavLink to="/login" className={({ isActive}) => `${isActive ? 'active-link' : undefined} login-icon`}><LogIn /></NavLink>
    </nav>
  )
}

export default Navbar
