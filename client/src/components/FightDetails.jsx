import ReviewForm from './ReviewForm'

const FightDetails = ({ user }) => {
  console.log(user)
  return user ? (
    <div>
      <ReviewForm />
    </div>
  ) : (
    <h1>Gotta be signed In</h1>
  )
}

export default FightDetails
