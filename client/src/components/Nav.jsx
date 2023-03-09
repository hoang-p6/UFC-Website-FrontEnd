import { NavLink } from 'react-router-dom'

const Nav = ({ user, handleLogout }) => {
  let userOptions

  return user ? (
    <nav className='Nav-Bar'>
      <div className='Nav-Bar'>

      <h3>Welcome {user.userName}!</h3>
      </div>
       
      <NavLink className="Nav-Bar" to="/">Home</NavLink>
        
      <NavLink className="Nav-Bar" to="/" onClick={handleLogout}>
        Log Out
      </NavLink>
    </nav>
  ) : (
    <nav className='Nav-Bar'>
      <NavLink className="Nav-Bar" to="/">Home</NavLink>
      
      <NavLink className="Nav-Bar" to="/register">Register</NavLink>

      <NavLink className="Nav-Bar" to="/login">Login</NavLink>
    </nav>
  )
}

export default Nav
