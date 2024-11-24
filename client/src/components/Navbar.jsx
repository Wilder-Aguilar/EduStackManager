import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
<section className="navigation">
  <div className="nav-container">
    <div className="brand">
      <a href="#!">📚 FullStack Academy</a>
    </div>
    <nav>
  <div className="nav-mobile">
    <a id="nav-toggle" href="#!"><span></span></a>
  </div>
  <ul className="nav-list">
    <Link to="/"><li>Home</li></Link>
    <Link to="/courses"><li>Courses</li></Link>
    <Link to="/about"><li>About Us</li></Link>
    <Link to="/contact"><li>Contact</li></Link>
    </ul>
</nav>
    </div>
</section>
  )
}

export default Navbar
