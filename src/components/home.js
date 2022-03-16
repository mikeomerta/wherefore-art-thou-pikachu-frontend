import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="home-container">
      <div className="hero-image">
      </div>
      <div className="home-text-container">
        <h1>Wherefore Art Thou Pikachu</h1>
        <Link to="/pokemon"><button className='search-link-button'>Search for Pokemon</button></Link>
      </div>  
    </section>
  )
}

export default Home
