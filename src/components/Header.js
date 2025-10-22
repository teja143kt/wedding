import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      {/* <!-- Navbar --> */}
       <nav class="navbar navbar-expand-lg navbar-dark bg-info text-white   " id='navbar'>
      <div class="container-fluid" id ='nav-container'>
        <div className='title'>
        <h1>Wedding photography</h1>
        </div>
        <div className=' links' style={{marginTop:'20px'}} >
          <Link to="/home" className='m-3 text-decoration-none text-white font-weight-bold fs-5' style={{color:'black'}}>Home</Link>
          <Link to="/aboutus" className='m-3 text-decoration-none text-white font-weight-bold fs-5' style={{color:'black'}}>Aboutus</Link>
          <Link to="/services" className='m-3 text-decoration-none text-white font-weight-bold fs-5' style={{color:'black'}}>Services</Link>
          <Link to="/albums" className='m-3 text-decoration-none text-white font-weight-bold fs-5' style={{color:'black'}}>Albums</Link>
          <Link to="/contact" className='m-3 text-decoration-none text-white font-weight-bold fs-5' style={{color:'black'}}>Contact</Link>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Header

