import React from 'react'
import s from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>Profile</div>
      <div>Message</div>
    </nav>
  )
}

export default Navbar
