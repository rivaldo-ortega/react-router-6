import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavLink
        to='/'
        style={({ isActive }) => {
          return { color: isActive ? 'red' : 'black' };
        }}
      >
        Home
      </NavLink>
      <NavLink
        to='/about'
        style={({ isActive }) => {
          return { color: isActive ? 'red' : 'black' };
        }}
      >
        About
      </NavLink>
      <NavLink
        to='/products'
        style={({ isActive }) => {
          return { color: isActive ? 'red' : 'black' };
        }}
      >
        Products
      </NavLink>
      <NavLink
        to='/login'
        style={({ isActive }) => {
          return { color: isActive ? 'red' : 'black' };
        }}
      >
        Login
      </NavLink>
    </nav>
  );
};

export default Navbar;
