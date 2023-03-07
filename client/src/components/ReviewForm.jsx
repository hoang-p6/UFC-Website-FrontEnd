import { useState } from 'react'

const ReviewForm = () => {
  const initialState = {
    review: '',
    rating: 1
  }
  const [formValues, setFormValues] = useState(initialState)
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    await {}
    setFormValues(initialState)
  }
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
      </form>
    </div>
  )
}

export default ReviewForm
