import React from 'react';
import {NavLink} from 'react-router-dom'

function Header () {
    return (
        <>
        <div className='header'>
        <h1>Hikoi Around</h1>
      <nav className='App-nav'>
        <NavLink exact activeClassName='active-link' to='/' >Home</NavLink>
        <NavLink exact activeClassName='active-link' to='/art' >Art</NavLink>
        <NavLink exact activeClassName='active-link' to='/urban' >Urban</NavLink>
        <NavLink exact activeClassName='active-link' to='/nature' >Nature</NavLink>
        {/* <NavLink exact activeClassName='active-link' to='/art_journal' >Art/Journal</NavLink> */}
      </nav>
      </div>
        </>
    )
}

export default Header