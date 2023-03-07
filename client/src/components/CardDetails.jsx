import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const CardDetails = ({ cards, getCards }) => {
  const { id } = useParams()
  const [thisCard, setThisCard] = useState(cards)
  // const selectCard = () => {
  //   setThisCard(cards.find((card) => card.id === `${id}`))
  // }
  const selectCard = async () => {
    const res = await axios.get(`http://localhost:3001/cards/${id}`)
    setThisCard(res.data[0])
  }
  useEffect(() => {
    selectCard()
  }, [])

  console.log(thisCard)
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
    </div>
  )
}

export default CardDetails
