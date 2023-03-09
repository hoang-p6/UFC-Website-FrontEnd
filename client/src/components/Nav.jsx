import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Nav = ({ user, handleLogout, userDetails, checkToken }) => {
  let userOptions





  return user ? (
    <nav>
      <h3>Welcome {userDetails}!</h3>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/" onClick={handleLogout}>
        Log Out
      </NavLink>
      {user.id === 3 &&
        <NavLink to="/admincontrols">Admin Controls</NavLink>}
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
