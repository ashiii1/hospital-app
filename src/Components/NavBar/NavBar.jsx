import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./NavBar.css";
import logo from "../../assets/Logo.png"
import HeadLogo from "../../assets/Logo_Header.png"
import { FaHome, FaUserMd, FaBriefcase, FaInfoCircle, FaPhone } from "react-icons/fa";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <div 
          className={`hamburger ${menuOpen ? "active" : ""}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/newsupdate">News and Updates</Link></li>
          <li><Link to="/hmo">HMO</Link></li>
          <li><Link to="/doctors">Doctors</Link></li>
          <li><Link to="/careers">Careers</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact"> Contact Us</Link> </li>
        </ul>
      </nav>
          <div className={`sidebar ${menuOpen ? "open" : ""}`}>
            
            <div className="sidebar-logo">
              <img src={HeadLogo} alt="Logo" />
            </div>
            <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/newsupdate" onClick={() => setMenuOpen(false)}>News and Updates</Link></li>
          <li><Link to="/hmo" onClick={() => setMenuOpen(false)}>HMO</Link></li>
          <li><Link to="/doctors" onClick={() => setMenuOpen(false)}>Doctors</Link></li>
          <li><Link to="/careers" onClick={() => setMenuOpen(false)}>Careers</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
        </ul>
      </div>
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}

      {/* Mobile Bottom Navigation */}
<div className="mobile-bottom-nav">
  <Link to="/">
    <FaHome />
    <span>Home</span>
  </Link>

  <Link to="/doctors">
    <FaUserMd />
    <span>Doctors</span>
  </Link>

  <Link to="/careers">
    <FaBriefcase />
    <span>Careers</span>
  </Link>

  <Link to="/about">
    <FaInfoCircle />
    <span>About</span>
  </Link>

  <Link to="/contact">
    <FaPhone />
    <span>Contact</span>
  </Link>
</div>
    </>
  )
}

export default NavBar;