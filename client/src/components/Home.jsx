
import { GetCards } from '../services/CardServices'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [cards, setCards] = useState([])
  
  useEffect(()=> {
    const handleCards = async ()=> {
      const data = await GetCards()
      setCards(data)
    }
    handleCards()
  }, [])
  
  return (
    <div className="Main-Card">
      <h1 className='Title'>UFC HUB</h1>
      {cards.map((card) => (
        <div className='Card-main' key={card.id}>
          <div className='Card-Div'>
            <h2 className='Card-Title'>{card.title}</h2>
            <Link to={`/cards/${card.id}`}>
            <img src={card.image} alt='CardPicture'/>
            </Link>
            <p>Date: {card.date.split("T")[0]}</p>
            <p>Time: {card.startTime}</p>
            <p>City: {card.city}</p>
            <p>Country: {card.country}</p>
            <p>Arena: {card.arena}</p>
          </div>
          </div>
      ))
      }
    </div>
  )
}

export default Home
