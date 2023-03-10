import { useState, useEffect } from 'react'
import axios from 'axios'
import Client from '../services/api'
import '../styles/Forms.css'

const AddFighterForum = () => {
  const initialState = {
    firstName: '',
    lastName: '',
    wins: '',
    losses: '',
    draws: '',
    birthDate: '',
    country: '',
    division: '',
    image: ''
  }

  const [formValues, setFormState] = useState(initialState)

  const handleSubmit = async (e) => {
    e.preventDefault()

    await axios.post('http://localhost:3001/fighters/create', formValues)

    setFormState(initialState)
  }

  const handleChange = (e) => {
    setFormState({ ...formValues, [e.target.id]: e.target.value })
    console.log(formValues)
  }
  return (
    <div className="fighter-form-container">
      <form onSubmit={handleSubmit} className="addFighterForm">
        <div className="fighter-first-div"></div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          onChange={handleChange}
          value={formValues.firstName}
          className="fighter-form-firstName"
        ></input>
        <div className="fighter-last-div"></div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          onChange={handleChange}
          value={formValues.lastName}
          className="fighter-form-lastName"
        ></input>
        <div className="fighter-wins-div"></div>
        <label htmlFor="wins">Wins</label>
        <input
          type="integer"
          id="wins"
          onChange={handleChange}
          value={formValues.wins}
          className="fighter-form-wins"
        ></input>
        <div className="fighter-losses-div"></div>
        <label htmlFor="losses">Losses</label>
        <input
          type="integer"
          id="losses"
          onChange={handleChange}
          value={formValues.losses}
          className="fighter-form-losses"
        ></input>
        <div className="fighter-draws-div"></div>
        <label htmlFor="draws">Draws</label>
        <input
          type="integer"
          id="draws"
          onChange={handleChange}
          value={formValues.draws}
          className="fighter-form-draws"
        ></input>
        <div className="fighter-DOB-div"></div>
        <label htmlFor="birthDate">DOB</label>
        <input
          type="text"
          id="birthDate"
          onChange={handleChange}
          value={formValues.birthDate}
          className="fighter-form-DOB"
        ></input>
        <div className="fighter-country-div"></div>
        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          onChange={handleChange}
          value={formValues.country}
          className="fighter-form-country"
        ></input>
        <div className="fighter-division-div"></div>
        <label htmlFor="division">Division</label>
        <input
          type="text"
          id="division"
          onChange={handleChange}
          value={formValues.division}
          className="fighter-form-division"
        ></input>
        <div className="fighter-image-div"></div>
        <label htmlFor="image">Image</label>
        <input
          type="text"
          id="image"
          onChange={handleChange}
          value={formValues.image}
          className="fighter-form-image"
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddFighterForum
