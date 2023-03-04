import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/">Register</NavLink>
      <NavLink to="/">Login</NavLink>
    </div>
  )
}

export default Nav
