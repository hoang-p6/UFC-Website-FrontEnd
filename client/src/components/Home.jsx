
import { GetCards } from '../services/CardServices'
import { useEffect, useState } from 'react'

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
      {cards.map((cards) => (
        <div className='Card-main' key={cards.id}>
          <div className='Card-Div'>
            <h2 className='Card-Title'>{cards.title}</h2>
            <img src='https://www.insidesport.in/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-15-at-1.44.18-PM.jpeg' alt='JonesvGane'/>
            <p>Date: {cards.date}</p>
            <p>Time: {cards.startTime}</p>
            <p>City: {cards.city}</p>
            <p>Country: {cards.country}</p>
            <p>Arena: {cards.arena}</p>
          </div>
          </div>
      ))
      }
    </div>
  )
}

export default Home
