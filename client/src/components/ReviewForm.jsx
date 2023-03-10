import { useState, useEffect } from 'react'
import axios from 'axios'
import Client from '../services/api'
import '../styles/ReviewForm.css'

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
    <div className='formDiv'>
      <h1>Make a review!</h1>
      <form onSubmit={handleSubmit}>
        <textarea id="review" cols="50" rows="10" onChange={handleChange} value={formValues.review} placeholder="Make your review here..."></textarea>
        <div className='ratingAndPost'>
          <div className='rating'>
            <label htmlFor="rating">Rating:</label>
            <select id="rating" onChange={handleChange} value={formValues.rating} className="dropdown">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <button type="submit" className='postButton'>Post</button>
        </div>
      </form>
    </div>
  )
}

export default ReviewForm
