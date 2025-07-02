import React, { useState } from 'react'
import { GiLotus } from 'react-icons/gi'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-text">Swati Yoga</span>
        <span className="logo-icon"><GiLotus size={28} color="#8F501B" /></span>
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <HiX size={28} color="#8F501B" /> : <HiMenu size={28} color="#8F501B" />}
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#classes" onClick={() => setMenuOpen(false)}>Classes</a></li>
        <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
