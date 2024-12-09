import React from 'react'
import netflix_logo1 from '../../assets/netflix_logo1.png'
import netflix_avatar from '../../assets/netflix_avatar.png'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <img className='logo' src={netflix_logo1} alt="netflix_logo1"  />
      <img className='avatar' src={netflix_avatar} alt="netflix_avatar"/>
    </div>
  )
}

export default Navbar
