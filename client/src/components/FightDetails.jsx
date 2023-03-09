import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReviewForm from './ReviewForm'
import UpdateReviewForm from './UpdateReviewForm'
import Client from '../services/api'

const FightDetails = ({ user }) => {
  const [reviews, setReviews] = useState([])
  const [userName, setUserName] = useState('')
  const [loaded, setLoaded] = useState(false)
  const [userDetails, setUserDetails] = useState({})
  const [reviewId, setReviewId] = useState(1)
  let { fight_id } = useParams()
  const [displayUpdate, setDisplayUpdate] = useState(false)
  // console.log(fight_id)

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
    setUserDetails(userName.data)
  }

  const deleteReview = async (review) => {
    await Client.delete(`http://localhost:3001/reviews/${review.id}/delete`)
    setLoaded(true)

  }

  const displayUpdateForm = async (reviewId) => {
    setReviewId(reviewId)
    setDisplayUpdate(true)
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

            {(review.userName === userDetails.userName && !displayUpdate) &&
              <div className='userButtons'>
                <button className='button' onClick={() => deleteReview(review)}>Delete</button>
                <button onClick={() => displayUpdateForm(review.id)}>Update Review</button>

              </div>
            }
            {(displayUpdate && review.id === reviewId) &&
              <UpdateReviewForm userDetails={userDetails} reviews={reviews} reviewId={reviewId} setLoaded={setLoaded} setDisplayUpdate={setDisplayUpdate} review={review.review} />
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
