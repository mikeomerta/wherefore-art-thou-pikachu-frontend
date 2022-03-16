import React from 'react'
import axios from 'axios'

import { useLocation } from 'react-router'
import { useParams } from 'react-router-dom'

import Navbar from './navbar'
import Error from './error'

function Show() {
  useLocation()
  const { userPokemon } = useParams()
  const [pokemon, setPokemon] = React.useState([])
  const [isError, setIsError] = React.useState(false)
  

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get('/api/pokemon')
        setPokemon(res.data)
      } catch (err) {
        setIsError(true)
      }
    }
    getData()
  }, [])

  return (
    <section>
      <div>
        <Navbar/>
      </div>    
      <div className="pokemon-container">
        {isError && <Error />}
        {pokemon.filter(character => character.name.toLowerCase() === userPokemon.toLowerCase()).map((character) => (
          <>
            <h3 className="pokemon-name" key={character.name}>{character.name}</h3>
            <img className="pokemon-image" src={character.image}></img>
            <h4 className="pokemon-text">{character.pokedexEntry}</h4>
          </>
        ))}       
      </div>
    </section>
    
  )
}

export default Show