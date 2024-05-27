import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GetPlayers from '../GetPlayers'
import AddPlayer from '../AddPlayer'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<h1>Home Page</h1>}/>
        <Route path='/players' element={<GetPlayers/>} />
        <Route path='/addplayer' element={<AddPlayer/>} />
    </Routes>
  )
}

export default Router
