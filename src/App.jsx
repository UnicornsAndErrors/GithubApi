import React from 'react'
import Home from './components/Home'
import {Routes, Route} from "react-router-dom"
import User from './components/User'
import "./App.css"

const App = () => {
  return (
    <div className="container1">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:login" element={<User />} />
      </Routes>
      
   
    </div>
  )
}

export default App