import { GetCards } from '../services/CardServices'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = ({ cards }) => {
  
  return (
    <section className='container-grid'>
    <div className="Main-Card">
      <h1 className="Title">UFC HUB</h1>
      {cards.map((card) => (
        <div className="Card-main" key={card.id}>
          <div className="Card-Div">
            <h2 className="Card-Title">{card.title}</h2>
            <Link to={`/cards/${card.id}`}>
              <img src={card.image} alt="CardPicture" />
            </Link>
            <p className="Card-Title">Date: {card.date.split('T')[0]}</p>
          </div>
        </div>
      ))}
    </div>
    </section>
  )
}

export default Home
