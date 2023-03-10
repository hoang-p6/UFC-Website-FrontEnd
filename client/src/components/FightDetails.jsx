import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReviewForm from './ReviewForm'
import UpdateReviewForm from './UpdateReviewForm'
import Client from '../services/api'
import { Link } from 'react-router-dom'
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
  // const name = fighterOne.firstName
  // const firstFighter = name.toUpperCase()
  // console.log(firstFighter)
  return user ? (
    <div className="fightPage">
      <div className="Details">
        <h1 className="fighterNames">
          {fighterOne.firstName} {fighterOne.lastName} VS.{' '}
          {fighterTwo.firstName} {fighterTwo.lastName}
        </h1>

        <div className="stats-container">
          <img src={fighterOne.image} className="fighter-one-image" />

          <div className=""></div>
          <ul className="fighter-stats">
            {/* ////////COUNTRY////// */}
            {/* <li className="country-stats"> */}
            <h1 className="country-one">{fighterOne.country}</h1>{' '}
            <h1 className="country-label">COUNTRY</h1>{' '}
            <h1 className="country-three">{fighterTwo.country}</h1>{' '}
            {/* </li> */}
            {/* ///////WINS//////// */}
            {/* <li className="wins-stats"> */}
            <h1 className="wins-four">{fighterOne.wins}</h1>
            <h1 className="win-label">WINS</h1>
            <h1 className="wins-six">{fighterTwo.wins}</h1>
            {/* </li> */}
            {/* ///////LOSSES//////// */}
            {/* <li className="losses-stats"> */}
            <h1 className="losses-seven">{fighterOne.losses}</h1>
            <h1 className="losses-label">LOSSES</h1>
            <h1 className="losses-nine">{fighterTwo.losses}</h1> {/* </li> */}
            {/* ///////DRAW//////// */}
            {/* <li className="draws-stats"> */}
            <h1 className="draws-ten">{fighterOne.draws}</h1>
            <h1 className="draw-label">DRAWS</h1>
            <h1 className="draws-twelve">{fighterTwo.draws}</h1>
            {/* </li> */}
          </ul>
          <img src={fighterTwo.image} className="fighter-two-image" />
        </div>
      </div>
      <div className="reviews-section">
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
      <ReviewForm
        fight_id={fight_id}
        user={user}
        userName={userName}
        getUserName={getUserName}
        setLoaded={setLoaded}
      />
    </div>
  ) : (
    <div>
      <h1>Sign in to see fight details and reviews!</h1>
      <Link to="/login" className="register-login">
        Sign In
      </Link>
      <h1>
        Don't have an account?{' '}
        <Link to="/register" className="create-new-account">
          Create New Account
        </Link>
      </h1>
    </div>
  )
}

export default FightDetails
