import React from 'react'
import App from './App'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'

const Approutes = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<App></App>} />
        <Route exact path='/Home' element={<Home></Home>} />
      </Routes>
    </div>
  )
}

export default Approutes
