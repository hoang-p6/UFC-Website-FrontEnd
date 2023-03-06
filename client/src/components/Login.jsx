import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignInUser } from '../services/Auth'

const Login = ({ setUser }) => {
  let navigate = useNavigate()

  const initialState = { userName: '', password: '' }

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues(initialState)
    setUser(payload)
    navigate('/home')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">Username</label>
        <input
          onChange={handleChange}
          name="UserName"
          type="text"
          value={formValues.userName}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={handleChange}
          name="password"
          type="password"
          value={formValues.password}
          required
        />
        <button disabled={!formValues.userName || !formValues.password}>
          Log In
        </button>
      </form>
    </div>
  )
}

export default Login
