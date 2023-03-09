import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Nav = ({ user, handleLogout, userDetails, checkToken }) => {
  let userOptions





  return user ? (
    <nav className='Nav-Bar'>
      

      <h3>Welcome {userDetails}!</h3>
      <NavLink className='Nav-Bar' to="/">Home</NavLink>
      <NavLink className='Nav-Bar' to="/" onClick={handleLogout}>
        Log Out
      </NavLink>
      {user.id === 3 &&
        <NavLink to="/admincontrols">Admin Controls</NavLink>}
    </nav>
  ) : (
    <nav className='Nav-Bar'>
      <NavLink className='Nav-Bar' to="/">Home</NavLink>
      <NavLink className='Nav-Bar' to="/register">Register</NavLink>
      <NavLink className='Nav-Bar' to="/login">Login</NavLink>

    </nav>
  )
}
 

export default Nav
