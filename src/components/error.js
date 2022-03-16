import Navbar from './navbar'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <section>
      <div>
        <Navbar/>
      </div>    
      <div className="error-text">
        <h1>Nay pokemon hath found with yond nameth. Prithee tryeth again</h1>
      </div>
      <div>
        <Link to="/pokemon"><button className='search-link-button'>Search for Pokemon</button></Link>
      </div>
      
      <div className="error-image">
        <img src="https://i.imgur.com/aMc8iRh.jpg" alt="Ash Ketchum crying"></img>
      </div>
      
    </section>
  )
}

export default Error