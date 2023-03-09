import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Nav = ({ user, handleLogout, checkToken }) => {
  let userOptions

  const [userDetails, setUserDetails] = useState({})

  const getUserName = async () => {
    const userId = user.id

    const userStuff = await axios.get(`http://localhost:3001/auth/${userId}/details`)
    setUserDetails(userStuff)


  }
  console.log('HERE')
  console.log(userDetails)

  useEffect(() => {
    getUserName()
  }, [user])

  return user ? (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/" onClick={handleLogout}>
        Log Out
      </NavLink>
      {user.id === 1 &&
        <NavLink to="/admincontrols">Admin Controls</NavLink>}
      <h3>Welcome {userDetails.data.userName}!</h3>
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
