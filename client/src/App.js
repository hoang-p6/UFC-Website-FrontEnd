import './App.css'
import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import CardDetails from './components/CardDetails'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/:carddetailsid" element={<CardDetails />}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
