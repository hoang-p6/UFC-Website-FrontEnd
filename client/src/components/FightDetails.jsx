import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReviewForm from './ReviewForm'

const FightDetails = ({ user }) => {
  console.log(user)
  const [reviews, setReviews] = useState([])
  let { fight_id } = useParams()
  console.log(fight_id)


  const getReviews = async () => {
    let reviews = await axios.get(`http://localhost:3001/fights/${fight_id}/reviews`)
    setReviews(reviews.data)
  }

  useEffect(() => {
    getReviews()
  }, [])
  console.log(reviews)
  return user ? (
    <div>
      <ReviewForm />
      <div>
        {reviews.map((review) => (
          <div key={review.id}>
            <h3>{review.review}</h3>
            <h3>{review.rating}</h3>

          </div>
        ))}
      </div>
    </div>
  ) : (
    <h1>Gotta be signed In</h1>
  )
}

export default FightDetails
