import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReviewForm from './ReviewForm'

const FightDetails = ({ user }) => {
  const [reviews, setReviews] = useState([])
  const [userName, setUserName] = useState('')
  const [loaded, setLoaded] = useState(false)
  const [userDetails, setUserDetails] = useState({})
  let { fight_id } = useParams()
  // console.log(fight_id)

  const getReviews = async () => {
    let reviews = await axios.get(
      `http://localhost:3001/fights/${fight_id}/reviews`
    )
    setReviews(reviews.data)
  }

  const getUserName = async () => {
    const userName = await axios.get(
      `http://localhost:3001/auth/${user.id}/details`
    )
    setUserName(userName.data.userName)
    setUserDetails(userName.data)
  }

  const deleteReview = async (review) => {
    await axios.delete(`http://localhost:3001/reviews/${review.id}/delete`)
  }

  useEffect(() => {
    getReviews()
    getUserName()

  }, [loaded])
  console.log(userDetails)
  console.log(reviews)

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
            <h3>{review.review}</h3>
            <h3>{review.rating}</h3>
            {review.userName === userDetails.userName &&
              <button className='button' onClick={() => deleteReview(review)}>Delete</button>
            }





          </div>
        ))}
      </div>
    </div>
  ) : (
    <h1>Gotta be signed In</h1>
  )
}

export default FightDetails
