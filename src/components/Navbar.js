import { Link } from 'react-router-dom';

export default function Navbar() {
  return(
    <nav className="nav">
      <Link to="/" className="nav-item">Home</Link>
      <Link to="/profile" className="nav-item">Profile</Link>
      <Link to="/blog" className="nav-item">Blog</Link>
      <Link to="/contact" className="nav-item">Contact</Link>
    </nav>
  )
}