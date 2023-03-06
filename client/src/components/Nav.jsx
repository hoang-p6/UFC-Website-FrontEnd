import { NavLink } from 'react-router-dom'

const Nav = ({ user, handleLogout }) => {
  let userOptions
  if (user) {
    ;<nav>
      <h3>Welcome!</h3>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/" onClick={handleLogout}>
        Log Out
      </NavLink>
    </nav>
  }
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  )
}

export default Nav
