import React from 'react'
// import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/home'
import Search from './components/search'
import Show from './components/show'
import Error from './components/error'

function App() {

  // React.useEffect(() => {
  //   const getData = async () => {
  //     const res = await axios.get('/api/pokemon')
  //     console.log(res.data)
  //   } 
  //   getData()
  // })

  return (
    <BrowserRouter> 
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/pokemon" element = {<Search />} />
        <Route path = "/pokemon/:userPokemon" element = {<Show />} />
        <Route path = "pokemon/error" element = {<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


