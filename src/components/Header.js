import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      {/* <!-- Navbar --> */}
       <nav class="navbar navbar-expand-lg navbar-dark bg-info text-white " id='navbar'>
      <div class="container-fluid">
        <h1>Wedding photography</h1>
        <div className=''>
          <Link to="/home" className='m-3 text-decoration-none text-white font-weight-bold fs-5'>Home</Link>
          <Link to="/about" className='m-3 text-decoration-none text-white font-weight-bold fs-5'>About</Link>
          <Link to="/services" className='m-3 text-decoration-none text-white font-weight-bold fs-5'>Services</Link>
          <Link to="/albums" className='m-3 text-decoration-none text-white font-weight-bold fs-5'>Albums</Link>
          <Link to="/contact" className='m-3 text-decoration-none text-white font-weight-bold fs-5'>Contact</Link>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Header

