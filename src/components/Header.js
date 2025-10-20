import React from 'react'

function Header() {
  return (
    <div>
      {/* <!-- Navbar --> */}
      <nav classNameName="navbar navbar-expand-lg fixed-top glass-navbar" id='navbar'>
        <div classNameName="container ">
          
          <div className="collapse navbar-collapse " id="navbarNav">
            
            <ul className="navbar-nav ms-auto ">
              <a classNameName="navbar-brand  " href="#home" id='title'>Teja Kutchula</a>
              <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About Me</a></li>
              <li className="nav-item"><a className="nav-link" href="#skills">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#skills">Albums</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Header
