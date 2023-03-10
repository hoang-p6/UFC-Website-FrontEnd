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
      <div className="links">
        <NavLink to="/" className="Nav-Bar link">
          HOME
        </NavLink>
        <NavLink to="/" onClick={handleLogout} className="Nav-Bar link">
          LOG OUT
        </NavLink>
      </div>
      <div className="ufc-hub">
        <h1 className="title">UFC</h1>
        <h1 className="hub">HUB</h1>
      </div>
      <div>
        {user.id === 1 && (
          <NavLink to="/admincontrols" className="Nav-Bar link">
            <span className="material-symbols-outlined" id="settings-icon">
              settings_input_component
            </span>{' '}
            <h1 className="admin">ADMIN</h1>
          </NavLink>
        )}
        {user.id != 1 && (
          <NavLink to="/about" className="Nav-Bar link">
            About
          </NavLink>
        )}
      </div>
    </nav>
  ) : (
    <nav className="Nav-Bar">
      <NavLink to="/" className="Nav-Bar link">
        Home
      </NavLink>
      <NavLink to="/register" className="Nav-Bar link">
        Register
      </NavLink>
      <NavLink to="/login" className="Nav-Bar  link">
        Login
      </NavLink>
    </nav>
  )
}

export default Nav
