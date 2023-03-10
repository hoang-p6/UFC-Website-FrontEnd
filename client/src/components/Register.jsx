import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'
import '../styles/Forms.css'

const Register = () => {
  let navigate = useNavigate()
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    password: '',
    confirmPassword: ''
  }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      userName: formValues.userName,
      password: formValues.password
    })
    setFormValues(initialState)
    navigate('/login')
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="register-container">
        <div className="register-name">
          <label htmlFor="firstName" className="firstName-label">
            First Name
          </label>
          <input
            onChange={handleChange}
            name="firstName"
            type="text"
            value={formValues.firstName}
            required
            className="firstName-input"
          />
          <label htmlFor="lastName" className="lastName-label">
            Last Name
          </label>
          <input
            onChange={handleChange}
            name="lastName"
            type="text"
            value={formValues.lastName}
            required
            className="lastName-input"
          />
        </div>

        <label htmlFor="email" className="email-label">
          Email
        </label>
        <input
          onChange={handleChange}
          name="email"
          type="email"
          value={formValues.email}
          required
          className="email-input"
        />
        <label htmlFor="userName" className="userName-label">
          Username
        </label>
        <input
          onChange={handleChange}
          name="userName"
          type="text"
          value={formValues.userName}
          required
          className="userName-input"
        />
        <label htmlFor="password" className="password-label">
          Password
        </label>
        <input
          onChange={handleChange}
          name="password"
          type="password"
          value={formValues.password}
          required
          className="password-input"
        />
        <label htmlFor="confirmPassword" className="confirm-label">
          Confirm Password
        </label>
        <input
          onChange={handleChange}
          name="confirmPassword"
          type="password"
          value={formValues.confirmPassword}
          required
          className="confirm-input"
        />

        <button
          disabled={
            !formValues.userName ||
            (!formValues.password &&
              formValues.confirmPassword === formValues.password)
          }
        >
          Create Account
        </button>
      </form>
    </div>
  )
}

export default Register
