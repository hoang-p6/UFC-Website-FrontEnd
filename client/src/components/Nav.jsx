import { NavLink } from 'react-router-dom'

const Nav = ({ user, handleLogout }) => {
  let userOptions

  return user ? (
    <nav>
      <h3>Welcome {user.userName}!</h3>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/" onClick={handleLogout}>
        Log Out
      </NavLink>
    </nav>
  ) : (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  )
}

export default Nav
