import React from 'react'
import { useNavigate } from 'react-router'

import Navbar from './navbar'



function Search() {
  const navigate = useNavigate()
  const [userPokemon, setUserPokemon] = React.useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault() 
    userPokemon.toLowerCase()
    navigate(`/pokemon/${userPokemon.toLowerCase()}`)
  }

  const handleChange = (e) => {
    setUserPokemon(e.target.value)    
  }
  console.log(userPokemon)

  return (
    <section>
      <div>
        <Navbar/>
      </div>    
      <form className="searchbar" id="search-bar" onSubmit={handleSubmit}> 
        <input 
          type="search" 
          id="user-search" 
          onChange={handleChange}
          placeholder="Search For Pokemon"/>
        <button type="submit" onSubmit={handleSubmit}>Search</button>
      </form>
    </section>
  )
}

export default Search