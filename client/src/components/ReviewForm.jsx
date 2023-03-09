import { useState, useEffect } from 'react'
import axios from 'axios'
import Client from '../services/api'

const ReviewForm = ({ fight_id, user, userName, getUserName, setLoaded }) => {
  let username = userName
  const initialState = {
    review: '',
    rating: 1,
    userId: user.id,
    userName: '',
    fightId: parseInt(fight_id)
  }

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.id]: e.target.value,
      userName: userName
    })
    setLoaded(false)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await Client.post(
      `http://localhost:3001/reviews/${fight_id}/addreview`,
      formValues
    )

    setFormValues(res.data)
    setFormValues(initialState)

    setLoaded(true)
  }

  useEffect(() => {
    getUserName()
  }, [formValues])
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="review"
          type="text"
          value={formValues.review}
          required
        />
        <label htmlFor="rating">Rating:</label>
        <select id="rating" onChange={handleChange} value={formValues.rating}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button type="submit">Post</button>
      </form>
    </div>
  )
}

export default ReviewForm
