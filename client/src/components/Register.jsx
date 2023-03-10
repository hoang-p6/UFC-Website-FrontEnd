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
    <div className="register-form">
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
            placeholder="First Name"
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
            placeholder="Last Name"
          />
        </div>
        <div className="email-div">
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
            placeholder="Email"
          />
        </div>
        <div className="userName-div">
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
            placeholder="Username"
          />
        </div>
        <div className="password-div">
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
            placeholder="Password"
          />
        </div>
        <div className="confirm">
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
            placeholder="Confirm Password"
          />
        </div>

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
