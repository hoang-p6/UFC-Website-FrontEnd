import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReviewForm from './ReviewForm'
import Client from '../services/api'

const FightDetails = ({ user }) => {
  const [reviews, setReviews] = useState([])
  const [userName, setUserName] = useState('')
  const [loaded, setLoaded] = useState(false)
  let { fight_id } = useParams()

  const getReviews = async () => {
    let reviews = await axios.get(
      `http://localhost:3001/fights/${fight_id}/reviews`
    )
    setReviews(reviews.data)
    setLoaded(false)
  }

  const getUserName = async () => {
    const userName = await axios.get(
      `http://localhost:3001/auth/${user.id}/details`
    )
    setUserName(userName.data.userName)
  }

  const deleteReview = async (review) => {
    await Client.delete(`http://localhost:3001/reviews/${review.id}/delete`)
    setLoaded(true)
  }

  const updateReview = async (e, review) => {
    e.preventDefault()
    const res = await Client.put(
      `http://localhost:3001/reviews/${review.id}/update`
    )
  }
  useEffect(() => {
    getReviews()
    getUserName()
    deleteReview()
  }, [loaded])

  return user ? (
    <div>
      <ReviewForm
        fight_id={fight_id}
        user={user}
        userName={userName}
        getUserName={getUserName}
        setLoaded={setLoaded}
      />
      <div>
        {reviews.map((review) => (
          <div key={review.id}>
            <h3>{review.userName}</h3>
            <input type="text" value={review.review} />
            <input type="text" value={review.rating} />

            <button className="button" onClick={() => deleteReview(review)}>
              Delete
            </button>
            <button>Edit</button>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <h1>Gotta be signed In</h1>
  )
}

export default FightDetails
