import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ReviewForm from './ReviewForm'
import { Link } from 'react-router-dom'
import '../styles/CardDetails.css'

const CardDetails = ({ cards, getCards }) => {
  const { id } = useParams()
  const [thisCard, setThisCard] = useState(cards)
  const [fighters, setFighters] = useState([])
  const [loaded, setLoaded] = useState(false)
  const selectCardAndFighters = async () => {
    const res = await axios.get(`http://localhost:3001/cards/${id}`)
    setThisCard(res.data[0])

    const resTwo = await axios.get(`http://localhost:3001/cards/${id}/fighters`)
    setFighters(resTwo.data.fightersOnCard)
    setLoaded(true)
  }
  useEffect(() => {
    selectCardAndFighters()
  }, [loaded])


  return (
    <div className='fightsAndDetails'>
      <div className='fightDetails'>
        <h1 className='cardTitle'>{thisCard.title}</h1>
        <img src={thisCard.image} alt="card-image" className='' />
        <div className='cardDetails'>
          <h2>{thisCard.startTime}</h2>
          <h2>{thisCard.arena}</h2>
          <h2>
            {thisCard.city}, {thisCard.country}
          </h2>
        </div>
      </div>
      <div>
        <div>
          {fighters.map((fightersDetails) => (
            <Link to={`/fightdetails/${fightersDetails[3]}`}>
              <div key={fightersDetails[0].firstName} className="eachFight">
                <div className=''>

                  <h1>
                    {fightersDetails[0][0].firstName}{' '}
                    {fightersDetails[0][0].lastName}
                  </h1>
                  <h2>VS</h2>
                  <h1>
                    {fightersDetails[0][1].firstName}{' '}
                    {fightersDetails[0][1].lastName}
                  </h1>
                </div>
                <div className='imageMatch'>
                  <img src={fightersDetails[0][0].image} alt="fighterPicture" />
                  <h1>VS.</h1>
                  <img src={fightersDetails[0][1].image} alt="fighterPicture" />
                </div>
                <h2>Division: {fightersDetails[1]}</h2>
                <h2>Winner: {fightersDetails[2]}</h2>
                {/* <h2>Fight Id: {fightersDetails[3]}</h2> */}
                {/* <h2>Card Id: {fightersDetails[4]}</h2> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardDetails
