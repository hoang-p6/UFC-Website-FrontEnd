import { GetCards } from '../services/CardServices'
import { useEffect, useReducer, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'
const Home = ({ cards }) => {
  console.log(cards)
  return (
    <section className="cardSection">
      <div className="welcomeDiv">
        <h1 className="welcomeMessage">EVENTS</h1>
      </div>
      <div className="cards">
        {cards.map((card) => (
          <div className="cardInfo" key={card.id}>
            <div className="Card-Div">
              <h2 className="Card-Title">{card.title}</h2>
              <Link to={`/cards/${card.id}`}>
                <img src={card.image} alt="CardPicture" className="mainImage" />
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
