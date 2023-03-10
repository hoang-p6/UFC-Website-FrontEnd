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
      <div className='links'>
        <NavLink to="/" className="Nav-Bar link">
          Home
        </NavLink>
        <NavLink to="/" onClick={handleLogout} className="Nav-Bar link">
          Log Out
        </NavLink>
      </div>
      <div>
        <h1>UFC HUB</h1>
      </div>
      <div>
        {user.id === 1 && (
          <NavLink to="/admincontrols" className="Nav-Bar link">
            Admin Controls
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
