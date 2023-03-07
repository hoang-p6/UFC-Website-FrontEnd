
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

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
    console.log(fighters)
  }
  useEffect(() => {
    selectCardAndFighters()
  }, [loaded])
  const fights = cards[id - 1].Fights

  return (
    <div>
      <div>
        <h1>{thisCard.title}</h1>
        <img src={thisCard.image} alt="card-image" />
        <h2>{thisCard.startTime}</h2>
        <h2>{thisCard.arena}</h2>
        <h2>
          {thisCard.city}, {thisCard.country}
        </h2>
      </div>
      <div>
        {fights.map((fight) => (
          <div key={fight.id}>
            <h1>{fight.division}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}


