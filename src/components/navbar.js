import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">      
      <div className="home-link">
        <Link to="/">Home</Link>
      </div>
    </nav>
  )
}

export default Navbar