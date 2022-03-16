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
    <section className="search-container">
      <div>
        <Navbar/>
      </div>    
      <form className="searchbar" id="search-bar" onSubmit={handleSubmit}> 
        <input 
          type="search" 
          id="user-search" 
          style={{
            background: 'white',
            fontWeight: 'bold',
            border: '1px, black, bold',
            float: 'center',
            padding: '10px',
            borderRadius: '5px',
            fontSize: '15px',
            textAlign: 'center',
          }}
          onChange={handleChange}
          placeholder="Search For Pokemon"/>
        <button 
          type="submit" 
          onSubmit={handleSubmit}
          style={{
            background: 'white',
            fontWeight: 'bold',
            float: 'center',
            padding: '10px',
            borderRadius: '5px',
            border: '1px, black, bold',
            fontSize: '15px',
            textAlign: 'center',
          }}>Search
        </button>
      </form> 
      <div className="search-image">
        <img src="https://i.imgur.com/iSBMZcx.png" alt="pikachu"></img>
      </div>
    </section>
  )
}

export default Search