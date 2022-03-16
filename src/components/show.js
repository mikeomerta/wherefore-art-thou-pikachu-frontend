import React from 'react'
import axios from 'axios'

import { useLocation } from 'react-router'
import { useParams } from 'react-router-dom'

function Show() {
  useLocation()
  const { userPokemon } = useParams()
  console.log(userPokemon)
  const [pokemon, setPokemon] = React.useState([])


  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get('/api/pokemon')
      setPokemon(res.data)
    }
    getData()
  }, [])

  console.log(pokemon)



  return (
    <section>
      <header>
        <h1>Show Page</h1>
      </header>
      <div>
        {pokemon.filter}
        {pokemon.map((character) => (
          <>
          <h3 key={character.name}>{character.name}</h3>
          <img src={character.image}></img>
          <h4>{character.pokedexEntry}</h4>
          </>
        ))}       
      </div>
    </section>
    
  )
}

export default Show