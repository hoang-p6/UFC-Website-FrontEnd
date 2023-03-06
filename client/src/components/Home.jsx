import Card from './Card'
import { GetCards } from '../services/CardServices'
import { useEffect, useState } from 'react'

const Home = () => {
  const [cards, setCards] = useState([])
  useEffect(() => {
    const handleCards = async () => {
      const data = await GetCards()
      setCards(data)
    }
    handleCards()
  }, [])
  return (
    <div>
      {cards.map((card) => (
        <h1>{card.title}</h1>
      ))}
    </div>
  )
}

export default Home
