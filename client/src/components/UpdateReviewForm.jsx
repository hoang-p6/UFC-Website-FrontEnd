import { useState, useEffect } from 'react'
import axios from 'axios'
import Client from '../services/api'

const UpdateReviewForm = ({ userDetails, review, reviewId, setLoaded, setDisplayUpdate }) => {

  const rating = parseInt(review.id)

  const initialState = {
    userId: userDetails.id,
    rating: 1,
    review: '',
    userName: userDetails.userName,

  }

  const [reviewState, setReviewState] = useState(initialState)


  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('HERE')
    console.log(reviewState)

    await Client.put(`http://localhost:3001/reviews/${reviewId}/update`, reviewState)

    setReviewState(initialState)
    setLoaded(true)
    setDisplayUpdate(false)


  }


  const handleChange = (e) => {


    setReviewState({ ...reviewState, [e.target.id]: e.target.value })
    console.log(reviewState)


  }
  return (
    <div>
      <form onSubmit={handleSubmit} className='updateForm'>

        <label htmlFor="rating">Rating</label>
        <select id="rating" onChange={handleChange} value={reviewState.rating}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label htmlFor="review">Review</label>
        <textarea id="review" cols="50" rows="10" onChange={handleChange} value={reviewState.review}></textarea>
        <button type="submit">Update</button>

      </form>
    </div>
  )
}

export default UpdateReviewForm