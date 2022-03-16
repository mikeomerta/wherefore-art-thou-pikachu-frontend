import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="home-container">
      <div className="hero-image">
        <img src="https://i.imgur.com/JkaG4KU.jpg" alt="Pikachu investigating"></img>
      </div>
      <section className="inner-home-container">
        <div className="home-text-container">
          <h1>Wherefore Art Thou Pikachu</h1>
          <div className="search-button">
            <Link 
              to="/pokemon">
              <button 
                className='search-link-button'
                style={{
                  background: 'white',
                  fontWeight: 'bold',
                  border: 'none',
                  float: 'center',
                  padding: '10px',
                  borderRadius: '5px',
                  fontSize: '15px',
                  textAlign: 'center',
                }}>
              Search for Pokemon
              </button>
            </Link>
          </div>  
        </div> 
      </section>      
    </section>
  )
}

export default Home
