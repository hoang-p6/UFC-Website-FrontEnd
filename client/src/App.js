import './App.css'
import React from 'react'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'
import Nav from './components/Nav'
import Home from './components/Home'
import CardDetails from './components/CardDetails'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import axios from 'axios'
import { GetCards } from './services/CardServices'
import FightDetails from './components/FightDetails'
import AdminControls from './components/AdminControls'

function App() {
  const [user, setUser] = useState(null)
  const [cards, setCards] = useState([])
  const [reviews, setReviews] = useState([])



  const handleLogout = () => {
    setUser(null)
    localStorage.clear()
  }
  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)

  }
  const handleCards = async () => {
    const data = await GetCards()
    setCards(data)
  }




  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
    handleCards()




  }, [])


  return (
    <div className="App">
      <Nav user={user} handleLogout={handleLogout} checkToken={checkToken} />
      <main>
        <Routes>
          <Route path="/" element={<Home cards={cards} />}></Route>
          <Route path="/login" element={<Login setUser={setUser} />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/cards/:id"
            element={<CardDetails getCards={GetCards} cards={cards} />}
          ></Route>
          <Route
            path="/fightdetails/:fight_id"
            element={<FightDetails user={user} />}
          ></Route>
          <Route path='/admincontrols' element={<AdminControls user={user} />}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
