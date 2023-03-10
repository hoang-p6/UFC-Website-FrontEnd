import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/Nav.css'

const Nav = ({ user, handleLogout, checkToken }) => {
  let userOptions

  // const [userDetails, setUserDetails] = useState({})

  // const getUserName = async () => {
  //   const userId = user.id

  //   const userStuff = await axios.get(`http://localhost:3001/auth/${userId}/details`)
  //   setUserDetails(userStuff)

  // }
  // console.log('HERE')
  // console.log(userDetails)

  // useEffect(() => {
  //   getUserName()
  // }, [user])

  return user ? (
    <nav className="Nav-Bar">
      <NavLink to="/" className="Nav-Bar" id="home">
        Home
      </NavLink>
      <NavLink to="/" className="Nav-Bar" id="title">
        UFC HUB
      </NavLink>
      <NavLink to="/" onClick={handleLogout} className="Nav-Bar" id="logout">
        Log Out
      </NavLink>
      {user.id === 1 && (
        <NavLink to="/admincontrols" className="Nav-Bar" id="admin">
          Admin Controls
        </NavLink>
      )}
      {/* <h3>Welcome {userDetails.data.userName}!</h3> */}
    </nav>
  ) : (
    <nav className="Nav-Bar">
      <NavLink to="/" className="Nav-Bar" id="home">
        Home
      </NavLink>
      <NavLink to="/" className="Nav-Bar" id="title">
        UFC HUB
      </NavLink>
      <NavLink to="/register" className="Nav-Bar" id="register">
        Register
      </NavLink>
      <NavLink to="/login" className="Nav-Bar" id="login">
        Login
      </NavLink>
    </nav>
  )
}

export default Nav
