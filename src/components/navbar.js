import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar"
      style={{
        fontWeight: 'bold',
        float: 'center',
        padding: '10px',
        borderRadius: '5px',
        fontSize: '15px',
        textAlign: 'center',
      }}>      
      <div className="home-link">
        <Link to="/">Home</Link>
      </div>
    </nav>
  )
}

export default Navbar