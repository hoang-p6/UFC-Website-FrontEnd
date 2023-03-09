import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReviewForm from './ReviewForm'
import UpdateReviewForm from './UpdateReviewForm'
import Client from '../services/api'
import '../styles/FightDetails.css'

const FightDetails = ({ user }) => {
  const [reviews, setReviews] = useState([])
  const [userName, setUserName] = useState('')
  const [loaded, setLoaded] = useState(false)
  const [userDetails, setUserDetails] = useState({})
  const [reviewId, setReviewId] = useState(1)
  let { fight_id } = useParams()
  const [displayUpdate, setDisplayUpdate] = useState(false)
  const [fightersCards, setFightersCards] = useState('')
  const [fighterOne, setFighterOne] = useState('')
  const [fighterTwo, setFighterTwo] = useState('')
  const getFightInfo = async () => {
    const res = await axios.get(
      `http://localhost:3001/fights/${fight_id}/fighters`
    )
    setFighterOne(res.data[0])
    setFighterTwo(res.data[1])
  }
  console.log(fighterOne, fighterTwo)
  // console.log(fightersCards[0].firstName)
  // console.log(fightersCards[0].firstName, fightersCards[0].lastName)

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

  const updateReview = async (e, review) => {
    e.preventDefault()
    const res = await Client.put(
      `http://localhost:3001/reviews/${review.id}/update`
    )
  }
  useEffect(() => {
    getReviews()
    getUserName()
    getFightInfo()
  }, [loaded])
  console.log(userDetails)
  console.log(reviews)

  return user ? (
    <div className="fightDetails">
      <div>
        <h1>
          {fighterOne.firstName} {fighterOne.lastName} VS.{' '}
          {fighterTwo.firstName} {fighterTwo.lastName}
        </h1>

        <div className="stats-container">
          <img src={fighterOne.image} className="fighter-one-image" />
          <ul className="fighter-one-stats">
            <li>{fighterOne.country} </li>
            <li>{fighterOne.wins}</li>
            <li>{fighterOne.losses} </li>
            <li>{fighterOne.draws}</li>
          </ul>
          <ul className="stats-title">
            <li>Country </li>
            <li>Wins</li>
            <li>Losses</li>
            <li>Draws</li>
          </ul>
          <ul className="fighter-two-stats">
            <li>{fighterOne.country} </li>
            <li>{fighterOne.wins}</li>
            <li>{fighterOne.losses} </li>
            <li>{fighterOne.draws}</li>
          </ul>
          <img src={fighterTwo.image} className="fighter-two-image" />
        </div>
      </div>
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

            {review.userName === userDetails.userName && !displayUpdate && (
              <div className="userButtons">
                <button className="button" onClick={() => deleteReview(review)}>
                  Delete
                </button>
                <button onClick={() => displayUpdateForm(review.id)}>
                  Update Review
                </button>
              </div>
            )}
            {displayUpdate && review.id === reviewId && (
              <UpdateReviewForm
                userDetails={userDetails}
                reviews={reviews}
                reviewId={reviewId}
                setLoaded={setLoaded}
                setDisplayUpdate={setDisplayUpdate}
                review={review.review}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  ) : (
    <h1>Gotta be signed In</h1>
  )
}

export default FightDetails
