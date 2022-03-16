import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/home'
import Search from './components/search'
import Show from './components/show'

function App() {

  return (
    <BrowserRouter> 
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/pokemon" element = {<Search />} />
        <Route path = "/pokemon/:pokemonId" element = {<Show />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


