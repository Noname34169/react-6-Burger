import React, { useState } from 'react'
import './Header.scss'

const Header = () => {

  const [isActive, setIsActive]  = useState(false)


  const toggleBurger = () => {
    setIsActive(!isActive)
  }

  return (
    <>
    <header className="header">
        <div className="container">
            <div className="header__wrapper">

            <img className='logo' src="https://yt3.googleusercontent.com/ytc/AOPolaSAh5aophnGKJCcFyw0SIGK55_lfSSRSRBgRkFf=s900-c-k-c0x00ffffff-no-rj" alt="logo" />

            <div className={`header__menu ${isActive ? 'active' : ''}`}>
                <a href="">Home</a>
                <a href="">Catalog</a>
                <a href="">Portfolio</a>
                <a href="">Contacts</a>
            </div>

            <div onClick={toggleBurger} className={`burger ${isActive ? 'active' : ''}`}>
                <div></div>
                <div></div>
            </div>

            </div>
        </div>
    </header>
    </>
  )
}

export default Header