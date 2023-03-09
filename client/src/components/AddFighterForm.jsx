import { useState, useEffect } from 'react'
import axios from 'axios'
import Client from '../services/api'

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
    <div>
      <form onSubmit={handleSubmit} className="addFighterForm">
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" onChange={handleChange} value={formValues.firstName}></input>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" onChange={handleChange} value={formValues.lastName}></input>
        <label htmlFor="wins">Wins</label>
        <input type="integer" id="wins" onChange={handleChange} value={formValues.wins}></input>
        <label htmlFor="losses">Losses</label>
        <input type="integer" id="losses" onChange={handleChange} value={formValues.losses}></input>
        <label htmlFor="draws">Draws</label>
        <input type="integer" id="draws" onChange={handleChange} value={formValues.draws}></input>
        <label htmlFor="birthDate">DOB</label>
        <input type="text" id="birthDate" onChange={handleChange} value={formValues.birthDate}></input>
        <label htmlFor="country">Country</label>
        <input type="text" id="country" onChange={handleChange} value={formValues.country}></input>
        <label htmlFor="division">Division</label>
        <input type="text" id="division" onChange={handleChange} value={formValues.division}></input>
        <label htmlFor="image">Image</label>
        <input type="text" id="image" onChange={handleChange} value={formValues.image}></input>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddFighterForum