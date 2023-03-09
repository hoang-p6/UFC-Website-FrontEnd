import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Nav = ({ user, handleLogout, checkToken }) => {
  let userOptions

  const [userDetails, setUserDetails] = useState({})

  const getUserName = async () => {
    const userId = user.id

    const userStuff = await axios.get(
      `http://localhost:3001/auth/${userId}/details`
    )
    setUserDetails(userStuff)
  }

  useEffect(() => {
    getUserName()
  }, [user])

  return user ? (
    <nav className="Nav-Bar">
      <h3>Welcome {userDetails}!</h3>
      <NavLink className="Nav-Bar" to="/">
        Home
      </NavLink>
      <NavLink className="Nav-Bar" to="/" onClick={handleLogout}>
        Log Out
      </NavLink>
      {user.id === 3 && <NavLink to="/admincontrols">Admin Controls</NavLink>}
      <h3>Welcome {userDetails.data.userName}!</h3>
    </nav>
  ) : (
    <nav className="Nav-Bar">
      <NavLink className="Nav-Bar" to="/">
        Home
      </NavLink>
      <NavLink className="Nav-Bar" to="/register">
        Register
      </NavLink>
      <NavLink className="Nav-Bar" to="/login">
        Login
      </NavLink>
    </nav>
  )
}

export default Nav
